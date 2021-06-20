
// const people = [
//     {name: "bob", age:20, position:"developer", id: 1, salary: 800},
//     {name: "lisa", age:23, position:"designer", id: 2, salary: 1100},
//     {name: "peter", age:30, position:"administrator", id: 3, salary: 1800}
// ];


// console.log(total);

// const number = 4.4477;
// const result = Math.floor(8.9999);
// const number = 81;
// const result = Math.sqrt(number);
// const result = Math.PI;
// const result = Math.floor(Math.random()*10 + 1);
// console.log(result);

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'Novermber',
    'December',
];

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

// const date = new Date();
const date = new Date();
const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${date.getDate()} ${days[day]},
${months[month]} ${date.getFullYear()}`

console.log(sentence);

document.body.innerHTML = sentence;

