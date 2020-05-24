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

const expenses = [
  {
    description: 'First Expense',
    note: 'First Note',
    amount: 1234,
    createdAt: 1234567,
  },
  {
    description: 'Second Expense',
    note: 'Second Note',
    amount: 1234,
    createdAt: 7654321,
  },
  {
    description: 'First Expense',
    note: 'First Note',
    amount: 1234,
    createdAt: 918273,
  },
];

expenses.map((expense) => database.ref('expenses').push(expense));

// database
//   .ref()
//   .set({
//     name: 'Venkat Raj',
//     age: 45,
//     stressLevel: 6,
//     job: {
//       title: 'Software Engineer',
//       company: 'Google',
//     },
//     location: {
//       city: 'Salem',
//       state: 'Tamilnadu',
//       country: 'India',
//     },
//     profession: null,
//   })
//   .then(() => console.log('Data saved!'))
//   .catch(() => console.log('Data did not saved!'));

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
// });

// database.ref('age').set(46);

// database.ref('location/city').set('Coimbatore');

// database.ref('attributes').set({
//   height: 163,
//   weight: 65,
// });

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => console.log('isSingle property removed'))
//   .catch(() => console.log('Remove failed!'));

// database
//   .ref()
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   });

// database.ref('job/company').set('Facebook');

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const value = snapshot.val();
//   console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// });

// setTimeout(() => {
//   database.ref('job/title').set('SE');
// }, 2500);
