const fetch = require("node-fetch");

class RecipeRequest{
    constructor(){
        this.ingredients = [];
        this.excluded = [];
        this.requestResponse = null
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient)
    }

    addExcluded(excluded) {
        this.excluded.push(excluded)
    }

    getRequestResponse(){
        return this.requestResponse
    }
    // addCuisine(cuisine) {
    //     this.cuisine.add(cuisine)
    // }
    //
    // addDiet(diet) {
    //     this.diet.add(diet)
    // }

    async makeRequest() {
        // var XMLHttpRequest = require("xhr2").XMLHttpRequest;
        // const Http = new XMLHttpRequest();
        var url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=7a161cad2082480688ba9420e2b5f198";

        if (this.ingredients && this.ingredients.length) {
            url = url + "&ingredients=";
            for(var elem in this.ingredients){
                url = url + this.ingredients[elem] + ","
            }
            url = url.substring(0, url.length - 1);
        }

        if (this.exclude && this.exclude.length) {
            url = url + "&excludeIngredients=";
            for(var elem in this.exclude){
                url = url + elem + ","
            }
            url = url.substring(0, url.length - 1);
        }
        // return fetch(url).then(response => response.json())
        //     .then(data => {this.requestResponse = data;})
        //     .then(e => {return this.getRequestResponse()})
				let res = await fetch(url);
				res = res.json();
				return res;
    }
}

// var request = new RecipeRequest()
// request.addIngredient("tortilla")
// request.addIngredient("cheese")
// request.addIngredient("green onion")
// request.addIngredient("pepper")
// request.addIngredient("chicken")

// request.addExcluded("avocado")


// request.makeRequest().then(() => {
// 	console.log(request.getRequestResponse());
// });

module.exports = () => {
	return new RecipeRequest()
};
