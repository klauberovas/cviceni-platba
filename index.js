var mastercardElm = document.getElementById('mastercard');
var visaCardElm = document.getElementById('visa');
var amexCardElm = document.getElementById('amex');
var discoverCardElm = document.getElementById('discover');
var dinersCardElm = document.getElementById('diners');
// zformátování čísla kreditky
var formatCardNumber = function (value) {
    return value
        .replace(/\D/g, '') // vyhledává číslice
        .slice(0, 16) // max 16 znaků
        .split(/(.{4})/) //rozdělení na podřetězce
        .filter(Boolean) //odstraní prázdné řetězce
        .join('-'); //přidá pomlčku
};
//určení typu karty
var detectCreditCard = function (cardNumber) {
    switch (true) {
        case /^5[1-4]|^22[2-7]/.test(cardNumber):
            return 'mastercard';
        case /^4/.test(cardNumber):
            return 'visa';
        case /^34|^37/.test(cardNumber):
            return 'amex';
        case /^65|^64[4-9]|^6011/.test(cardNumber):
            return 'discover';
        case /^36/.test(cardNumber):
            return 'diners';
        case /^55/.test(cardNumber):
            return 'masterdinners';
        default:
            return 'unknown';
    }
};
//posluchač na input
document
    .querySelector('.card-input')
    .addEventListener('input', function (e) {
    var inputElm = e.target;
    var filteredCardNumber = formatCardNumber(inputElm.value);
    inputElm.value = filteredCardNumber;
    var typeCreditCard = detectCreditCard(inputElm.value);
    //přidání třídy
    if (typeCreditCard === 'mastercard') {
        mastercardElm.classList.add('active');
    }
    else if (typeCreditCard === 'visa') {
        visaCardElm.classList.add('active');
    }
    else if (typeCreditCard === 'amex') {
        amexCardElm.classList.add('active');
    }
    else if (typeCreditCard === 'discover') {
        discoverCardElm.classList.add('active');
    }
    else if (typeCreditCard === 'diners') {
        dinersCardElm.classList.add('active');
    }
    else if (typeCreditCard === 'masterdinners') {
        dinersCardElm.classList.add('active');
        mastercardElm.classList.add('active');
    }
    else {
        mastercardElm.classList.remove('active');
        visaCardElm.classList.remove('active');
        amexCardElm.classList.remove('active');
        discoverCardElm.classList.remove('active');
        dinersCardElm.classList.remove('active');
    }
});
