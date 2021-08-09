const url = require('url')
const addr = 'http://localhost:8080/default.html?year=2021&month=August'


const q = url.parse(addr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(q.query);
// q.query; returns an object: { year: 2017, month: 'february' }

const queryObject = q.query;
console.log(q.query.year);
console.log(queryObject.month);

