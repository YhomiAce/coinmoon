import React from 'react';
import './Coin.css'

const Coin = ({coin}) => {
    const { symbol, name, image, current_price, market_cap, total_volume, price_change_percentage_24h} = coin;
    return (
        <div className="cryptoCoin">
            <img src={image} alt={name} className="coinLogo" />
            <div className="coinNameWrap">
                <h1 className="coinName">{name}</h1>
                <p className="coinSymbol">{symbol}</p>
            </div>
            <p className="coinPrice">N{current_price.toLocaleString()}</p>
            <p className="coinMarketCap">
                Market Cap: N{market_cap.toLocaleString()}
            </p>
            <p className="coinVolume">
                Volume (24H): N{total_volume.toLocaleString()}
            </p>
            {
                price_change_percentage_24h < 0 ?
                <div className="priceDown">
                    <i className="fas fa-angle-down fa-2x"></i>
                    <p className="priceChange"> {price_change_percentage_24h.toFixed(2)}% </p>
                </div> :
                <div className="priceUp">
                    <i className="fas fa-angle-up fa-2x"></i>
                    <p className="priceChange"> {price_change_percentage_24h.toFixed(2)}% </p>
                </div>
            }
        </div>
    )
}

export default Coin
