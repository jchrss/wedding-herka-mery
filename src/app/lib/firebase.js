import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/*
  These values are the public web-app identifiers Firebase expects to ship in
  the client bundle; access is governed by the Firestore rules, not by keeping
  them secret.
*/
const firebaseConfig = {
  apiKey: 'AIzaSyBWlKAAcBfJEfSTWHRYb1xwaJHP61dSTCw',
  authDomain: 'herka-mery.firebaseapp.com',
  projectId: 'herka-mery',
  storageBucket: 'herka-mery.firebasestorage.app',
  messagingSenderId: '1086550366082',
  appId: '1:1086550366082:web:4c27f35a1e12482b0de19b',
};

// Fast refresh re-runs this module, so an existing app is reused.
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const WISHES_COLLECTION = 'wishes';
