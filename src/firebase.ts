import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAtNmuDjeCqN00XpETgz9k1eyFr-Jjgk4U',
  authDomain: 'chat-78deb.firebaseapp.com',
  projectId: 'chat-78deb',
  storageBucket: 'chat-78deb.appspot.com',
  messagingSenderId: '1066738754160',
  appId: '1:1066738754160:web:03f9a372644b2789228ab5',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
