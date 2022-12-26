importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
firebase.initializeApp({
    apiKey: "AIzaSyDwETnNI2qlwrc_0qeUOpYt-HdyH5yl0Uc",
    authDomain: "my-next-step-suh.firebaseapp.com",
    databaseURL: "https://my-next-step-suh.firebaseio.com",
    projectId: "my-next-step-suh",
    storageBucket: "my-next-step-suh.appspot.com",
    messagingSenderId: "452139042735",
    appId: "1:452139042735:web:c81ed2a4207579cfa4115a"
});
const messaging = firebase.messaging();
