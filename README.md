homework 1 - ТЗ "Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект
и выводить его в консоль. XML:
`<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>"`
  
  JS-объект:
`{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}`
     
     
homework 2 - ТЗ "Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект
и выводить его в консоль.

JSON:
`{
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
}`

JS-объект:
`{
  list: [
    { name: 'Petr', age: 20, prof: 'mechanic' },
    { name: 'Vova', age: 60, prof: 'pilot' },
  ]
}`


homework 3 - ТЗ  

                Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку 
                происходит следующее:
                Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
                Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://loremflickr.com/json/g/320/240/all, 
                где get-параметр limit — это введённое число.
                Пример: если пользователь ввёл 5, то запрос будет вида https://loremflickr.com/json/g/320/240/all.
                После получения данных вывести ниже картинки на экран."
                
                
homework 4 - ТЗ 


                  Напишите код приложения, который содержит в себе 2 инпута и кнопку, при нажатии происходит следующее:
                  Если число не совпадает от 100 до 500 — выводить ниже текст «число вне диапазона от 100 до 500»
                  Если число попадает в диапазон от 100 до 500 — сделать запрос c помощью XHR по URL https://loremflickr.com/json/g/320/240/all, 
                  где get-параметр 320 и 240 — это введённые числа..
                  Пример: если пользователь ввёл 320 и 240, то запрос будет вида https://loremflickr.com/json/g/320/240/all.
                  После получения данных вывести ниже картинку на экран.""
