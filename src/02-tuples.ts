const prices: (number |string)[] = [1,2,3,4,2];
prices.push(1);
prices.push('1');

let user: [string,number,boolean];
// user = ['alejo', 15];
// user = ['vanessa', 13];

// user = [];
// user = ['alejo'];
user = ['alejo',12,true];

const [username,age] = user; //Destructuracion
console.log(username);
console.log(age);


