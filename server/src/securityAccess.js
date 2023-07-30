const {XCoinAPI} = require("./XCoinAPI.js")
require("dotenv").config();

const api_key = process.env.ACC_KEY;
const api_secret = process.env.SEC_KEY;

const xcoinAPI = new XCoinAPI(api_key, api_secret);
const rgParams = {
  currency: "BTC"
  // order_currency: "BTC",
  // payment_currency: "KRW",
};

const main = async () => {
  const res = await xcoinAPI.xcoinAjnpiCall("/info/balance", rgParams);
  return res.body
};

module.exports.secu = main;