// High order function lesson
const companies = [
    {name:"Company One", category:"Finance", start:1951, end:2013},
    {name:"Company One", category:"Finance", start:1951, end:1993},
    {name:"Company One", category:"Finance", start:1951, end:2023},
    {name:"Company Two", category:"Cars", start:1985, end:2005},
    {name:"Company Three", category:"Ai Tech", start:1991, end:2016},
    {name:"Company Four", category:"Retail", start:1910, end:2010},
    {name:"Company Five", category:"Technology", start:1921, end:2024},
    {name:"Company Six", category:"Education", start:1966, end:2006},
    {name:"Company Seven", category:"Construction", start:1999, end:2009},
    {name:"Company Eight", category:"Tourism", start:1978, end:2018},
    {name:"Company Nine", category:"Accounting", start:1970, end:2020},
]

const ages = [33, 12, 20, 16, 5, 10, 56, 21, 43, 62, 92, 102, 321,];

// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }

// forEach
// companies.forEach((company)=> {
//   console.log(company)
// })



// filter
// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink)

// const canDrinks = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// })
// console.log(canDrinks)

// const canDrunk = ages.filter(age => age >= 21);
// console.log(canDrunk)

// filter the retail companies
// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Finance'){
//         return true
//     }
// })

// console.log(retailCompanies);

// const retailCompanies = companies.filter(company => company.category === "Retail")

// console.log(retailCompanies);

// Get 80s companies

const eightysCompanies = companies.filter(company => (company.start >=1980 && company.start < 1990));

// Get companies that lasted 10 years or more
const lastedTenYears = companies.filter(company => (company.end - company.start > 10));


//map
// const companyNames = companies.map(function(company){
//      return company.name
// })
//sort
// const sortedCompany = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//          return 1;
//     }else{
//         return -1;
//     }
// })

// console.log(sortedCompany)

// const sortAges = ages.sort((a,b) => a-b);
// console.log(sortAges)



//Reduce
// let ageSums = 0;
// for(let i = 0; i < ages.length; i ++){
//     ageSums += ages[i];
// }



// const ageSum = ages.reduce(function(total, age){
//     return total + age;
// }, 0);


// Combined Methods
// const combined = ages
// .map(age => age * 2)
// .filter(age => age >= 40)
// .sort((a, b) => a - b)
// .reduce((a, b) => a + b, 0);

// console.log(combined)