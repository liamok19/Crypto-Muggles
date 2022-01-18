// created a var for the default chart when it will be shown when the page is loaded
var currentSymbol = 'BTCUSDT';
var currentInterval = '1d';




//define the chart properties
var chartProperties = {
    width: 800,
    height: 300,
    grid: {
        vertLines: {
            color: 'rgba(197, 203, 206, 0.5)',
        },
        horzLines: {
            color: 'rgba(197, 203, 206, 0.5)',
        },
    },
    layout: {
        backgroundColor: '#000000',
        textColor: 'rgba(255, 255, 255, 0.9)',
    },
    timeScale: {
        timeVisible: true,
        secondVisible: false,
    }
}

// created variables for DOM elements
var domElement = document.getElementById('tvchart');
var coinImg = document.getElementById('coin-img');
var currency = document.getElementById('currency');
var intervalBtns = document.querySelectorAll(".btn-interval");
var tdSymbols = document.querySelectorAll('.td-symbol');


// created variables to implent the tradeview chart library
var chart = window.LightweightCharts.createChart(domElement, chartProperties);
var candleSeries = chart.addCandlestickSeries();


// created a function to change the chart titles and logo
function changeChartTitle(symbol) {

    let logo;
    let currencyName;

    if (symbol.toUpperCase() === "BTCUSDT") {
        logo = "./assets/images/bitcoin-logo.jpeg";
        currencyName = 'Bitcoin';
    }
    if (symbol.toUpperCase() === "ETHUSDT") {
        logo = "./assets/images/ethereum-logo.png";
        currencyName = 'Ethereum';
    }
    if (symbol.toUpperCase() === "ADAUSDT") {
        logo = "./assets/images/cardano-logo.png";
        currencyName = 'Cardano';
    }
    if (symbol.toUpperCase() === "SOLUSDT") {
        logo = "./assets/images/solana-logo.png";
        currencyName = 'Solana';
    }
    if (symbol.toUpperCase() === "DOGEUSDT") {
        logo = "./assets/images/dogecoin-logo.png";
        currencyName = 'Dogecoin';
    }


    coinImg.setAttribute('src', logo);
    coinImg.setAttribute('alt', symbol + '-logo');
    currency.textContent = currencyName;

}

// made a multiline comment
/**
 * 
 * @param {String} symbol This is the coin 
 * @param {String} interval eg. 1d, 1m
 */

// created a function to render the chart to the page
function renderChart(symbol, interval) {

    // binance api
    var url = `https://api.binance.com/api/v3/klines?symbol=${symbol.toUpperCase()}&interval=${interval}&limit=1000`;

    // fetching the URL
    fetch(url, {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => {
            var cdata = data.map(d => {
                // returns the data in appropriate format
                return { time: d[0] / 1000, open: parseFloat(d[1]), high: parseFloat(d[2]), low: parseFloat(d[3]), close: parseFloat(d[4]) }
            });
            candleSeries.setData(cdata);
        })
        .catch(err => console.log(err));

}

renderChart(currentSymbol, currentInterval);


// created a click function for the coin names in the market table
tdSymbols.forEach(function (td) {
    td.addEventListener('click', function (event) {
        event.preventDefault();



        currentSymbol = event.target.previousElementSibling.textContent;
        changeChartTitle(currentSymbol);
        renderChart(currentSymbol, currentInterval);

    });
});

// created a click function for the interval buttons to change respectively
intervalBtns.forEach(function (btn) {

   btn.addEventListener('click', function (event) {
        event.preventDefault();

        currentInterval = btn.textContent;
        renderChart(currentSymbol, currentInterval);
    })

});

