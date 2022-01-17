// link for binance API for webstream
// https://binance-docs.github.io/apidocs/futures/en/#websocket-market-streams

// created links with Binance API to get price and symbol of cryptocurrency
let wsBtc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let wsEth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let wsAda = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@trade');
let wsSol = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade');
let wsDoge = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');

// created links with Binance API to get price change percentage
let wsBtcChange = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
let wsEthChange = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@ticker');
let wsAdaChange = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@ticker');
let wsSolChange = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@ticker');
let wsDogeChange = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@ticker');

// created a function to round numbers to two decimal places
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

const symbols = ['btc', 'eth', 'ada', 'xrp'];


// get the value of each coin's price change percentage through a certain parameter
wsBtcChange.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    document.getElementById('coin-change-btc').innerHTML = roundToTwo(stockObject.P) + '%';
}
wsEthChange.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    document.getElementById('coin-change-eth').innerHTML = roundToTwo(stockObject.P) + '%';
}

wsAdaChange.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    document.getElementById('coin-change-ada').innerHTML = roundToTwo(stockObject.P) + '%';
}

wsSolChange.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    document.getElementById('coin-change-sol').innerHTML = roundToTwo(stockObject.P) + '%';
}

wsDogeChange.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    document.getElementById('coin-change-doge').innerHTML = roundToTwo(stockObject.P) + '%';
}

// get the value of each coin's price and symbol through a certain parameter
wsBtc.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    document.getElementById('coin-symbol-btc').innerHTML = stockObject.s;
    document.getElementById('coin-price-btc').innerHTML = 'USD$ ' + roundToTwo(stockObject.p);
}

wsEth.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    document.getElementById('coin-symbol-eth').innerHTML = stockObject.s;
    document.getElementById('coin-price-eth').innerHTML = 'USD$ ' + roundToTwo(stockObject.p);
}

wsAda.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    document.getElementById('coin-symbol-ada').innerHTML = stockObject.s;
    document.getElementById('coin-price-ada').innerHTML = 'USD$ ' + roundToTwo(stockObject.p);
}

wsSol.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    document.getElementById('coin-symbol-sol').innerHTML = stockObject.s;
    document.getElementById('coin-price-sol').innerHTML = 'USD$ ' + roundToTwo(stockObject.p);
}

wsDoge.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    document.getElementById('coin-symbol-doge').innerHTML = stockObject.s;
    document.getElementById('coin-price-doge').innerHTML = 'USD$ ' + roundToTwo(stockObject.p);
}