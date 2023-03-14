import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  isPlatform
} from '@ionic/react';
import NavBar from '../../components/NavBar';
import { useContext, useEffect, useState } from 'react';
import AdminContext from '../../store/admin-context';
import { FirestoreDB } from '../../firebase';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  setDoc,
  updateDoc,
  where
} from 'firebase/firestore';
import './admin.css';
import {
  TeamData,
  IndividualData,
  PreSurvey,
  PostSurvey,
  Devices
} from '../sampleData';
import { useHistory } from 'react-router';

const Admin: React.FC = () => {
  //used to open and close modals
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [isOpenTeam, setIsOpenTeam] = useState(false);
  const [isOpenCreateTeam, setOpenCreateTeam] = useState(false);
  const [isOpenReport, setIsOpenReport] = useState(false);

  //Data gathered from the Admin document
  const adData = useContext(AdminContext);

  // used to send new team sizes and team creation date to database (set to data that was previously in the database)
  const [newMaxTeamSize, setNewMaxTeamSize] = useState(adData.maxSize);
  const [newMinTeamSize, setNewMinTeamSize] = useState(adData.minSize);
  const [newTeamCreationDate, setNewTeamCreationDate] = useState(
    adData.teamDate
  );
  const [newRegistrationDeadline, setNewRegistrationDeadline] = useState(
    adData.regDate
  );
  const [newStartDate, setNewStart] = useState(adData.startDate);
  const [newEndDate, setNewEnd] = useState(adData.endDate);
  const [newEditingLimit, setNewEditingLimit] = useState(adData.priorLogDays);

  // used for Open Team Module
  const [newOpenTeam, setOpenTeam] = useState('');

  const history = useHistory(); // for routing

  interface UserLog {
    name: string;
    team: string;
    email: string;
    steps: number;
  }

  interface TeamLog {
    name: string;
    size: number;
    avg_step: number;
    totalStep: number;
  }

  const [userReportCheck, setUserReportCheck] = useState(false);
  const [teamReportCheck, setTeamReportCheck] = useState(false);
  const [preSurveryReportCheck, setpreSurveryReportCheck] = useState(false);
  const [postSurveryReportCheck, setpostSurveryReportCheck] = useState(false);
  const [devicesReportCheck, setDevicesReportCheck] = useState(false);

  const [userLogs, setUserLogs] = useState<UserLog[]>([]);
  const [teamLogs, setTeamLogs] = useState<TeamLog[]>([]);

  const loadUserLogs = async () => {
    const dbRef = collection(FirestoreDB, 'users');
    const dbSnap = await getDocs(dbRef);
    const userLogsData: UserLog[] = [];
    dbSnap.forEach((doc: { data: () => any }) => {
      const data = doc.data();
      if (data) {
        const userLogData: UserLog = {
          name: data.name,
          team: data.team,
          email: data.email,
          steps: data.totalStep
        };
        userLogsData.push(userLogData);
      }
    });
    setUserLogs(userLogsData);
  };

  const loadTeamLogs = async () => {
    const dbRef = collection(FirestoreDB, 'teams'); // create reference to access the whole team collection
    const dbSnap = await getDocs(dbRef); // get all the docs
    const teamLogsData: TeamLog[] = []; // emtpy array to gather the required information from the team docs
    dbSnap.forEach((doc: { data: () => any }) => {
      const data = doc.data(); //get data
      if (data) {
        const teamLogData: TeamLog = {
          name: data.name,
          size: data.members.length,
          avg_step: data.avg_steps,
          totalStep: data.totalStep
        }; // get the necessary info
        teamLogsData.push(teamLogData); // add it to the array
      }
    });
    setTeamLogs(teamLogsData); // reassign the data to a more global variable
  };

  // in team setting module, when user presses save setting, sends the data to database.
  const sendNewTeamSetting = async () => {
    const dbRef = doc(FirestoreDB, 'admin', 'admin');
    await updateDoc(dbRef, {
      min_team_size: Number(newMinTeamSize),
      max_team_size: Number(newMaxTeamSize),
      team_creation_due: newTeamCreationDate
    })
      .then(() => {
        alert('Team Settings Updated!');
      })
      .catch((error: any) => {
        alert(error);
      });
    setIsOpenTeam(false);
  };

  const sendNewUserSetting = async () => {
    const dbRef = doc(FirestoreDB, 'admin', 'admin');
    await updateDoc(dbRef, {
      registration_deadline: newRegistrationDeadline,
      event_start_date: newStartDate,
      event_end_date: newEndDate,
      prior_log_days: Number(newEditingLimit)
    })
      .then(() => {
        alert('User Settings Updated!');
      })
      .catch((error: any) => {
        alert(error);
      });
    setIsOpenUser(false);
  };

  const sendNewOpenTeam = async () => {
    const dbRef = doc(FirestoreDB, 'teams', newOpenTeam);
    const dbSnap = await getDoc(dbRef);
    if (dbSnap.exists()) {
      alert(`${newOpenTeam} already exists!`);
    } else {
      let channelId = ''; //temp array
      const chanQuery = query(
        collection(FirestoreDB, 'channelIDs'),
        where('team', '==', ''),
        limit(1)
      ); //find empty channel id document
      const chanIdSnap = await getDocs(chanQuery); //get results of query
      chanIdSnap.forEach(async (doc: any) => {
        channelId = doc.id; //reassign the string to the channel id (which is the document id)
      });
      setDoc(doc(FirestoreDB, 'teams', newOpenTeam), {
        name: newOpenTeam,
        avg_steps: 0,
        leader: '',
        members: [],
        status: 0,
        password: '',
        profile_pic:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
        totalStep: 0,
        channel_id: channelId // TODO: create discord channel
      })
        .then(() => {
          updateDoc(doc(FirestoreDB, 'channelIDs', channelId), {
            team: newOpenTeam
          }); //set channel id document to this new open team
          alert('Open Team Created!');
        })
        .catch((error: any) => {
          alert(error);
        });
      setOpenCreateTeam(false);
    }
  };

  const goToAdminSteps = (email: string) => {
    history.push(`/app/adminSteps/${email}`);
  };

  useEffect(() => {
    loadUserLogs();
    loadTeamLogs();
  }, []);

  // creates the grid, if the sample data has users in the individual data collection, it pulls the relevant information
  // and adds it into rows
  function DisplayUsers(userLogs: UserLog[]): any {
    if (userLogs.length > 0) {
      return (
        <>
          <IonGrid fixed={true}>
            <IonRow class="header-row">
              <IonCol
                sizeMd="3"
                size={isPlatform('ios') || isPlatform('android') ? '3' : '5'}
                class="header-col admin-col"
              >
                Name
              </IonCol>

              <IonCol
                sizeMd="3"
                size={isPlatform('ios') || isPlatform('android') ? '3' : '5'}
                class="header-col admin-col"
              >
                Team
              </IonCol>

              <IonCol
                sizeMd="4"
                size={isPlatform('ios') || isPlatform('android') ? '3' : '6'}
                class="header-col admin-col"
              >
                Email
              </IonCol>

              <IonCol
                sizeMd="3"
                size={isPlatform('ios') || isPlatform('android') ? '3' : '8'}
                class="header-col admin-col"
              >
                Total Steps
              </IonCol>

              <IonCol
                sizeMd="3"
                size={isPlatform('ios') || isPlatform('android') ? '4' : '8'}
                class="header-col admin-col"
              >
                Actions
              </IonCol>
            </IonRow>

            {userLogs.map(
              (item: { name: any; team: any; email: any; steps: any }) => (
                <IonRow key={item.email}>
                  <IonCol
                    sizeMd="3"
                    size={
                      isPlatform('ios') || isPlatform('android') ? '3' : '5'
                    }
                    class="admin-col"
                  >
                    {item.name}
                  </IonCol>
                  <IonCol
                    sizeMd="3"
                    size={
                      isPlatform('ios') || isPlatform('android') ? '3' : '5'
                    }
                    class="admin-col"
                  >
                    {item.team}
                  </IonCol>
                  <IonCol
                    sizeMd="4"
                    size={
                      isPlatform('ios') || isPlatform('android') ? '3' : '5'
                    }
                    class="admin-col"
                  >
                    {item.email}
                  </IonCol>
                  <IonCol
                    sizeMd="3"
                    size={
                      isPlatform('ios') || isPlatform('android') ? '3' : '8'
                    }
                    class="admin-col"
                  >
                    {item.steps}
                  </IonCol>
                  <IonCol
                    sizeMd="3"
                    size={
                      isPlatform('ios') || isPlatform('android') ? '4' : '8'
                    }
                    class="admin-col"
                  >
                    <IonButton
                      size="small"
                      onClick={() => goToAdminSteps(item.email)}
                    >
                      {isPlatform('ios') || isPlatform('android')
                        ? 'Edit Log'
                        : 'Edit Step Log'}
                    </IonButton>
                  </IonCol>
                </IonRow>
              )
            )}
          </IonGrid>
        </>
      );
    } else {
      return (
        <>
          <IonGrid fixed={true}>
            <IonRow class="header-row">
              <IonCol
                sizeMd="3"
                size={isPlatform('ios') || isPlatform('android') ? '3' : '5'}
                class="header-col"
              >
                Name
              </IonCol>

              <IonCol
                sizeMd="3"
                size={isPlatform('ios') || isPlatform('android') ? '3' : '5'}
                class="header-col"
              >
                Team
              </IonCol>

              <IonCol
                sizeMd="4"
                size={isPlatform('ios') || isPlatform('android') ? '3' : '6'}
                class="header-col"
              >
                Email
              </IonCol>

              <IonCol
                sizeMd="3"
                size={isPlatform('ios') || isPlatform('android') ? '3' : '8'}
                class="header-col"
              >
                Total Steps
              </IonCol>

              <IonCol
                sizeMd="3"
                size={isPlatform('ios') || isPlatform('android') ? '4' : '8'}
                class="header-col"
              >
                Actions
              </IonCol>
            </IonRow>
          </IonGrid>
        </>
      );
    }
  }

  function DisplayTeams(): any {
    if (teamLogs.length > 0) {
      return (
        <>
          <IonGrid fixed={true}>
            <IonRow class="header-row">
              <IonCol
                sizeMd="4"
                size={isPlatform('ios') || isPlatform('android') ? '4' : '4'}
                class="header-col admin-col"
              >
                Team Name
              </IonCol>

              <IonCol
                sizeMd="4"
                size={isPlatform('ios') || isPlatform('android') ? '4' : '4'}
                class="header-col admin-col"
              >
                Number of Members
              </IonCol>

              <IonCol
                sizeMd="4"
                size={isPlatform('ios') || isPlatform('android') ? '4' : '4'}
                class="header-col admin-col"
              >
                Average Total Steps
              </IonCol>

              <IonCol
                sizeMd="4"
                size={isPlatform('ios') || isPlatform('android') ? '4' : '4'}
                class="header-col admin-col"
              >
                Total Steps
              </IonCol>
            </IonRow>

            {teamLogs.map((item) => (
              <IonRow key={Math.random()}>
                <IonCol
                  sizeMd="4"
                  size={isPlatform('ios') || isPlatform('android') ? '4' : '4'}
                  class="admin-col"
                >
                  {item.name}
                </IonCol>
                <IonCol
                  sizeMd="4"
                  size={isPlatform('ios') || isPlatform('android') ? '4' : '4'}
                  class="admin-col"
                >
                  {item.size}
                </IonCol>
                <IonCol
                  sizeMd="4"
                  size={isPlatform('ios') || isPlatform('android') ? '4' : '4'}
                  class="admin-col"
                >
                  {item.avg_step}
                </IonCol>
                <IonCol
                  sizeMd="4"
                  size={isPlatform('ios') || isPlatform('android') ? '4' : '4'}
                  class="admin-col"
                >
                  {item.totalStep}
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
        </>
      );
    } else {
      return (
        <>
          <IonGrid fixed={true}>
            <IonRow class="header-row">
              <IonCol
                sizeMd="6"
                size={isPlatform('ios') || isPlatform('android') ? '6' : '6'}
                class="header-col admin-col"
              >
                Team Name
              </IonCol>

              <IonCol
                sizeMd="5"
                size={isPlatform('ios') || isPlatform('android') ? '5' : '5'}
                class="header-col admin-col"
              >
                Number of Members
              </IonCol>

              <IonCol
                sizeMd="5"
                size={isPlatform('ios') || isPlatform('android') ? '5' : '5'}
                class="header-col admin-col"
              >
                Total Steps
              </IonCol>
            </IonRow>
          </IonGrid>
        </>
      );
    }
  }

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (userReportCheck) {
      console.log('Generating user report');

      let str = '"Name","eMail","Team","TotalSteps"\n';

      for (let i = 0; i < IndividualData.length; i++) {
        let line = '';
        line += '"' + IndividualData[i].name + '",';
        line += '"' + IndividualData[i].email + '",';
        line += '"' + IndividualData[i].team + '",';
        line += IndividualData[i].totalStep;
        str += line + '\r\n';
      }

      const blob = new Blob([str], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      if (link.download !== undefined) {
        // feature detection
        link.setAttribute('href', url);
        link.setAttribute('download', 'usersReport.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }

    if (teamReportCheck) {
      console.log('Generating team report');

      let str =
        '"Team Name","Cumulative Steps","Number of Team Members","TotalSteps"\n';

      for (let i = 0; i < TeamData.length; i++) {
        let line = '';
        line += '"' + TeamData[i].name + '",';
        line += 0 + ',';
        line += 0 + ',';
        line += TeamData[i].avg_steps;
        str += line + '\r\n';
      }

      const blob = new Blob([str], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      if (link.download !== undefined) {
        // feature detection
        link.setAttribute('href', url);
        link.setAttribute('download', 'teamsReport.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }

    if (preSurveryReportCheck) {
      console.log('Generating pre survey report');

      let str =
        '"Anonymous ID #","Hours of Physical Activity","Minutes of Physical Activity","TotalSteps"\n';

      for (let i = 0; i < PreSurvey.length; i++) {
        let line = '';
        line += PreSurvey[i].anonymous_id + ',';
        line += '"' + PreSurvey[i].psu_affiliation + '",';
        line += '"' + PreSurvey[i].heard_about + '",';
        line += PreSurvey[i].weekly_physical_activity_hours + ',';
        line += PreSurvey[i].weekly_physical_activity_minutes + ',';
        line += '"' + PreSurvey[i].distance_from_campus + '",';
        line += '"' + PreSurvey[i].rec_center_frequency + '"';
        str += line + '\r\n';
      }

      const blob = new Blob([str], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      if (link.download !== undefined) {
        // feature detection
        link.setAttribute('href', url);
        link.setAttribute('download', 'preSurveyReport.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }

    if (postSurveryReportCheck) {
      console.log('Generating post survey report');

      let str =
        '"Team Name","Cumulative Steps","Number of Team Members","TotalSteps"\n';

      for (let i = 0; i < PostSurvey.length; i++) {
        let line = '';
        line += PostSurvey[i].anonymous_id + ',';
        line += PostSurvey[i].weekly_physical_activity_hours + ',';
        line += PostSurvey[i].weekly_physical_activity_minutes + ',';
        line += '"' + PostSurvey[i].participated_events + '",';
        line += '"' + PostSurvey[i].future_walk_ideas + '",';
        line += PostSurvey[i].walktober_improved_health + ',';
        line += PostSurvey[i].walktober_improved_community + ',';
        line += PostSurvey[i].would_participate_again + ',';
        line += '"' + PostSurvey[i].if_not_why + '",';
        line += '"' + PostSurvey[i].feedback + '"';
        str += line + '\r\n';
      }

      const blob = new Blob([str], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      if (link.download !== undefined) {
        // feature detection
        link.setAttribute('href', url);
        link.setAttribute('download', 'postSurveyReport.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }

    if (devicesReportCheck) {
      console.log('Generating device usage report');

      let str = '';
      str += '"IPhone",' + Devices.iPhone + '\r\n';
      str += '"Android",' + Devices.android + '\r\n';
      str += '"Apple Health",' + Devices.apple_health + '\r\n';
      str += '"FitBit",' + Devices.fitbit + '\r\n';
      str += '"Google Health",' + Devices.google_health + '\r\n';

      const blob = new Blob([str], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      if (link.download !== undefined) {
        // feature detection
        link.setAttribute('href', url);
        link.setAttribute('download', 'devicesReport.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }

    console.log('Reports have been generated');
  };

  return (
    <IonPage>
      <IonHeader>
        <NavBar>
          <IonTitle>Admin</IonTitle>
        </NavBar>
      </IonHeader>
      <IonContent fullscreen class="admin-content">
        <IonGrid class="invis-grid">
          <IonRow></IonRow>
          <IonRow>
            <IonCol class="invis-grid-col">
              <IonButton
                onClick={() => setIsOpenUser(true)}
                class="admin-button"
                size={
                  isPlatform('ios') || isPlatform('android')
                    ? 'default'
                    : 'large'
                }
                expand="block"
              >
                Event Settings
              </IonButton>
            </IonCol>
            <IonCol class="invis-grid-col">
              <IonButton
                onClick={() => setIsOpenTeam(true)}
                class="admin-button"
                size={
                  isPlatform('ios') || isPlatform('android')
                    ? 'default'
                    : 'large'
                }
                expand="block"
              >
                Team Settings
              </IonButton>
            </IonCol>
            <IonCol class="invis-grid-col">
              <IonButton
                onClick={() => setOpenCreateTeam(true)}
                class="admin-button"
                size={
                  isPlatform('ios') || isPlatform('android')
                    ? 'default'
                    : 'large'
                }
                expand="block"
              >
                Create Open Team
              </IonButton>
            </IonCol>
            <IonCol class="invis-grid-col">
              <IonButton
                onClick={() => setIsOpenReport(true)}
                class="admin-button"
                size={
                  isPlatform('ios') || isPlatform('android')
                    ? 'default'
                    : 'large'
                }
                expand="block"
              >
                Generate Report
              </IonButton>
            </IonCol>
            <IonCol class="invis-grid-col">
              <IonButton
                class="admin-button"
                size={
                  isPlatform('ios') || isPlatform('android')
                    ? 'default'
                    : 'large'
                }
                expand="block"
              >
                Announcements
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonItem class="grid-title">Users</IonItem>
        <IonItem>{DisplayUsers(userLogs)}</IonItem>
        <IonItem class="grid-title">Teams</IonItem>
        <IonItem>{DisplayTeams()}</IonItem>

        <IonModal isOpen={isOpenUser} backdropDismiss={false}>
          <IonHeader class="modal-header">
            <IonToolbar>
              <IonTitle class="modal-title">Event Settings</IonTitle>
              <IonButtons slot="end">
                <IonButton
                  onClick={() => setIsOpenUser(false)}
                  class="admin-close-modal"
                >
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding" class="modal-content">
            <IonItem>
              <IonLabel>Set Registration Deadline</IonLabel>
              <IonInput
                id="time"
                type="date"
                onInput={(event: any) => {
                  setNewRegistrationDeadline(
                    new Date(event.target.value).toISOString().slice(0, 10)
                  );
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Step Log Allowed Period</IonLabel>
              <IonInput
                type="number"
                name="editDaysLimit"
                onIonChange={(e) =>
                  setNewEditingLimit(e.target.value as number)
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Event Start Date</IonLabel>
              <IonInput
                id="time"
                type="date"
                onInput={(event: any) => {
                  setNewStart(
                    new Date(event.target.value).toISOString().slice(0, 10)
                  );
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Event End Date</IonLabel>
              <IonInput
                id="time"
                type="date"
                onInput={(event: any) => {
                  setNewEnd(
                    new Date(event.target.value).toISOString().slice(0, 10)
                  );
                }}
              ></IonInput>
            </IonItem>
            <IonButton
              class="modal-button"
              size="large"
              expand="block"
              onClick={sendNewUserSetting}
            >
              Save Settings
            </IonButton>
          </IonContent>
        </IonModal>

        <IonModal isOpen={isOpenTeam} backdropDismiss={false}>
          <IonHeader class="modal-header">
            <IonToolbar>
              <IonTitle class="modal-title">Team Settings</IonTitle>
              <IonButtons slot="end">
                <IonButton
                  onClick={() => setIsOpenTeam(false)}
                  class="admin-close-modal"
                >
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding" class="modal-content">
            <IonItem>
              <IonLabel>Minimum Team Size</IonLabel>
              <IonInput
                type="number"
                name="minTeamSize"
                onIonChange={(e) => setNewMinTeamSize(e.target.value as number)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Maxiumum Team Size</IonLabel>
              <IonInput
                type="number"
                name="maxTeamSize"
                onIonChange={(e) => setNewMaxTeamSize(e.target.value as number)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Set Team Deadline</IonLabel>
              <IonInput
                id="time"
                type="date"
                onInput={(event: any) => {
                  setNewTeamCreationDate(
                    new Date(event.target.value).toISOString().slice(0, 10)
                  );
                }}
              ></IonInput>
            </IonItem>
            <IonButton
              class="modal-button"
              size="large"
              expand="block"
              onClick={sendNewTeamSetting}
            >
              Save Settings
            </IonButton>

            <IonModal keepContentsMounted={true} backdropDismiss={false}>
              <IonDatetime id="datetime"></IonDatetime>
            </IonModal>
          </IonContent>
        </IonModal>

        <IonModal isOpen={isOpenCreateTeam} backdropDismiss={false}>
          <IonHeader class="modal-header">
            <IonToolbar>
              <IonTitle class="modal-title">Create Open Team</IonTitle>
              <IonButtons slot="end">
                <IonButton
                  onClick={() => setOpenCreateTeam(false)}
                  class="admin-close-modal"
                >
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding" class="modal-content">
            <IonItem>
              <IonLabel position="floating">Enter New Open Team Name:</IonLabel>
              <IonInput
                placeholder="Type here"
                onIonChange={(e) => setOpenTeam(e.target.value as string)}
              ></IonInput>
            </IonItem>
            <IonButton
              class="modal-button"
              size="large"
              expand="block"
              onClick={sendNewOpenTeam}
            >
              Create Team
            </IonButton>
          </IonContent>
        </IonModal>

        <IonModal isOpen={isOpenReport}>
          <IonHeader class="modal-header">
            <IonToolbar>
              <IonTitle class="modal-title">Generate Report</IonTitle>
              <IonButtons slot="end">
                <IonButton
                  onClick={() => setIsOpenReport(false)}
                  class="admin-close-modal"
                >
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonItem class="modal-content">
            <IonLabel>Select Reports to Generate</IonLabel>
          </IonItem>
          <IonContent className="ion-padding" class="modal-content">
            <form
              id="generateReports"
              onSubmit={(event: React.FormEvent) => {
                submitHandler(event);
              }}
            >
              <IonItem>
                <IonCheckbox
                  checked={userReportCheck}
                  onIonChange={(e) => setUserReportCheck(e.detail.checked)}
                  slot="start"
                ></IonCheckbox>
                <IonLabel>User Report</IonLabel>
              </IonItem>
              <IonItem>
                <IonCheckbox
                  checked={teamReportCheck}
                  onIonChange={(e) => setTeamReportCheck(e.detail.checked)}
                  slot="start"
                ></IonCheckbox>
                <IonLabel>Team Report</IonLabel>
              </IonItem>
              <IonItem>
                <IonCheckbox
                  checked={preSurveryReportCheck}
                  onIonChange={(e) =>
                    setpreSurveryReportCheck(e.detail.checked)
                  }
                  slot="start"
                ></IonCheckbox>
                <IonLabel>Pre Survery Report</IonLabel>
              </IonItem>
              <IonItem>
                <IonCheckbox
                  checked={postSurveryReportCheck}
                  onIonChange={(e) =>
                    setpostSurveryReportCheck(e.detail.checked)
                  }
                  slot="start"
                ></IonCheckbox>
                <IonLabel>Post Survery Report</IonLabel>
              </IonItem>
              <IonItem>
                <IonCheckbox
                  checked={devicesReportCheck}
                  onIonChange={(e) => setDevicesReportCheck(e.detail.checked)}
                  slot="start"
                ></IonCheckbox>
                <IonLabel>Device Usage Report</IonLabel>
              </IonItem>
              <IonButton
                type="submit"
                class="modal-button"
                size="large"
                expand="block"
              >
                Generate Reports
              </IonButton>
            </form>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  ) as any;
};

export default Admin;
