import firebase from 'firebase/compat/app';

export interface Message extends firebase.firestore.DocumentData {
  user: string;
  text: string;
  timestamp: any;
}
