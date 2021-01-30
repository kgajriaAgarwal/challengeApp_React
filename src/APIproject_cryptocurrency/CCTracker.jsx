//url
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
//returning AN array of objects as response

import React, {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import Coin from './Coin';
const CCTracker = () =>{

  const [coins,setCoins] = useState([]);
  const [search,setSearch] = useState('');
  const [fltrcoins, setfltrcoins] = useState(false);
  

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
      setCoins(res.data);
      // console.log(res.data)
    }).catch(error => {
      console.log(error);
    })
  },[])

  const handleChange = e => {
    setSearch(e.target.value);
    setfltrcoins(true);
    // alert('search is:', search);
  }

  const filterCoins = coins.filter((coin) =>
  {
    //console.log('filterdata -- coins:',coins);

    coin.name.toLowerCase().includes(search.toLowerCase())
    //coin.name.toLowerCase().includes('Bitcoin');
  })

  const showCoins = () => {
    // {fltrcoins === false ? 
    //   mapCoins(coins):  null
    // }
    if(fltrcoins === false){
      mapCoins(coins)
    }else{
      console.log('show nothing!');
    }
  }


  const mapCoins = (arr) => {
    arr.map(coin =>{
      console.log('coin is:',coin);
      return(
        <Coin key={coin.id}
        name = {coin.name}
        price = {coin.current_price}
        volume = {coin.volume}
        image = {coin.image}
        symbol = {coin.market_cap}
        />
      )
    })
  }
  //console.log('filterCoins:', filterCoins);
  //alert('filterCoins...->',filterCoins);

  return(
    <>
      <div className = 'coin-app'>
        <div className = 'coin-search'>
          <h1 className = 'coin-text'>Search A Currency</h1>
          <form>
            <input type = 'text' placeholder = 'Search' className = 'coin-input' onChange= {handleChange}/>
          </form>
        </div>
        {/* {showCoins()} */}
        
        { (fltrcoins === false) ? 
          coins.map(coin =>{
          console.log('coin is:',coin);
          return(
            <Coin key={coin.id}
            name = {coin.name}
            price = {coin.current_price}
            volume = {coin.volume}
            image = {coin.image}
            symbol = {coin.market_cap}
            />
          )
        }): null }
      </div>
    </>
  );
}
export default CCTracker;



