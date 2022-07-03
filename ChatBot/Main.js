const TeleBot = require("telebot");
const axios = require("axios");
require('dotenv').config();
let {boton}=require('./Buttons/buttons');
const bot = new TeleBot({
    token:process.env.TOKEN,
    usePlugins: ['commandButton']
    });

    bot.on('/start',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.text,bot))
        bot.sendMessage(msg.from.id, `¡Saludos ${msg.from.first_name}! Bienvenido a nuestra tienda`, {replyMarkup})
        //bot.sendMessage(msg.from.id,"Menu Principal",{replyMarkup});
    }); 

    bot.on('/back',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.data,bot))
        bot.sendMessage(msg.from.id, `¿Qué deseas hacer, ${msg.from.first_name}?`, {replyMarkup});
    }); 
    
    bot.on('/show',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.data,bot))
        bot.sendMessage(msg.from.id,"Mostrando productos disponibles",{replyMarkup});
    });

    bot.on('/pago',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.data,bot));
        bot.sendMessage(msg.from.id,`${msg.from.first_name}, actualmente aceptamos`,{replyMarkup});
    });

    bot.on('/zona',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.data,bot))
        bot.sendMessage(msg.from.id, 'Trabajamos de 9:00 A.M - 6:00 P.M de lunes a viernes, y realiamos entregas en:', {replyMarkup});
        //bot.sendMessage(msg.from.id,`${msg.from.first_name}, estamos trabajando:`,{replyMarkup},{replyMarkup});
    });

    bot.on('/view',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.data,bot))
        bot.sendMessage(msg.from.id,"Reviza tu carrito para confirmar la compra",{replyMarkup});
    });

    bot.on('/add',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.data,bot))
        bot.sendMessage(msg.from.id,"Añadiendo al carrito",{replyMarkup});
    });

    bot.on('/fact',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.data,bot))
        bot.sendMessage(msg.from.id,"Mostrando Factura",{replyMarkup});
    });

    bot.on('/search',msg=>{
        let replyMarkup=bot.inlineKeyboard(boton(msg.data,bot))
        bot.sendMessage(msg.from.id,"Mostrando informacion",{replyMarkup});
    });
    
    //-------------------------------------- Enviar mapas

    bot.on('/map1', msg => {
        let replyMarkup = bot.inlineKeyboard(boton(msg.data, bot))
        bot.sendLocation(msg.from.id, [10.644715920875937, -71.61821645983906], {replyMarkup});
    });

    bot.on('/map2', msg => {
        let replyMarkup = bot.inlineKeyboard(boton(msg.data, bot))
        bot.sendLocation(msg.from.id, [10.671812671276458, -71.65369837326266], {replyMarkup});
    });
    bot.on('/map3', msg => {
        let replyMarkup = bot.inlineKeyboard(boton(msg.data, bot))
        bot.sendLocation(msg.from.id, [10.59882925256173, -71.65087523348457], {replyMarkup});
    });
    
bot.start();