/* eslint-disable @typescript-eslint/space-before-function-paren */
import { useContext, useEffect, useState } from 'react';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonText,
  IonTitle
} from '@ionic/react';
import './Profile.css';
import { Route } from 'react-router-dom';
import { auth, FirestoreDB, storage } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useHistory } from 'react-router';
import NavBar from '../../components/NavBar';
import newPassword from './newPassword';
import AuthContext from '../../store/auth-context';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';

const Profile: React.FC = () => {
  const history = useHistory();
  const ctx = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [joinDate, setJoinDate] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [totalDistance, setTotalDistance] = useState(0);
  const [photo, setPhoto] = useState<any>(null);

  useEffect(() => {
    GetRecords();
  }, []);

  async function GetRecords(): Promise<void> {
    if (ctx.user === null) {
      alert('You are not logged in!');
      history.push('/login');
      return;
    }
    const dbRef = doc(FirestoreDB, 'users', auth.currentUser.email as string);
    const dbSnap = await getDoc(dbRef);
    const userData = dbSnap.data();
    if (auth.currentUser.photoURL === null) {
      setProfilePic(
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
      );
    } else {
      setProfilePic(auth.currentUser.photoURL);
    }
    setName(userData.name);
    setEmail(userData.email);
    setJoinDate(
      new Date(auth.currentUser.metadata.creationTime).toLocaleDateString()
    );
    setTotalDistance(userData.totalStep / 2000);
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    const imageRef = ref(storage, auth.currentUser.email + '.png');
    await uploadBytes(imageRef, photo);
    const photoURL = await getDownloadURL(imageRef);
    updateProfile(auth.currentUser, { photoURL })
      .then(() => {
        alert('profile picture updated!');
        history.push('/app/profile');
      })
      .catch((error: any) => {
        alert(error);
      });
  };
  
  const changePassword = () => {
    history.push('/app/profile/passwordChange');
    return;
  };
  const moveToCreateTeam = () => {
    history.push('/app/teamcreation');
  };

  const signOut = async () => {
    await auth.signOut();
    history.push('/login');
  };

  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path="/app/profile/passwordChange" component={newPassword} />
      </IonRouterOutlet>
      <IonHeader>
        <NavBar>
          <IonTitle>Profile</IonTitle>
        </NavBar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonGrid>
            <IonRow>
              <IonCol size="auto">
                <IonText>
                  <IonImg
                    className="profile_pic"
                    src={profilePic}
                    alt="Profile picture for the user signed in"
                  ></IonImg>
                  <input type="file" onChange={handleImageChange} />
                  <IonButton onClick={handleSubmit}>
                    Change Profile Picture
                  </IonButton>
                  <h2>{name}</h2>
                  {/* <p>
                    {username}
                    <IonButton fill="clear" size="small">
                      Change Username
                    </IonButton>
                  </p> */}
                  <p>{email}</p>
                  <IonButton onClick={changePassword}>
                    Change Password
                  </IonButton>{' '}
                  <br></br>
                  <IonButton>Change Health App Preferences</IonButton>
                  <IonButton onClick={moveToCreateTeam}>
                    Create a Team
                  </IonButton>
                  <IonButton onClick={signOut}>Sign Out</IonButton>
                </IonText>
              </IonCol>
              <IonCol>
                <IonText>
                  <p>Joined on {joinDate}</p>
                  <p>{totalDistance} miles walked in total</p>
                  <IonLabel>Step Goal: </IonLabel>
                  <IonItem fill="outline">
                    <IonInput value="10,000" size={100}></IonInput>
                  </IonItem>
                  <h6>Badges:</h6>
                  {/* TODO: Put badges here */}
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
