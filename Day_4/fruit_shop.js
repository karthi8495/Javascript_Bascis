let applePrice = 25;
let mangoPrice = 15;
let bananaPrice = 10;
let shopName = "Arun's Fruit Shop";
let isOpen = true;
console.log("Welcome to" + shopName);
console.log("Are we open?" + isOpen);

function calculateTotalcost(apples,bananas,mangoes) {
      return (apples * applePrice) + (bananas * bananaPrice) + (mangoes * mangoPrice)
}

function applyDiscount(totalCost){
    var finalCost = totalCost;
    if(totalCost > 100) {
        finalCost = finalCost * 0.9;
        return "you're eligible for 10% Discount "+ finalCost;

    } else{
        return "No Discount available. "+ finalCost;
    }
}
let customerCost = calculateTotalcost(4,2,1);
console.log("Actual price: " + customerCost);
var finalPrice = applyDiscount(customerCost);
console.log("The customer 1 need to pay: " + finalPrice + "Rs.");

customerCost = calculateTotalcost(4,0,0);
console.log("Actual price: "+ customerCost);
finalPrice = applyDiscount(customerCost);
console.log("the customer 2 needs to pay: " + finalPrice + "Rs.")

customerCost = calculateTotalcost(4,5,3);
console.log("Actual Price: " + customerCost);
finalPrice = applyDiscount(customerCost);
console.log("the customer 3 needs to pay: "+ finalPrice + "Rs.")