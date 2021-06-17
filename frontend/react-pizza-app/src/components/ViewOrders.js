import React from 'react';

class ViewOrders extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      orders: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    fetch('/api/v1/orders/')
      .then(response => response.json())
      .then(data => this.setState({ orders: data }));
  }

      render() {
        const orders = this.state.orders.map((order) => (
          <li>
            <p>{order.lastName}</p>
            <p>{JSON.stringify(order.orderItems)}</p>
          </li>
        ));


        return(
          <>
          <button onClick={this.handleClick}>Kitchen View</button>
          <div className="kitchen-view">
            <ul>{ orders }</ul>
          </div>

          </>
        )
      }
      }

      export default ViewOrders;
