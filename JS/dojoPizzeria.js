var pizza = {
    crustType: ["hand tossed", "chicago deep dish", "new york style", "thin crust"],
    sauceType: ["traditional", "spicey", "marinara"],
    cheeses: ["mozzarella", "feta", "swiss", "pepperjack", "guda"],
    toppings: ["pineapple", "peperoni", "sausage", "bacon", "black olives", "ham"]
}
function randomPizza(pizza) {
    pizza = {
        crustType: pizza.crustType[Math.floor(Math.random() * pizza.crustType.length)],
        sauceType: pizza.sauceType[Math.floor(Math.random() * pizza.sauceType.length)],
        cheeses: pizza.cheeses[Math.floor(Math.random() * pizza.cheeses.length)],
        toppings: pizza.toppings[Math.floor(Math.random() * pizza.toppings.length)]
    }
    return pizza
}
console.log(randomPizza(pizza))



function pizzaOven(crustType = "deep dish", sauceType = "traditional", cheeses = "mozzarella", toppings = ["peperoni", "sausage"]) {
    pizza = {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    }
    return pizza
}
console.log(pizzaOven())
console.log(pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]))
console.log(pizzaOven("new york style", "traditional", "mozzarella", ["peperoni", "bacon", "black olives", "pineapple", "ham"]))