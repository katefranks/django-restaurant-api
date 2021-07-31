import {Component} from 'react';
import Cookies from 'js-cookie';
import './App.css';
import MenuList from './MenuList';
import Order from './Order';
import ViewOrders from './ViewOrders';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import {BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
// import { Button , Modal } from 'react-bootstrap';

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


//   render() {
//     return (
//       <>
//
//       <nav>
//         <ul>
//           <li onClick={() => this.setState({selection: 'menu'})}><p>Menu</p></li>
//           <li onClick={() => this.setState({selection: 'kitchen'})}><p>Kitchen</p></li>
//         </ul>
//       </nav>
//       <div className="main-menu">
//         <header>
//           <h1 className="main-header">Greenville Pizza Co.</h1>
//           <p>411 University Ridge, Greenville, SC 29601</p>
//           <p>555-555-555</p>
//         </header>
//
//
//
//
//         {
//           this.state.selection === 'menu'
//           ?
//           <>
//             <MenuList items={this.state.items} addToOrder={this.addToOrder}/>
//             <Order order={this.state.order} removeItem={this.removeItem} saveOrder={this.saveOrder}/>
//           </>
//           :
//           <ViewOrders order={this.state.order} />
//         }
//       </div>
//       </>
//   );}
// }
// export default App;

render() {
  return (
  <>
  <Router>
  <div className="main-menu">
    <Nav variant="tabs" defaultActiveKey="/MenuList">
      <Nav.Item>
        <Nav.Link href="/MenuList">Menu</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/ViewOrders">Orders</Nav.Link>
      </Nav.Item>
    </Nav>
    <header>
      <h1 className="main-header">Greenville Pizza Co.</h1>
      <p>411 University Ridge, Greenville, SC 29601</p>
      <p>555-555-555</p>
    </header>
    <Switch>
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
