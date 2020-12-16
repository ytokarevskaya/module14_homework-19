const parser = new DOMParser();

const exampleXml = `
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


const xmlDocument = parser.parseFromString(exampleXml, "text/xml");
const men = xmlDocument.querySelectorAll("man");
let list = [];
men.forEach((man) => {
    let firstName = man.querySelector("name").querySelector("first")
        .textContent;
    let secondName = man.querySelector("name").querySelector("second")
        .textContent;
    let age = man.querySelector("age").textContent;
    let prof = man.querySelector("prof").textContent;
    let lang = man.querySelector("name").getAttribute("lang");
    let object = {
        name: firstName + " " + secondName,
        age: age,
        prof: prof,
        lang: lang,
    };
    list.push(object);
});
const decision = { list };
console.log("result :", decision);