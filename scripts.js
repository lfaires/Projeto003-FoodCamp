function activeOrderFood(classOrder) {
    const active = document.querySelector(".order-food .activeli");
    
    if(active !== null){
        active.classList.remove("activeli")
    }

    const selector = document.querySelector("." + classOrder)
    selector.classList.add("activeli")
}

function activeOrderBeverage(classOrder) {
    const active = document.querySelector(".order-beverage .activeli");
    const selector = document.querySelector("."+ classOrder)
    if(active !== null){
        active.classList.remove("activeli")
    }
    
    selector.classList.add("activeli")
}

function activeOrderDessert(classOrder) {
    const active = document.querySelector(".order-dessert .activeli");
    const selector = document.querySelector("." + classOrder)
    if(active !== null){
        active.classList.remove("activeli")
    }
    
    selector.classList.add("activeli")
}