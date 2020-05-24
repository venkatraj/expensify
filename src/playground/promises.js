const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 10);
  console.log(random);
  if (random % 2 === 0) {
    setTimeout(() => {
      resolve('This is my resolved data!');
    }, 3000);
  }
  setTimeout(() => {
    reject(Error('Promise rejected due to odd values!'));
  }, 3000);
});

promise
  .then((data) => {
    console.log('Resolved', data);
  })
  .catch((error) => {
    console.log('Rejected?', error);
  });
