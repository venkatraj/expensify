import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCecm8u40wq23Lbwywp4ZcmDABH5Ue04EQ',
  authDomain: 'expensify-1ff3a.firebaseapp.com',
  databaseURL: 'https://expensify-1ff3a.firebaseio.com',
  projectId: 'expensify-1ff3a',
  storageBucket: 'expensify-1ff3a.appspot.com',
  messagingSenderId: '479937246844',
  appId: '1:479937246844:web:1e4a27e1585a4cf5',
};

firebase.initializeApp(config);

const database = firebase.database();
database.ref().set({
  name: 'Venkat Raj',
  age: 45,
  isSingle: false,
  location: {
    city: 'Salem',
    country: 'India',
  },
});

database.ref('age').set(46);

database.ref('location/city').set('Coimbatore');

database.ref('attributes').set({
  height: 163,
  weight: 65,
});
