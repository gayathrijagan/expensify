const promise = new Promise((res, rej) => {
    //setTimeout(() => res('this is my resolved data.'), 3000);
    setTimeout(() => rej('error'), 1000)
});

console.log('before');
promise
    .then((data) => console.log(1, data))
    .catch(e => console.log(e));
console.log('after');