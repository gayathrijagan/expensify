database.ref('expenses').on('child_removed', snapshot => {
    console.log('child deleted', snapshot.val());
});

database.ref('expenses').on('child_changed', snapshot => {
    console.log('child changed', snapshot.val());
});

database.ref('expenses').on('child_added', snapshot => {
    console.log('child added', snapshot.val());
});

// database.ref('expenses').on('value', snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//         expenses.push({id: childSnapshot.key, ...childSnapshot.val()});
//     })
//     console.log(expenses)
// });

// database.ref('expenses').once('value').then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//         expenses.push({id: childSnapshot.key, ...childSnapshot.val()});
//     })
//     console.log(expenses);
// });

database.ref('expenses').push({
   createdAt: 898,
   amount: 900,
   note: 'rent',
   description: 'rent'
});

// database.ref('notes').push({
//     title: 'title for 1',
//     body: 'body for 1'
// });

// const firebaseNotes = {
//     afgfhds: {
//         title: 'title for 1',
//         body: 'body for 1'
//     },
//     dnkwnfw: {
//         title: 'title for 2',
//         body: 'body for 2'
//     }
// }

//database.ref('notes').set(firebaseNotes);

// const onValChange = database.ref()
//     .on('value', (snapshot) => {
//         const data = snapshot.val();
//         console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
//     })

// setTimeout(() => {
//     database.ref('job/title').set('Software Engineer');
// }, 3000);    

// setTimeout(() => {
//     database.ref().off('value', onValChange);
// }, 3000);    

// setTimeout(() => {
//     database.ref('job/title').set('Software Developer');
// }, 3500);    

// database.ref('location/city')
//     .once('value')
//     .then(data => {
//         console.log(data.val());
//     })
//     .catch(e => {
//         console.log('Error fetching data', e);
//     })

// database.ref().set({
//     name: 'Gayathri Jahan Mohan',
//     age: 24,
//     stressLevel: 6,
//     job: {
//         title: 'developer',
//         company: 'google'
//     },
//     location: {
//         city: 'Bangalore',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('data was saved!')
// }).catch((e) => {
//     console.log('error occurred', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Accenture',
//     'location/city': 'Bengaluru'
// });

// database.ref('isSingle').set(null).then(() => {
//     console.log('data was removed');
// }).catch((e) => {
//     console.log('error occurred', e);
// });