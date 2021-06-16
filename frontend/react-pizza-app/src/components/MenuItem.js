function MenuItem(props) {

  const item = props.item;

  // const {name, description, price} = props.item;

  return(
    <li key={item.name}>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p><button>${item.price}</button></p>
      <button onClick={() => props.addToOrder(props.item)}>Add to order</button>
    </li>
  )
}

export default MenuItem;
