import {useSelector,useDispatch} from "react-redux"
import './App.css';
import {addItem,toggle} from "../src/redux/cart/cart-actions"



function App() {
  const shop = useSelector(state => state.shop)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
      {shop.collections.map(item => <div key={item.id}><button onClick={()=>dispatch(addItem(item))}>{item.title}</button></div>)}
      </div>
      <div>
        {cart.cartItems.map(item => <p key={item.id}>{item.quantity}</p>)}
        <button onClick={()=>dispatch(toggle())}>Toggle</button>
      </div>
      <p>{cart.cartItems.reduce((total,item) => total + item.quantity * item.price, 0)}</p>
    </div>
  );
}


export default App;
