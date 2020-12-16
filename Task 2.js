const exampleJson = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`

const getData = JSON.parse(exampleJson);


const result = {
  name: man.name,
  age: man.age,
  prof: man.prof,
};

console.log('result', result);