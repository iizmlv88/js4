//! 1. Створіть функцію, яка повертає випадкове число


function ranDomDomDom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// // alert(ranDomDomDom(1, 999));


const btnOne = document.querySelector(".btn-one");
btnOne.style.backgroundColor="red";
btnOne.style.color="white";
btnOne.style.padding="10px";
btnOne.style.borderRadius="10px";

btnOne.addEventListener("click", () => {
    alert(ranDomDomDom(1, 999));
});



//! 2. Створіть функцію, яка приймає дві змінні та міняє місяцями

// let numOne = +prompt("введіть число");
// let numTwo = +prompt("введіть число");
// function duo(numOne, numTwo){
  
//   let tmp = numOne;
//   numOne = numTwo;
//   numTwo = tmp;

//   alert(`${numOne}, ${numTwo}`);

// }

// duo(numOne, numTwo);





//! 3. Створіть функцію, яка приймає число та повертає істину, якщо воно парне

// let number = +prompt("введіть число");
// function parne(number) {
//     if(number % 2 === 0) {
//        return  true;
//     } else {
//         return false;   
//     }
// }
// alert(parne(number));






// //! 4. Створіть функцію, яка приймає два числа та повертає найбільший спільний дільник (НСД)

// let one = +prompt("введіть переш число");
// let two = +prompt("введіть друге число");
// function nsd (one, two) {
//     let res = 1;
//     let min = one < two ? one : two;
//     let i = min;
// for ( let i = min ; i > 1; i--) {
//     if ( one % i === 0 && two % i === 0) {
//         res = i;
//     }
// }

//     return res;
// }

// alert(nsd (one, two));



