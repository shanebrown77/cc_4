// coding challenge 4
console.log(`\n---products before discounts are applied/step2---`)


let products = [


{name: "midi piano" , category: "electronics" , price: 200.00 , inventory: 50  },
{name: "desk lamp", category: "household" , price: 19.99 , inventory: 500      },
{name: "monitor", category: "electronics" , price: 255.00 , inventory: 75      },
{name: "cookie cereal", category: "groceries" , price: 5.99 , inventory: 2000  },
{name: "grey hoodie", category: "apparel" , price: 21.77 , inventory: 300      },


];

//dynamic discounts based on category

for (let product of products) {
let discount = 0;

switch (product.category) {
    case "electronics":
    discount = .20
        break; 
    case "apparel":
    discount = 0.15
        break;
    case "household":
    case "groceries":
    discount = .10
        break;
    default: 
    discount = 0
};

let promoPrice = (product.price * (1 - discount).toFixed(2));
product.promoPrice = promoPrice;



}
//customer type discount 

let customerType = "student"
let additonalDiscount = 0
    if (customerType === "student") {additonalDiscount = 0.05    }
    else if (customerType === "senior") {additonalDiscount = 0.07}
    else {additonalDiscount = 0};

console.log(products)

//simulating checkout process, 3 customers

let customers = [

{id: "001", customerType: "student", cart: "midi piano"},
{id: "002", customerType: "senior", cart: "desk lamp"},
{id: "003", customerType: "student", cart: "monitor"},

]



//after discounts are applied
console.log(`\n---cookie cereal after discounts are applied/step6---`)

for (let key in products[3]) 
{console.log(`${key}: ${products[3][key]}`)}

//step 7

console.log(`\n ---all product info/step7---`)

for (let product of products) {
for (let [key,value] of Object.entries(product)) 
{console.log(`${key} : ${value}`)}}

