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

// Map

/*
  In JavaScript, map() is a method of the Array object. 
  It creates a new array by calling a function on every 
  element of the original array and storing the results in a new array. 
  map() returns the new array, and the original array is unchanged.
*/

// Create array of company names
const companyNames = companies.map((company)=> {
      return company.name
})

console.log(companyNames)

const testMap = companies.map((testCompany)=> {
    return `${testCompany.name} - ${testCompany.category} ${testCompany.start} - ${testCompany.end}`
})

console.log(testMap)


const agesSquare = ages.map(age => Math.sqrt(age)).map(age => age *2)

console.log(agesSquare)