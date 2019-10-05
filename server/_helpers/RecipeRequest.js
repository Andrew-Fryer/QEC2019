class RecipeRequest{
    constructor(){
        this.ingredients = [];
        this.excluded = [];
        this.requestResponse = null
    }
		addIngredient(ingredient) {

        this.ingredients.add(ingredient)
    }

    addExcluded(excluded) {
        this.excluded.add(excluded)
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

    makeRequest() {
        const Http = new XMLHttpRequest();
        var url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=7a161cad2082480688ba9420e2b5f198";

        if (this.ingredients && this.ingredients.length) {
            url = url + "&ingredients=";
            for(var elem in this.ingredients){
                url = url + elem + ","
            }
        }

        if (this.exclude && this.exclude.length) {
            url = url + "&excludeIngredients=";
            for(var elem in this.exclude){
                url = url + elem + ","
            }
        }

        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            this.requestResponse = e;
        }
    }
}

module.exports = RecipeRequest;
