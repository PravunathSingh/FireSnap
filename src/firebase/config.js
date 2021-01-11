import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBfS3YUeGBK8MTf5x_1dw-Ec2-7n1GWaeo",
authDomain: "firesnap-c63f1.firebaseapp.com",
projectId: "firesnap-c63f1",
storageBucket: "firesnap-c63f1.appspot.com",
messagingSenderId: "328813604281",
appId: "1:328813604281:web:106fefd57bb0bbec499a68"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectStorage, projectFirestore, timestamp };