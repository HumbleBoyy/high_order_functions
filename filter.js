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


// Filter
/* 
   The filter method in JavaScript is designed as a higher-order function that iterates over each element of an array, 
   allowing developers to apply a specific condition to filter out elements.
*/


// filtering things out with for loop
let canDrink = [];
for(let i = 0; i < ages.length; i ++){
    if(ages[i] >= 28){
        canDrink.push(ages[i])
    }
}

console.log(canDrink)

// Filter
const canHedrink = ages.filter((age)=> {
    if(age >= 21){
        return true
    }
})

console.log(`The list of ages that shows from what age you can buy adult type drinks legally\n
${canHedrink}`)


// Filter retail companies
const retailCompanies = companies.filter((company)=> {
    if(company.category === 'Finance'){
        return true
    }
})

console.log(retailCompanies)



// Get 80s Companies
const eightiesCompanies = companies.filter(company => (company.start >= 
    1950 && company.start < 2000
))

console.log(eightiesCompanies)

// Get the companies that lasted 10 years or more
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10))
console.log(lastedTenYears);