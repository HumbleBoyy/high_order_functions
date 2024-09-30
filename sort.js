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

const ages = [33, 12, 20, 16, 5, 10, 56, 21, 43, 62, 92, 102, 321];

// Sort
/*
  The sort() method sorts the elements as strings in alphabetical and ascending order.
*/
const sortedCompanies = companies.sort((c1, c2)=> {
     if(c1.start > c2.start){
        return 1
     }else{
        return -1
     }
})

// console.log(sortedCompanies)

// Sort things with Ternary operators
const sortedCompaniesSecond = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
console.log(sortedCompaniesSecond)

// Sort ages
const sortAges = ages.sort((a, b)=> a - b);
console.log(sortAges)