let food = 0;
let beverage = 0;
let dessert = 0;

function activeOrderFood(classOrder) {
    const active = document.querySelector(".order-food .activeli");
    const activeicon = document.querySelector(".order-food .activeicon")

    if(active !== null){
        active.classList.remove("activeli");
        activeicon.classList.replace("activeicon","checkicon")
    }

    const selector = document.querySelector(classOrder);
    selector.classList.toggle("activeli");

    const checkmark = ".order-food " + classOrder + " .checkicon"
    
    const selectoricon = document.querySelector(checkmark)
    selectoricon.classList.replace("checkicon","activeicon")

    food = 1;
    count(food, beverage, dessert)
}

function activeOrderBeverage(classOrder) {
    const active = document.querySelector(".order-beverage .activeli");
    const activeicon = document.querySelector(".order-beverage .activeicon");
        
    if(active !== null){
        active.classList.remove("activeli");
        activeicon.classList.replace("activeicon","checkicon")
    }

    const selector = document.querySelector(classOrder);
    selector.classList.add("activeli");
    
    const checkmark = ".order-beverage " + classOrder + " .checkicon"
    
    const selectoricon = document.querySelector(checkmark)
    selectoricon.classList.replace("checkicon","activeicon")

    beverage = 1;
    count(food, beverage, dessert)
}

function activeOrderDessert(classOrder) {
    const active = document.querySelector(".order-dessert .activeli");
    const activeicon = document.querySelector(".order-dessert .activeicon");
    
    if(active !== null){
        active.classList.remove("activeli")
        activeicon.classList.replace("activeicon","checkicon")
    }

    const selector = document.querySelector(classOrder);
    selector.classList.add("activeli");

    const checkmark = ".order-dessert " + classOrder + " .checkicon"
    
    const selectoricon = document.querySelector(checkmark)
    selectoricon.classList.replace("checkicon","activeicon")

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

    const total = (parseFloat((document.querySelector(".order-food .activeli .price").innerHTML).replace(",",".")) + parseFloat((document.querySelector(".order-beverage .activeli .price").innerHTML).replace(",",".")) + parseFloat((document.querySelector(".order-dessert .activeli .price").innerHTML).replace(",","."))).toFixed(2)

    document.querySelector(".total").innerHTML = ("&#82;&#36; " + total).replace(".",",")
    
    const blank = document.querySelector(".blank")
    blank.classList.replace("hide", "unhide")
}

function cancelOrder(){
    const blank = document.querySelector(".blank")
    blank.classList.replace("unhide", "hide")
}
