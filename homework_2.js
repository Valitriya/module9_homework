//JSON, который будем парсить
const jsonString = `
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
`;
//Парсим JSON в JS
let result = JSON.parse(jsonString);
console.log(result);
