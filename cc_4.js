// coding challenge 4

let products = [

{name: "midi piano" , category: "electronics" , price: 200.00 , inventory: 50  },
{name: "desk lamp", category: "household" , price: 19.99 , inventory: 500      },
{name: "monitor", category: "electronics" , price: 255.00 , inventory: 75      },
{name: "cookie cereal", category: "groceries" , price: 5.99 , inventory: 2000  },
{name: "grey hoodie", category: "apparel" , price: 21.77 , inventory: 300      },

]

//category discounts 
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
}

let promoPrice = (product.price * (1 - discount).toFixed(2));
product.promoPrice = promoPrice;



}
console.log(products);
