import {Component} from 'react';
import Cookies from 'js-cookie';
import './App.css';
import MenuList from './MenuList';
import Order from './Order';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      order: [],
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.saveOrder = this.saveOrder.bind(this);
  }

  componentDidMount() {

    // this.setState({items});
    fetch('/api/v1/menu/')
      .then(response => response.json())
      .then(data => this.setState({items: data}));

  }

  addToOrder(orderItem) {
    const order = [...this.state.order];
    order.push(orderItem);
    this.setState({order});
  }

  saveOrder(lastName) {

    const subtotal = this.state.order.reduce((acc, i) => acc + i.price, 0);

    const order = {
        lastName: lastName,
        orderItems: this.state.order,
        subtotal,
      };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(order),
      }
      fetch('/api/v1/orders/', options)
        .then(response => response.json())
        .then(data => console.log(data));
    }


  render() {
    return (
      <div className="main-menu">
        <header>
          <h1 className="main-header">Greenville Pizza Co.</h1>
          <p>411 University Ridge, Greenville, SC 29601</p>
          <p>555-555-555</p>
        </header>
        <MenuList items={this.state.items} addToOrder={this.addToOrder}/>
        <Order order={this.state.order} saveOrder={this.saveOrder} />
      </div>
  );}
}
export default App;

// <MenuCategory category ={this.props.category} />
// <MenuItem item={this.props.item} />
