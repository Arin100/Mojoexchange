var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var bin = document.getElementById("binance");
var car = document.getElementById("cardano");


var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Cbinancecoin%2Ccardano&vs_currencies=inr&include_market_cap=true",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response) {
    btc.innerHTML = response.bitcoin.inr;
    eth.innerHTML = response.ethereum.inr;
    doge.innerHTML = response.dogecoin.inr;
    bin.innerHTML = response.binancecoin.inr;
    car.innerHTML = response.cardano.inr;
});