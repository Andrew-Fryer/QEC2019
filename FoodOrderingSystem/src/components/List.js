import React from 'react';
class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items : [],
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    
    if(newItemValue) {
      this.setState({items: this.state.items.concat(newItemValue)});
      console.log(newItemValue);
      this.refs.form.reset();
    }
  }
  onRemove(item) {
    this.setState({
      items: this.state.items.filter(x => x !== item),
    })
  }
  render() {
    return (
      <div className="List">
        <div>
          {this.state.items.map(item => (
            <div>
              <input type="text" value={item}/>
              <button onClick={() => this.onRemove(item)}>&times;</button>
            </div>))}
        </div>
        <form ref="form" onSubmit={this.onSubmit} className="form-inline">
          <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
          <button type="submit" className="btn btn-default">Add</button> 
        </form>
      </div>
    );
  }
}

export default List;
