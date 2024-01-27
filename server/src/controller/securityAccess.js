import XCoinAPI from "./XCoinAPI.js";
import dotenv from "dotenv";
dotenv.config();

const api_key = process.env.ACC_KEY;
const api_secret = process.env.SEC_KEY;

const rgParams = {
  currency: "BTC"
};

const xcoinAPI = new XCoinAPI(api_key, api_secret);

const api_security = async (endpoint) => {
  const res = await xcoinAPI.xcoinApiCall(endpoint, rgParams);
  return res
  // console.log(`result: ${res.body}`)
};

export default api_security;