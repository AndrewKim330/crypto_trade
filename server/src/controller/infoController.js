import api_security from "./securityAccess.js";
const infoRoute = "/info"

export const getBalance = async (req, res, next) => {
    const getBalanceEndpoint = 'balance'
    const endpoint = `${infoRoute}/${getBalanceEndpoint}`
    const msg = 'getBalance routing success';
    console.log(msg);
    try{
        const currentBalance = await api_security(endpoint);
        // need to handle result data
        res.status(200).send(currentBalance.body); 
        console.log('getBalance success');
    } catch (e) {
        console.error(e);
        
    } 
};