import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonTitle,
  RefresherEventDetail,
  IonCardSubtitle
} from '@ionic/react';
import {
  getDoc,
  collection,
  doc,
  updateDoc,
  arrayUnion,
  increment,
  onSnapshot
} from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { auth, FirestoreDB } from '../../firebase';
import { useHistory } from 'react-router';
import AuthContext from '../../store/auth-context';
import AdminContext from '../../store/admin-context';
import './teamHome.scss';
import team from '../../assets/team.png';
import solo from '../../assets/solo.png';

// Credit of images via Canva open source -> artist 'goodstudio'

const TeamJoin: React.FC = () => {
  interface teamData {
    name: string;
    leader: string;
    size: number;
    type: string;
    password: string;
  }

  interface selectFormat {
    text: string;
    value: string;
  }

  const history = useHistory(); // used to move to different pages
  const [joinTeam, setJoin] = useState(''); // variable to get the team that the user chooses from the drop down menu
  const [teamPass, setPass] = useState(''); // variable to collect team password
  const [allTeams, setTeams] = useState(Array<teamData>); // array of teams from database
  const [buttonValid, setValid] = useState(false); // to check if the button should be enabled or not

  const adData = useContext(AdminContext); // admin context
  const ctx = useContext(AuthContext); // auth context

  // join the team
  const joined = async () => {
    const currentUserRef = doc(
      FirestoreDB,
      'users',
      auth.currentUser.email as string
    ); // get user reference
    const userSnap = await getDoc(currentUserRef); // get user data
    const userData = userSnap.data(); // set user data
    const teamRef = doc(FirestoreDB, 'teams', joinTeam); // get team reference
    const teamSnap = await getDoc(teamRef); // get team data
    const teamData = teamSnap.data(); // set team data
    if (teamData.members.length >= 1) {
      // if there are members in the team
      await updateDoc(currentUserRef, {
        team: joinTeam
      }); // update the user's document
      await updateDoc(teamRef, {
        members: arrayUnion(auth.currentUser.email),
        totalStep: increment(userData.totalStep),
        avg_steps:
          (teamData.totalStep + userData.totalStep) /
          (teamData.members.length + 1)
      }); // update the teams members, their total steps, and the new average steps
    } else {
      // if there are no members in the team
      await updateDoc(currentUserRef, {
        team: joinTeam,
        team_leader: true
      }); // update the user's document and set them as the team leader
      await updateDoc(teamRef, {
        members: arrayUnion(auth.currentUser.email),
        totalStep: increment(userData.totalStep),
        avg_steps:
          (teamData.totalStep + userData.totalStep) /
          (teamData.members.length + 1),
        leader: userData.email
      }); // update the teams members, their total steps, and the new average steps
    }
    history.push('/app/team'); // move to the team page
  };

  // join the team
  const toJoin = () => {
    if (joinTeam === '') {
      alert('No team name has been entered as of yet');
      return; // team name cannot be empty
    }
    for (let i = 0; i < allTeams.length; i++) {
      if (allTeams[i].name === joinTeam) {
        // check if the team name entered matches a team in the database
        if (allTeams[i].type === 'Private') {
          // check if the team is private
          if (teamPass === '') {
            // private team but no password entered
            alert(
              'A password needs to be entered as this team is private. Please enter the password and try again.'
            );
            return;
          } else if (allTeams[i].password === teamPass) {
            joined(); // password is correct
            return;
          } else {
            // incorrect password
            alert(
              'The password entered does not match the password for the team. Please try again'
            );
            return;
          }
        } else {
          // public team
          joined();
          return;
        }
      }
    }
    alert('No team was found that matched what was entered'); // no team was found
    return;
  };

  // handle refresher
  async function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay execution for 2 seconds
    event.detail.complete(); // Notify the refresher that loading is complete
  }

  // display the teams
  const DisplayTeams = (teams: teamData[]): any => {
    if (teams.length > 0) {
      // if there are teams
      return (
        <IonCard className="join-team-card">
          <IonCardHeader>
            <IonCardTitle class="ion-text-center">Teams</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow class="header-row">
                <IonCol sizeMd="4" size="4" class="header-col admin-col">
                  Team Name
                </IonCol>
                <IonCol sizeMd="4" size="4" class="header-col admin-col">
                  Team Leader
                </IonCol>
                <IonCol sizeMd="4" size="4" class="header-col admin-col">
                  Team Size
                </IonCol>
                <IonCol sizeMd="4" size="4" class="header-col admin-col">
                  Team Privacy
                </IonCol>
              </IonRow>
              {teams.map(
                (item: {
                  name: string;
                  leader: string;
                  size: number;
                  type: string;
                }) => (
                  <IonRow key={Math.random()}>
                    <IonCol sizeMd="4" size="4" class="admin-col">
                      {item.name}
                    </IonCol>
                    <IonCol sizeMd="4" size="4" class="admin-col">
                      {item.leader}
                    </IonCol>
                    <IonCol sizeMd="4" size="4" class="admin-col">
                      {item.size} / {adData.maxSize}
                    </IonCol>
                    <IonCol sizeMd="4" size="4" class="admin-col">
                      {item.type}
                    </IonCol>
                  </IonRow>
                )
              )}
            </IonGrid>
          </IonCardContent>
        </IonCard>
      );
    } else {
      // if there are no teams
      return (
        <>
          <IonItem>
            {' '}
            There are no teams that can be joined currently. Please make a team
          </IonItem>
        </>
      );
    }
  };

  // set the data
  async function getData(teamList: any) {
    const teams: Array<teamData> = []; // array of teams
    const teamNames: Array<selectFormat> = []; // array of team names
    const today = new Date();
    const deadline = new Date(adData.teamDate);
    if (deadline < today) {
      // if the deadline has passed
      setValid(true);
    } else {
      setValid(false);
    }
    teamList.forEach((doc: any) => {
      if (doc.data().members.length < adData.maxSize) {
        const allNames: selectFormat = {
          // for selection drop down method
          text: doc.data().name,
          value: doc.data().name
        };
        teamNames.push(allNames); // push the data to the array
        if (doc.data().status === '1') {
          // private team
          const temp: teamData = {
            name: doc.data().name as string,
            leader: doc.data().leader as string,
            size: doc.data().members.length as number,
            type: 'Private',
            password: doc.data().password
          };
          teams.push(temp); // push the data to the array
        } else {
          // public team
          const temp: teamData = {
            name: doc.data().name as string,
            leader: doc.data().leader as string,
            size: doc.data().members.length as number,
            type: 'Public',
            password: doc.data().password
          };
          teams.push(temp); // push the data to the array
        }
      }
    });
    teams.sort((a: any, b: any) =>
      a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
    );
    setTeams(teams); // set the teams
  }

  // update the data when the page loads
  // update the data when the teams are added, removed, or modified
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(FirestoreDB, 'teams'),
      (collection: any) => {
        const temp: any[] = [];
        collection.forEach((doc: any) => {
          temp.push(doc);
        });
        getData(temp);
      }
    );
    return () => {
      console.log('unsubscribing from team join page');
      unsubscribe();
    };
  }, [ctx.user, ctx.team]);

  // move to the team creation page
  const moveToCreateTeam = () => {
    history.push('/app/teamcreation');
  };

  // check team deadline
  function displayPage() {
    if (buttonValid === false) {
      return <>{DisplayTeams(allTeams)}</>;
    } else {
      return (
        <h1>The deadline to join or create a team was {adData.teamDate}.</h1>
      );
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <NavBar>
          <IonTitle> Team Join </IonTitle>
        </NavBar>
      </IonHeader>
      <IonContent fullscreen className="team-join">
        <IonRow>
          <IonCol sizeXs="12" sizeMd="6">
            <IonCard className="join-create-team-card">
              <IonCardHeader
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <img alt="Art depicting 6 team members in a team huddle" src={team} />
              </IonCardHeader>
              <IonCardTitle class="ion-text-center">
                Join an Existing Team!
              </IonCardTitle>
              <IonCardSubtitle class="ion-text-center">
                Enter the team name, password (if private) and click Join Team!
              </IonCardSubtitle>
              <IonCardContent>
                <IonRow>
                  <IonCol sizeXs="6" sizeMd="4">
                    <IonItem>
                      <IonLabel position="floating">Team</IonLabel>
                      <IonInput
                        onIonChange={(e) => setJoin(e.target.value as string)}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                  <IonCol sizeXs="6" sizeMd="4">
                    <IonItem>
                      <IonLabel position="floating">Team Password</IonLabel>
                      <IonInput
                        name="password"
                        onIonChange={(e) => setPass(e.target.value as string)}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                  <IonCol className="join-create-button" sizeXs="12" sizeMd="4">
                    <IonButton disabled={buttonValid} onClick={toJoin}>
                      Join Team
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol sizeXs="12" sizeMd="6">
            <IonCard className="join-create-team-card">
              <IonCardHeader
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <img alt="Art depicting a team leader raising their fist in triumph" src={solo} />
              </IonCardHeader>
              <IonCardTitle class="ion-text-center">
                Create a New Team!
              </IonCardTitle>
              <IonCardSubtitle class="ion-text-center">
                Don&apos;t see a team you&apos;d like to join? Then click Create
                a Team!
              </IonCardSubtitle>
              <IonCardContent>
                <IonCol className="join-create-button" sizeXs="12" sizeMd="12">
                  <IonButton disabled={buttonValid} onClick={moveToCreateTeam}>
                    Create a Team
                  </IonButton>
                </IonCol>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <>{displayPage()}</>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
      </IonContent>
    </IonPage>
  );
};

export default TeamJoin;
