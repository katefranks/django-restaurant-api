import React from 'react';

class ViewOrders extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      orders: [],
    }
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    fetch('/api/v1/orders/')
      .then(response => response.json())
      .then(data => this.setState({ orders: data }));
  }

      render() {
        const orders = this.state.orders.map((order) => {
          const orderItems = order.orderItems.map(orderItem =>
            <li>{orderItem.name}</li>
          )

          return (
            <li>
              <p>{order.lastName}</p>
              <ul>{orderItems}</ul>
            </li>
          )
        });


        return(
          <>

          <div className="kitchen-view">
            <ul>{ orders }</ul>
          </div>

          </>
        )
      }
      }

      export default ViewOrders;


      // () => (2 + 2)
      //
      //
      // () => {
      //   return 2 + 2
      // }
      //
      // function() {
      //   return 2 + 2
      // }

      // render() {
      //   const orders = this.state.orders.map((order) => (
      //     <li>
      //       <p>{order.lastName}</p>
      //       <p>{order.orderItems}</p>
      //
      //     </li>
      //   ));

      //  // <p>{JSON.stringify(order.orderItems)}</p>
