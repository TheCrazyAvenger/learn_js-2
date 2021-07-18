'use strict';

import '@babel/polyfill';
import elemClosest from 'element-closest';
elemClosest(window);
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import calc from './modules/calc';
import countTimer from './modules/countTimer';
import ourTeam from './modules/ourTeam';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import tabs from './modules/tabs';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';

//Таймер
countTimer(2021, 6, 9);

//Меню
toggleMenu();

//Pop up
togglePopUp();

//Табы
tabs();

//Слайдер
slider();

//Команда
ourTeam();

//Калькулятор
calc(100);

//send ajax-form
sendForm();
