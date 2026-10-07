git // תרגיל 1 ------

const myName = "Ishay";
const age = 16;
const isStudent = true;

const introduction = `My name is ${myName}, I am ${age} years old. Student: ${isStudent}`;

console.log(introduction);
console.log(typeof myName);
console.log(typeof age);
console.log(typeof isStudent);


// string
// undefined
// boolean 

const course = "JavaScript";
let completedExercises;
const isReady = false;
console.log(typeof course);
console.log(typeof completedExercises);
console.log(typeof isReady);

let completedCount=0;
completedCount = 1;
// צריך להיות מסוג let כי משנים את הערך שלו

// תרגיל 2 ----------


const priceText = "120";
const quantityText = "3";
const orderNumber = 5021;

const numberPrice = Number(priceText);
console.log(typeof numberPrice);
const numberQuantity = Number(quantityText);
console.log(typeof numberQuantity);

const totalPrice = numberPrice * numberQuantity;

const orderIDText = String(orderNumber);
console.log(typeof orderIDText);

//const price = "120";
//const quantity = 3;
//const total = price + price + price;
//console.log(total);
// פרייס הוא מסוג סטרינג

//console.log(Number("8") + 2);
//console.log(String(8) + 2);
// הפלט יהיה 10 ו-"82 "

// תרגיל 3 -----------

const my_age = 17; //גיל
const has_Permission = true; //אישור
const is_Registration_Open = true; //הרשמה פתוחה
const participant_Id = 24; //מספר משתתף

const isEligible = my_age>=18? "eligible" : "not eligible";
console.log(isEligible);

const isEven = participant_Id%2===0;

//if (is_Registration_Open && participant_Id === 24)
//{
//    console.log("registered");
//}

if (is_Registration_Open)
{
    if (has_Permission)
        console.log("registered");
    else
        console.log("waiting for approval");
}
else
    console.log("closed");

// תרגיל 4-----------------

const completed = true;
let status =  completed? "Done" : "In Progress";

const stock = 23;
const stockMessage = stock>0? "In Stock" : "Out Of Stock";

// Premium
// כאשר יש רק שתי אופציות לפלט או לערך מוחזר עדיף להשתמש ב-? וכשיש יותר אופציות עדיף if ו-else 
