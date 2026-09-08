import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/*
  Read from the environment so the project's identifiers are not committed and
  can be rotated without a code change.

  Worth knowing: NEXT_PUBLIC_* values are inlined into the browser bundle, so
  these are not secrets and cannot be hidden from a guest who opens devtools --
  Firebase publishes the web config on purpose. What actually protects the data
  is the Firestore rules, which allow a wish to be read and created but never
  edited or deleted.
*/
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Fast refresh re-runs this module, so an existing app is reused.
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const WISHES_COLLECTION = 'wishes';
