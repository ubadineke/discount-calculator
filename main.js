let totalAmount = parseInt(prompt("Enter total amount for goods"))
let coupon = prompt("Enter coupon code");
let discountedPrice = '';

//Checks if amount is greater than 10000 and less than 20000 then applies 10% discount
function calculateDiscount(amt, code){
    if(amt > 10000 && amt < 20000){
        let discount = 0.1 * amt;
        discountedPrice = amt - discount;
        if(!code)alert(`10% Discount applied, your total price ${discountedPrice}`);

//Checks if amount is greater than 20000, applies extra 15% to the previous discount
    } else if(amt > 20000){
        let discount = 0.25 * amt;
        discountedPrice = amt - discount;
        if(!code)alert(`10% + 15% Discount applied, your total price ${discountedPrice}`);

//If amount is less than 10000
    } else alert(`No discount for you Boss. Total fee to be paid: ${amt}`)

//Checks if there's a coupon code provided and applies extra 5% discount
    if(code){
        let discount = 0.05 * amt;
        discountedPrice -= discount;
        alert(`Coupon code applied, Your Total Price ${discountedPrice}`)
    };
}

//Function initiaalization
calculateDiscount(totalAmount, coupon)