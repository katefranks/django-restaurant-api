import {Component} from 'react';
import Cookies from 'js-cookie';
import './App.css';
import MenuList from './MenuList';
import Order from './Order';
import ViewOrders from './ViewOrders';
import Homepage from './homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      order: [],
      selection: 'menu',
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.saveOrder = this.saveOrder.bind(this);
    this.removeItem = this.removeItem.bind(this);
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

  removeItem(name) {
    const order = [...this.state.order];
    const index = order.findIndex(item => item.name === name);
    order.splice(index, 1);
    this.setState({ order });
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
  <>
  <Router>
  <div className="main-container">
    <header id="main-header">
      <h1 id="restaurant-header">Greenville Pizza Co.</h1>
      <p>411 University Ridge, Greenville, SC 29601</p>
      <a id="restaurant-phone-number"  href={`tel:+ 555-555-555`}>555-555-5555</a>
      <Nav className="nav-div" bg="dark">
        <Nav.Item>
          <Nav.Link className="navlink-links" exact href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navlink-links" href="/MenuList">Menu</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navlink-links" href="/ViewOrders" eventKey="link-1">Orders</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
    <Switch>
      <Route
        exact path="/"
        render={(props) => (
          <Homepage/>
        )}
      />
      <Route
        path='/MenuList'
        render={(props) => (
          <>
          <MenuList {...props} items={this.state.items} addToOrder={this.addToOrder} />
          <Order order={this.state.order} removeItem={this.removeItem} saveOrder={this.saveOrder}/>
          </>
        )}
        />
      <Route
        eventKey="link-1"
        path='/ViewOrders'
        render={(props) => (
        <ViewOrders order={this.state.order} />
        )}
        />
      </Switch>
    </div>
  </Router>
  </>
);}
}
export default App;
