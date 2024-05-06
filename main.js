const companies = [
  { name: "vincent", category: "finace", start: 1981, end: 2003 },

  { name: "vincent", category: "finace", start: 1981, end: 2003 },
  { name: "emmy", category: "finace", start: 1980, end: 2007 },

  { name: "eme", category: "finace", start: 1982, end: 1989 },

  { name: "boby", category: "enginier", start: 1980, end: 1987 },

  { name: "umurisa", category: "developer", start: 1994, end: 1983 },

  { name: "Renny", category: "manager", start: 1995, end: 2020 },
];
const age = [32, 45, 35, 40, 43, 47, 48, 38];
// companies.forEach(function (company) {
//     console.log(company.category)
// })
// filter

// const bank = age.filter(function (names) {
//     if (names>40) {
//         return true;
//     }
// })
// console.log(bank)

// const bab = age.filter(ages => ages > 45)
// {
//  console.log(bab)
// }

// companies.forEach(function (company) {
//     console.log(company.name)
// })
// const gig = age.filter(ages => ages>=47)
// console.log(gig);

// const retailcompany = companies.filter(company => company.category === 'finace')
// {
//     console.log(retailcompany)
// }
// const total = companies.filter(function (comp) {
//     if (comp.category === 'manager') {
//         return true;
//     }
// })
// console.log(total)
// const totall = companies.filter( comp=>(comp.start>=1980 && comp.end<1990))
// {console.log(totall);}

// const tenyears = companies.filter(comp => (comp.end - comp.start > 10))
// {
//     console.log(tenyears)
// }
// map
// const companyname = companies.map(company => company.name)
// {
//     console.log(companyname);
// }

// const start = companies.map(starts => `${starts.name} [${starts.start}-${starts.end}]`)
// {
//     console.log(start)
// }

// sort

// const sortcompany = companies.sort((a,b) => (a.start<b.start ? 1: -1))
// {
//     console.log(sortcompany)
// }
// const ages = age.sort((a, b) => b - a)
// {
//     console.log(ages)
// }

// let person = {
//     name: 'vincent',
//     age: 22,
// }
// console.log(person)

// let selector = ['red', 'green'];
// selector[2] = 'blue';
// console.log(selector.length)

// const speak = function (name='vincent',time='morning') {
//     console.log(`good ${time} ${name}`)
// }
// speak();
const totall = (product, tax) => {
  let total = 0;
  for (let i = 0; i < product.length; i++) {}
  return total;
};
console.log(totall[((10, 10, 10), 2)]);

// const bar = document.querySelector('div.error')
// console.log(bar)
// const paris = document.querySelectorAll('p')
// console.log(paris [0])
// const ids = document.getElementById('demo')
// console.log(ids)
// const clas = document.getElementsByClassName('error')
// console.log(clas)
// console.log(clas[1]);

// const parag = document.querySelector('p')
// console.log(parag)
// console.log(parag.innerText)
// parag.innerText='hello mr vincent, are you ok??'

// const paragraph = document.querySelector('p');
// paragraph.array.forEach(element => {
//     element.inn
// });
const classnam = document.querySelector("p");
console.log(classnam);
classnam.style.color = blur;

//delete method
let vilan = companies.push({
  name: "iranzi",
  category: "high",
  start: 2000,
  end: 2007,
});

delete companies[0];
//slice method
const ball = ["banana", "poteto", "orange"];
const slice = ball.slice(1);
console.log(slice);

//pop method
const balls = [
  { name: "irafasha", company: "registered" },
  { name: "irafasha", company: "registered" },
  { name: "emalito", company: "admited" },
];
const balll = balls.pop();
console.log(balll);
const filter = balls.filter((vin) => vin.name === "irafasha");
console.log(filter);

//join method
const join = ["hello", "every", "one"];
const joins = join.join();
console.log(joins);
//to string
const to = ["rayon", "apr", "mukura"];
const string = to.toString();
console.log(string);
// at method
const aat = ["country", "continent", "sea", "earth"];
const atmethod = aat.at(0);
console.log(atmethod);
//concant method
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const children = myGirls.concat(myBoys);
console.log(children);
//splice method
const splicee = ["splice1", "splice2", "splice3", "splice4"];
splicee.splice(4, 4, "splice0", "splice5");
console.log(splicee);
//flat method
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);
