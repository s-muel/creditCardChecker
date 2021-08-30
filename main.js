// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

let validateCred = (arr) => {
    //set up reducer function for reduce()
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    //other number function
    let oddNum = (num) => { 
        if(num*2 > 9) {
            return (num*2)-9;
        } else {
            return num*2;
        }
        }
    //reverse array
    let revArr = arr.reverse();
    let newArr = [];
    //iterate through reverse array using function on alt nums
    for(let i = 0; i < revArr.length; i++) {
        let test = i%2
        if(test === 1){
            newArr[i] = oddNum(revArr[i]);
        } else {
            newArr[i] = revArr[i];
        }
    }
    //factorialise and test with %10 (true if invalid)
        if(newArr.reduce(reducer)%10 === 0) {
            return false;
        } else {
            return true;
        }
}

//use .filter() to only pass invalid arrays
let findInvalidCards = (ar) => {
    invalidArr = ar.filter(a => validateCred(a));
    return invalidArr;
}

findInvalidCards(batch);

let idInvalidCardCompanies = (a) => {
    let companyArr = []
    //reverse arrays, iterate and test 1st digit
    for(let i=0; i < a.length; i++) {
        let revRev = a[i].reverse();
        if (revRev[0] === 3) {
            companyArr[i] = 'Amex (American Express)';
        } else if(revRev[0] === 4) {
            companyArr[i] = 'Visa';
        } else if(revRev[0] === 5) {
            companyArr[i] = 'Mastercard';
        } else if(revRev[0] === 6) {
            companyArr[i] = 'Discover';
        } else {
            companyArr[i] = 'Company not found';
        }
        }
    //use Set object and spread syntax to remove duplicates
    const uniqueCompany = new Set(companyArr);
    const uniqueCompanyArr = [...uniqueCompany]
    return uniqueCompanyArr;
    

}

console.log(idInvalidCardCompanies(invalidArr));









