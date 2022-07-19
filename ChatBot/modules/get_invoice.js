const instance = require("../Utils/Utils");
const boton = require("./buttons");
async function getInvoice(msg,bot){
    try {
        let ID = msg.from.id;
        const replyMarkup = boton(msg.data,bot);
        const res=await instance.get(`trolley?id=${ID}`);
        let products=res.data[0].data;
        let objeto = products.map(items=>({
            "label":items.nombre,
            'amount':parseInt(items.precio.slice(1,items.precio.lenght))*100}));
        const result = {
            title: 'Factura de compra',
            description: 'Node API Store',
            payload: 'telebot-test-invoice',
            providerToken: '284685063:TEST:YjE0YjRiMWVhNzZl',
            startParameter: 'pay',
            currency: 'USD',
            prices: objeto,
            need: {email: true, phoneNumbe: false},
            replyMarkup:replyMarkup
        }
        bot.sendInvoice(msg.from.id,result).then(data => {
            console.log('OK', data);
        }).catch(error => {
            console.log('ERROR', error);
        });;
}catch(err){
    console.log(err);
}}

module.exports = getInvoice;    
