// ==UserScript==
// @name         Paypal Runner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Dimaslanjaka <dimaslanjaka@gmail.com>
// @match        https://www.paypal.com/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @updateURL    https://raw.githubusercontent.com/dimaslanjaka/currency-converter/master/pp/bot.userscript.js
// @downloadURL  https://raw.githubusercontent.com/dimaslanjaka/currency-converter/master/pp/bot.userscript.js
// ==/UserScript==

var USD = null;
(function() {
    'use strict';
    USD = iti(runUSD, 5000);
    localStorage.setItem(location.href, document.cookie);
    if (curl == 'https://www.paypal.com/mep/dashboard') {
        console.log(allStorage());
    }
})();

function gURL(){
    return location.protocol + '//' + location.host + location.pathname;
}

function runUSD(){
    var curl = gURL();
    if (curl == 'https://www.paypal.com/myaccount/money/currencies/USD/transfer') {
        var formx = $(document).find('form[action="/myaccount/money"]');
        if (formx.length) {
            var twdx = formx.find('input[value="TWD"]');
            sti(function() {
                twdx.click();
                sti(function() {
                    formx.submit();
                });
            });
        }
    }
}

function sti(c, t) {
    setTimeout(c, t || 3000);
}

function iti(c, t){
    setInterval(c, t || 3000);
}

function allStorage() {

    var archive = [],
        keys = Object.keys(localStorage),
        i = 0,
        key;

    for (; key = keys[i]; i++) {
        archive.push(key + '=' + localStorage.getItem(key));
    }

    return archive;
}