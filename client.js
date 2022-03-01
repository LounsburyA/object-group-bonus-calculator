const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

function bonusCalc(array) {
  let bonus = [];
  for (let i = 0; i < array.length; i++) {
    //for (let a of array) {

    let bonusPercentage = 0;
    let salaryCap = 0;
    let total = 0;
    if (array[i].reviewRating < 2) {
      bonusPercentage = 0;
      console.log('it should be 0 (no bonus');
    } 
    else if (array[i].reviewRating === 3) {
      bonusPercentage = .04;
      console.log('it should be 4')
    } 
    else if (array[i].reviewRating === 4) {
      bonusPercentage = .06;
      console.log('it should be 6');
    }
     else {
      bonusPercentage = .10;
      console.log('it should be 10');
    } 
    
    if (array[i].annualSalary > 65000) {
      salaryCap -= 0.01;
      
    }
    if (array[i].employeeNumber / 1000 >= 1) {
      salaryCap += .05;
    }
    // console.log(bonusPercentage);
  }
      total = salaryCap + bonusPercentage
      if (total >=)
}

bonusCalc(employees);
// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


