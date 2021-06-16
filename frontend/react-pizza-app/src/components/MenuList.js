import { Component } from 'react';
import MenuItem from './MenuItem';

class MenuList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selection: 'pizzas',
    }
  }

    render() {

      // const categories = ['pizzas', 'desserts', 'drinks'];
      const categories = this.props.items.map(item => item.category) // an array of categories (duplicates exist)
      const uniqueCategories = [...new Set(categories)]; // an array of categories (no duplicates)

      const headings = uniqueCategories.map(category => (
        <button style={{display: 'flex', flexDirection: 'column', width: '25%', margin: '3px', alignItems: 'center'}} key={category} onClick={() => this.setState({ selection: category })}>{category}</button>
      ));

      const items = this.props.items
        .filter(item => item.category === this.state.selection)
        .map((item) => <MenuItem  item={item} addToOrder={this.props.addToOrder}/>);

      return(
        <>
          <h2 className="menu-header">Menu</h2>
          {headings}
          <ul>
              { items }
          </ul>
        </>
      )
    }
  }

  export default MenuList;

  // <tr>
  //     <td>USA</td>
  //     <td>Washington, D.C.</td>
  //     <td>309 million</td>
  //     <td>English</td>
  //   </tr>
