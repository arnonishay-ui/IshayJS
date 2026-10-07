//תרגיל 5

const calculateOrderTotal = (unitPrice, quantity) => quantity * unitPrice;

const orderTotal = calculateOrderTotal(35, 4);
console.log(orderTotal);

const orderTotal1 = calculateOrderTotal(28, 2);
console.log(orderTotal);
const orderTotal2 = calculateOrderTotal(34, 7);
console.log(orderTotal);

// תרגיל 6
const getLetterGrade = (grade) =>
{
    if (grade>=0 && grade<=100)
    {
        if (grade<90)
        {
            if (grade <80)
            {
                if (grade <70)
                {
                    if (grade <60)
                        return "F";
                    return "D";
                }
                return "C";
            }
            return "B";
        }
        return "A";
    }
    return "Invalid Grade";
}

console.log(getLetterGrade(101));

// תרגיל 7

const greet = (name) => "Hello ${name}";

const calculateFinalPrice = (price, discountPercent) => price * ((100-discountPercent)/100);

const myName = greet("Ishay");
console.log(myName);

const finalPrice= calculateFinalPrice(200, 15);
console.log(finalPrice);

//תרגיל 8

const calculatePrice = (price1, price2) => price1>price2? price1+(price2/2) : price2 + (price1/2);

const isExpensive = (price) => price>500? true : false;

const square = (number) => number * number;