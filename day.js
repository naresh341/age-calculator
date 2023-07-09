// // let small=document.querySelectorAll("small")
// // for input
// // let small=document.querySelectorAll("small")
// // let SubmitBtn = document.querySelector('.btn');
// // for output
// // let d=document.getElementById("d")
// // let y=document.getElementById("y")
// // let m=document.getElementById("m")
// function day() {
//     let dayinpt = document.getElementById("dayinpt").value;
//     let dayerror = document.getElementById("dayerror");
//     if (dayinpt == "") {
//         dayerror.style.color = "red";
//         dayerror.innerHTML = "Please Enter Day";
//         return false;
//     }
//     else if (dayinpt >= 31 || dayinpt <= 1) {
//         dayerror.style.color = "red";
//         dayerror.innerHTML = "Invalid Details";
//         return false;
//     }
//     else {
//         dayerror.innerHTML = "";
//         return true;
//     }

// }
// function month() {

//     let monthinpt = document.getElementById("monthinpt").value;
//     let montherror = document.getElementById("montherror");
//     if (monthinpt == "") {
//         montherror.style.color = "red";
//         montherror.innerHTML = "Please Enter Month";
//         return false;
//     }
//     else if (monthinpt <= 1 || monthinpt >= 12) {
//         montherror.style.color = "red";
//         montherror.innerHTML = "Month should be between 1 and 12.";
//         return false;
//     }
//     else {
//         montherror.innerHTML = "";
//         // return true;
//     }
// }
// function year() {
//     let yearerror = document.getElementById("yearerror");

//     let currentYear = new Date().getFullYear();
//     let yearinpt = document.getElementById("yearinpt").value;
//     if (yearinpt == "") {

//         yearerror.style.color = "red";
//         yearerror.innerHTML = "Please Enter Year.";
//         return false;

//     }
//     else if (yearinpt > currentYear) {
//         yearerror.style.color = "red";
//         yearerror.innerHTML = "Invalid details";
//         return false;
//     }
//     else {
//         yearerror.innerHTML = "";
//         // return true
//     }
// }
// // function calculateAge(){
// //     let age=new Date()
// //     let today=new Date();
// //     let days=today.getFullYear() - age.getFullYear()
// //     let months=today.getMonth() - age.getMonth()
// //     let years=today.getDate() -age .getDate()
// //     if(months<0 || (months===0 && days<0)){
// //         years--;
// //         if(months===0){
// //             months=11;
// // }
// // else{
// //     months= 12+ months;
// // }
// // days=30 + months;
// // }
// // d.innerHTML=days;
// // m.innerHTML=months;
// // y.innerHTML=years;
// // }
// function calculateAge() {
//     const today = new Date();
//     const birthYear = today.getFullYear() - 1990;
//     const birthMonth = today.getMonth() - 9;
//     const birthDay = today.getDate() - 26;

//     const years = Math.floor(birthYear);
//     const months = Math.floor(birthMonth);
//     const days = Math.floor(birthDay);

//     const d = document.querySelector('#days');
//     const m = document.querySelector('#months');
//     const y = document.querySelector('#years');

//     d.innerHTML = days;
//     m.innerHTML = months;
//     y.innerHTML = years;
// }
// let SubmitBtn = document.querySelector('.btn');
// SubmitBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     let dayopt = day();
//     let monthopt = month();
//     let yearopt = year();
//     if (!dayopt || !monthopt || !yearopt) return;

//     let age = `${dayinpt}/${monthinpt}/${yearinpt}`;
//     calculateAge();
// });


// Get input and output elements
const dayInput = document.getElementById("dayinpt");
const dayError = document.getElementById("dayerror");
const monthInput = document.getElementById("monthinpt");
const monthError = document.getElementById("montherror");
const yearInput = document.getElementById("yearinpt");
const yearError = document.getElementById("yearerror");
const dOutput = document.getElementById("d");
const mOutput = document.getElementById("m");
const yOutput = document.getElementById("y");
const submitBtn = document.querySelector('.btn');

// Function to validate day input
function validateDay() {
  const day = dayInput.value;
  if (day === "") {
    dayError.style.color = "red";
    dayError.innerHTML = "Please enter day";
    return false;
  } else if (day < 1 || day > 31) {
    dayError.style.color = "red";
    dayError.innerHTML = "Invalid day";
    return false;
  } else {
    dayError.innerHTML = "";
    return true;
  }
}

// Function to validate month input
function validateMonth() {
  const month = monthInput.value;
  if (month === "") {
    monthError.style.color = "red";
    monthError.innerHTML = "Please enter month";
    return false;
  } else if (month < 1 || month > 12) {
    monthError.style.color = "red";
    monthError.innerHTML = "Invalid month";
    return false;
  } else {
    monthError.innerHTML = "";
    return true;
  }
}

// Function to validate year input
function validateYear() {
  const year = yearInput.value;
  if (year === "") {
    yearError.style.color = "red";
    yearError.innerHTML = "Please enter year";
    return false;
  } else if (year > new Date().getFullYear()) {
    yearError.style.color = "red";
    yearError.innerHTML = "Invalid year";
    return false;
  } else {
    yearError.innerHTML = "";
    return true;
  }
}

// Function to calculate age
function calculateAge() {
  const today = new Date();
  const birthYear = today.getFullYear() - 1990;
  const birthMonth = today.getMonth() - 9;
  const birthDay = today.getDate() - 26;

  const years = Math.floor(birthYear);
  const months = Math.floor(birthMonth);
  const days = Math.floor(birthDay);

  dOutput.innerHTML = days;
  mOutput.innerHTML = months;
  yOutput.innerHTML = years;
}

// Event listener for submit button
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const dayValid = validateDay();
  const monthValid = validateMonth();
  const yearValid = validateYear();

  if (!dayValid ||!monthValid ||!yearValid) {
    return;
  }

  const age = `${dayInput.value}/${monthInput.value}/${yearInput.value}`;
  calculateAge();
});
