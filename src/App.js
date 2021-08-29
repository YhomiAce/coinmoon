// import axios from 'axios';
import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import Coin from './components/Coin/Coin';
import Spinner from './components/Layout/Spinner';
const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=NGN&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  
  useEffect(()=>{
    axios.get(URL)
    .then(res =>{
      setCoins(res.data);
      setLoading(false)
    })
    .catch(err =>{
      console.error(err);
      setLoading(false);
    })
  },[]);

const searchEvent = e =>{
  setSearch(e.target.value)
}

const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLocaleLowerCase()));


  return (
    <div >
      
      <div className="header">
        <h1 className="brand"> <i className="fas fa-moon"></i> CoinMoon</h1>
        <form >
            <input type="text" value={search} onChange={searchEvent} className="inputField" placeholder="Search A Coin" />
        </form>
      </div>
      <div className="coinsCointainer">
        {
          filteredCoins.length > 0 && !loading ? filteredCoins.map(coin =>(
            <Coin key={coin.id} coin={coin} />
          )) : <Spinner />
        }

      </div>
    </div>
  );
}

export default App;
