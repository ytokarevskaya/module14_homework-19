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

// const result = {
//   name: man.name,
//   age: man.age,
//   prof: man.prof,
// };

console.log('result', getData);

// Код выполняется с ошибкой из-за того, что переменная man, которую вы используете в коде, нигде не определена. Для верного решения достаточно было бы вывести в консоль getData, потому что JSON.parse создает из JSON-строки валидный JS-объект с такой же структурой, как в JSON