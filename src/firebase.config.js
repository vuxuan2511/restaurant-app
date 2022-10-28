import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyC2zDNrnBBMTMHuMmX_0LPVZQzbCCmqnLI',
    authDomain: 'restaurantapp-1cd49.firebaseapp.com',
    databaseURL: 'https://restaurantapp-1cd49-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'restaurantapp-1cd49',
    storageBucket: 'restaurantapp-1cd49.appspot.com',
    messagingSenderId: '637348393151',
    appId: '1:637348393151:web:957399e42868ac910a960a',
    measurementId: 'G-GG9B0BDPC4',
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

//   const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
