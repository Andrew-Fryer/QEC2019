import React from 'react';
class Recipe extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <div>
          {this.props.title}
        </div>
        <img src={this.props.image} alt="couldn't load image"/>
        <div>
          Missed Ingredients:
          {this.props.missedIngredients.map(missed => (<p>{missed.name}</p>))}
        </div>
        <div>
          Used Ingredients:
          {this.props.missedIngredients.map(missed => (<p>{missed.name}</p>))}
        </div>
      </div>
    );
  }
}

export default Recipe;
