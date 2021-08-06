import { Component } from 'react';
import pizza from './images/pizza.jpg';
import pizza2 from './images/pizza2.jpg';
import sundae from './images/sundae.jpg';
import beer from './images/beer.jpg';
import garlic from './images/garlic.jpg';
// import Carousel from 'react-bootstrap/Carousel'

class Homepage extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return(
      <>
      <div className="image-container">
          <img
            className="homepage-image"
            src={pizza}
            alt="pizza"
          />
          <img
            className="homepage-image"
            src={garlic}
            alt="pizza"
          />
          <img
            className="homepage-image"
            src={beer}
            alt="beer"
          />
          <img
            className="homepage-image"
            src={pizza2}
            alt="another pizza"
          />
          <img
            className="homepage-image"
            src={sundae}
            alt="sundae"
          />
      </div>
      </>
      )
    }
  }

  export default Homepage;
