import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAWZMuYO8292wyKUNsMUhgh9VKbfNKSdIw",
    authDomain: "green-play-project.firebaseapp.com",
    projectId: "green-play-project",
    storageBucket: "green-play-project.appspot.com",
    messagingSenderId: "804206835901",
    appId: "1:804206835901:web:9058c85df605b782d15fd4"
};

const app = initializeApp(firebaseConfig);

export { firebaseConfig, app };