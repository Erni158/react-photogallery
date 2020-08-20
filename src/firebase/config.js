import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAZcNtB7BKIFQNSGyfDDy3Zy4QyQxx8XA4",
    authDomain: "photo-gallery-be7e5.firebaseapp.com",
    databaseURL: "https://photo-gallery-be7e5.firebaseio.com",
    projectId: "photo-gallery-be7e5",
    storageBucket: "photo-gallery-be7e5.appspot.com",
    messagingSenderId: "664324276990",
    appId: "1:664324276990:web:3ff104ca7900626c4f5baf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };