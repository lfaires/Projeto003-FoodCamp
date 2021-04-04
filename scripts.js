let food = 0;
let beverage = 0;
let dessert = 0;

function activeOrderFood(classOrder) {
    const active = document.querySelector(".order-food .activeli");

    if(active !== null){
        active.classList.remove("activeli");

    }

    const selector = document.querySelector(classOrder);
    selector.classList.toggle("activeli");

    food = 1;
    count(food, beverage, dessert)
}

function activeOrderBeverage(classOrder) {
    const active = document.querySelector(".order-beverage .activeli");
        
    if(active !== null){
        active.classList.remove("activeli");
    }

    const selector = document.querySelector("."+ classOrder);
    selector.classList.add("activeli");
    beverage = 1;
    count(food, beverage, dessert)
}

function activeOrderDessert(classOrder) {
    const active = document.querySelector(".order-dessert .activeli");
    
    if(active !== null){
        active.classList.remove("activeli")
    }

    const selector = document.querySelector("." + classOrder);
    selector.classList.add("activeli");
    dessert =1;
    count(food, beverage, dessert)
}

function count(countFood, countBeverage, countDessert){
    const countTotal = countFood + countBeverage + countDessert;
    if (countTotal === 3) {
    const selectButton = document.querySelector(".select-item")
    selectButton.classList.add("hide")
    const confirmButton = document.querySelector(".end-order")
    confirmButton.classList.replace("hide","unhide")
}
}

function confirmOrder(){
    
    document.querySelector(".food").innerHTML = document.querySelector(".order-food .activeli .dishes").innerHTML;

    document.querySelector(".food-price").innerHTML = "&#82;&#36; " + document.querySelector(".order-food .activeli .price").innerHTML;

    document.querySelector(".beverage").innerHTML = document.querySelector(".order-beverage .activeli .dishes").innerHTML;

    document.querySelector(".beverage-price").innerHTML = "&#82;&#36; " + document.querySelector(".order-beverage .activeli .price").innerHTML;

    document.querySelector(".dessert").innerHTML = document.querySelector(".order-dessert .activeli .dishes").innerHTML; 

    document.querySelector(".dessert-price").innerHTML = "&#82;&#36; " + document.querySelector(".order-dessert .activeli .price").innerHTML;

    const total = (parseFloat(document.querySelector(".order-food .activeli .price").innerHTML) + parseFloat(document.querySelector(".order-beverage .activeli .price").innerHTML) + parseFloat(document.querySelector(".order-dessert .activeli .price").innerHTML)).toFixed(2)

    document.querySelector(".total").innerHTML = "&#82;&#36; " + total
    
    const blank = document.querySelector(".blank")
    blank.classList.replace("hide", "unhide")
}

function cancelOrder(){
    const blank = document.querySelector(".blank")
    blank.classList.replace("unhide", "hide")
}
