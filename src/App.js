import logo from './logo.svg';
import './App.css';
import Product from './Componente/Product';
import AddProduct from './Componente/AddProduct';
import {useState} from 'react';
import CartState from './Componente/CartState';
import Logo from './Componente/Logo';
import cartImage from './Assets/Images/shopping-cart-icon.jpg';

function App() {

  const [products, setProductsList] = useState([
    {name: 'bread', price: 12},
    {name: 'milk', price: 11},
    {name: 'cheese', price: 6},
    {name: 'cottege', price: 5},
    {name: 'eggs', price: 25},
    {name: 'cookies', price: 9},
    {name: 'oils', price: 10}
  ]);
  
  const [productsCart, setProductsCart] = useState([]);

  const [sumTotal, setSumTotal] = useState(0);

  const AddToCart = (val)=>{
    let temp = {
      name: val.name,
      price: val.price
    }

    if(productsCart.length == 0)
      productsCart.push(temp);
    else
      setProductsCart(productsCart => [temp, ...productsCart]);
      setSumTotal(Number(sumTotal) + Number(val.price));
  }

  const [statePage, setStatePage] = useState(true);

  const [isShown, setIsShown] = useState(true);
  const handleClick = event => {
    // toggle visibility
    setIsShown(current => !current);
  };
  
  const onClickHome =()=>{
    setStatePage(true);
  }
  const onClickCart =()=>{
    setStatePage(false);
  }
const buyProducts=()=>{
  let purchasedProduct =[...productsCart];
  setProductsCart([]);
  setSumTotal(0);
}
  

  return (
    <div className="App">
      <div className='wrapApp'>
      <Logo home={onClickHome} cart={onClickCart} />
      <div id='homePage' className='wrapProducts' style={{display: statePage ? 'flex' : 'none'}}>
        <div className='titleList'>List of products</div>
        {products.map((val, index)=>{
          return <Product Name= {val.name} Price= {val.price} AddP={AddToCart} Val={val}  />
        })}
      </div>
      <div id='cartPage' className='cartPage' style={{display: !statePage ? 'flex' : 'none'}}>
        <div className='cartLogo'>
          <h3 className='cartTitle'>Cart</h3>
          <img className='cartImage' src={cartImage}></img>
        </div>
        <div className='wrapProductCart'>
          {productsCart.map((val, index)=>{
            return <CartState Name= {val.name} Price= {val.price}  />
          })}
          <h3>Toatal: {sumTotal}</h3>
          <button className='buyButton' onClick={buyProducts} >Buy</button>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default App;
