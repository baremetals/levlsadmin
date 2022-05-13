import { initializeApp } from 'firebase/app';
import { getStorage, uploadBytes, ref, getDownloadURL } from 'firebase/storage';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  api: process.env.REACT_APP_API_URL,
};

const firebaseApp = initializeApp(config);

const storage = getStorage(firebaseApp);

export { uploadBytes, ref, getDownloadURL, storage };

export default firebaseApp;
