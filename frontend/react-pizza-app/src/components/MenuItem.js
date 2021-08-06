function MenuItem(props) {

  const item = props.item;

  // const {name, description, price} = props.item;

  return(
    <li key={item.name}>
      <p className="item-name">{item.name}</p>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <button className="button-add-to-order" onClick={() => props.addToOrder(props.item)}>add to order</button>
    </li>
  )
}

export default MenuItem;
