require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modul from './modules/modal';
import timer from './modules/timer';
import calc from './modules/calculator';
import cards from './modules/cards';
import forms from './modules/form';
import slider from './modules/slide';
import {socialAncOpenFun} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout (function () {
        socialAncOpenFun('.modal', modalTimerId);
    }, 30000000);
        
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modul('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2021-09-08');
    calc();
    cards();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });


}); 


