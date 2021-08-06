import React from 'react';

class Order extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      order: [],
      lastName: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.saveOrder(this.state.lastName);
    this.setState({lastName: ''});
}

  render(){
  const items = this.props.order.map((item, index) => (
    <li>
      <p>{item.name}</p>
      <p>${item.price}</p>
      <button className="button-add-to-order" type='button' onClick={() => this.props.removeItem(item.name)}>Remove</button>
    </li>
  ));


  const subtotal = this.props.order.reduce((acc, i) => acc + i.price, 0);

  return (
    <>
    <div className="order-container">
      <h2 className="add-to-order">Items Added to Order:</h2>
      <ul id="order-items-container" className="ul-items" >{items}</ul>
      <div className="add-to-order">Subtotal = ${subtotal}</div>
      <br/>
      <form onSubmit={this.handleSubmit}>
        <input className="input-field" type="text" name="lastName" value={this.state.lastName} onChange={this.handleInput} placeholder="Enter Last Name"/>
        <button className="button-add-to-order" type="submit">Save Order</button>
      </form>
      <br/>
    </div>
    </>
  )
}
}

export default Order;

// <button type='button' onClick={() => this.removeItem(item.id)}>Remove</button>
