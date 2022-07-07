const parser = new DOMParser();

//XML, который мы парсим
const xmlString = `
      <list>
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
      </list>
`;

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listWrapper = xmlDOM.querySelector("list");
const studentUser = listWrapper.querySelectorAll("student");

//Структура объекта
let result = { list: [] };

// Цикл для перебора студентов
for (let i = 0; i < studentUser.length; i++) {
  const nameUser = studentUser[i].querySelector("name");
  const firstName = nameUser.querySelector("first");
  const secondName = nameUser.querySelector("second");
  const job = studentUser[i].querySelector("prof");
  const ageUser = studentUser[i].querySelector("age");
  const langAttr = nameUser.getAttribute("lang");

  let studentObj = {
    name: `${firstName.textContent} ${secondName.textContent}`,
    age: Number(ageUser.textContent),
    prof: job.textContent,
    lang: langAttr,
  };

  //Пушим полученные данные из цикла в массив
  result.list.push(studentObj);
}
console.log(result);
