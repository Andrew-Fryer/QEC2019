import React from "react"
import { Link } from "gatsby"
import $ from "min-jquery";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Input from "../components/input"
import Recipe from "../components/Recipe";
import List from "../components/List";

class SecondPage extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	add(data) {
		$.ajax({
			url: 'http://10.217.205.104:2019/food/add',
			type: 'post',
			data: {username: 'user', items: data},
			success: function() {
				console.log('success');
			}
		});
	}

	get() {
		$.ajax({
			url: 'http://10.217.205.104:2019/food/request',
			type: 'post',
			data: {username: 'user'},
			success: function(data) {
				this.setState({data});
			}
		});
	}

  render() {
    let missedI = [
      {
          "aisle": "Baking",
          "amount": 1.0,
          "id": 18371,
          "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
          "metaInformation": [],
          "name": "baking powder",
          "original": "1 tsp baking powder",
          "originalName": "baking powder",
          "originalString": "1 tsp baking powder",
          "unit": "tsp",
          "unitLong": "teaspoon",
          "unitShort": "tsp"
      },
      {
          "aisle": "Spices and Seasonings",
          "amount": 1.0,
          "id": 2010,
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
          "metaInformation": [],
          "name": "cinnamon",
          "original": "1 tsp cinnamon",
          "originalName": "cinnamon",
          "originalString": "1 tsp cinnamon",
          "unit": "tsp",
          "unitLong": "teaspoon",
          "unitShort": "tsp"
      },
      {
          "aisle": "Milk, Eggs, Other Dairy",
          "amount": 1.0,
          "id": 1123,
          "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
          "metaInformation": [],
          "name": "egg",
          "original": "1 egg",
          "originalName": "egg",
          "originalString": "1 egg",
          "unit": "",
          "unitLong": "",
          "unitShort": ""
      }
    ]

    let usedI = [
      {
          "aisle": "Produce",
          "amount": 6.0,
          "id": 9003,
          "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
          "metaInformation": [],
          "name": "apples",
          "original": "6 large baking apples",
          "originalName": "baking apples",
          "originalString": "6 large baking apples",
          "unit": "large",
          "unitLong": "larges",
          "unitShort": "large"
      }
    ]

    return (
      <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    <button id = "adding-ingredients">Add Additional Ingridients</button>

    <Recipe title="Apple Or Peach Strudel" image="https://spoonacular.com/recipeImages/73420-312x231.jpg"
      missedIngredients={missedI} usedIngredients={usedI}/>

    <List add={this.add} get={this.get} missedIngredients={this.state.data.missedIngredients} usedIngredients={this.state.data.usedIngredients} image={this.state.data.image} title={this.state.data.title}/>

		<button onClick={this.get}></button>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
    )
  }
}

export default SecondPage
