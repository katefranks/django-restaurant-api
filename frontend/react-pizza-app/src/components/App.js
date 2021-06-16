import {Component} from 'react';
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
  }

  componentDidMount() {

    // this.setState({items});
    fetch('/api/v1/')
      .then(response => response.json())
      .then(items => this.setState({items}));

  }

  addToOrder(orderItem) {
    const order = [...this.state.order];
    order.push(orderItem);
    this.setState({order});
  }

  // saveOrder(order) {
  //
  //
  // }

  render() {
    return (
      <div className="main-menu">
        <header>
          <h1 className="main-header">Greenville Pizza Co.</h1>
          <p>411 University Ridge, Greenville, SC 29601</p>
          <p>555-555-555</p>
        </header>
        <MenuList items={this.state.items} addToOrder={this.addToOrder}/>
        <Order order={this.state.order} />
      </div>
  );}
}
export default App;

// <MenuCategory category ={this.props.category} />
// <MenuItem item={this.props.item} />
