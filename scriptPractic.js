'use strict';

// const inputRub = document.querySelector('#rub'),
//       inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', function() {
//     const request = new XMLHttpRequest();

//     request.open('GET', 'current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.response);
//             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//         } else {
//             inputUsd.value = 'Что-то пошло не так';
//         }
//     });
// });
// console.log('Запрос данных...');


// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...');
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
//         resolve(product);
//     }, 2000);
// });

// В случае положительного исхода
// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });

// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.log('Произошла ошибка');
// }).finally(() => {
//     console.log('Finally');
// });



// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });


// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });


//ФИЛЬТР

// const names = ['alex', 'bes', 'kosta', 'kevinnnnn'];

// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// });

// console.log(shortNames)

// МАП

// const answers = ['AlsE', 'anNa', 'Hello'];

// const mapAnswers = answers.map(item => item.toLowerCase());

// console.log(mapAnswers)


// every/some

// const some = [4, 2, 4];

// console.log(some.every(item => typeof(item) === 'number'))

// reduce

// const arr = ['a', 'b', 'c']

// const res = arr.reduce((sum, current) => `${sum}, ${current}`)
// console.log(res);




// const obj = {
//     ivan: 'person',
//     Ann: 'person',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'person')
// .map(item => item[0])

// console.log(newArr)






// const person = {
//     name: 'Alex',
//     age: 25,

//     get userAge() {
//         return this.age;
//     },

//     set userAge(num) {
//         this.age = num;
//     }
// };


// console.log(person.userAge)
// console.log(person.userAge = 30)
// console.log(person.userAge)


// class User{

//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     #surname = 'Ivanov'

//     getSurname = function() {
//         return this.#surname;
//     }

//     say(){
//         console.log(`Имя: ${this.name} ${this.#surname}, Возраст: ${this._age}`);
//     }

//     get age(){
//         return this._age;
//     }

//     set age(age) {
//         if (typeof(age) === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     }
// }
// const ivan = new User('Ivan', 27);
// console.log(ivan.getSurname());


// ivan.age = 99;
// console.log(ivan.age);
// ivan.say();

// console.log(ivan.name);
// console.log(ivan.userAge);

// ivan.age = 30;
// ivan.name = 'Alex';

// ivan.say();

// (function(){
//     let number = 2

// }());


// const user = (function(){
//     const privat = function() {
//         console.log('Hello');
//     };
//     return {
//         sayHello: privat
//     };
// }());

// user.sayHello();


// function myModule() {
//     this.hello = function() {
//         console.log('hello');
//     };

//     this.bye = function() {
//         console.log('bye');
//     };
// }

// module.exports = myModule;





























// document.addEventListener('DOMContentLoaded', function() {
//     //////////////////////////////////////
//     // Tabs
//     const tabs = document.querySelectorAll('.tabheader__item'),
//           tabsParent = document.querySelector('.tabheader__items'),
//           tabsContent = document.querySelectorAll('.tabcontent');
          
//     hideTabsContent();
//     showTabsContent();
    
//     tabsParent.addEventListener('click', function (event) {
//         const target = event.target;

//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach(function (item, index) {
//                 if (item == target) {
//                     hideTabsContent();
//                     showTabsContent(index);
//                 }
//             });
//         }
//     });


//     function showTabsContent (index = 0) {
//         tabsContent[index].classList.add('show', 'fade');
//         tabsContent[index].classList.remove('hide');

//         tabs[index].classList.add('tabheader__item_active');
//     }   

//     function hideTabsContent () {
//         tabsContent.forEach(function (item) {
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');
//         });

//         tabs.forEach(function (item) {
//             item.classList.remove('tabheader__item_active');
//         });
//     }

//     //////////////////////////////////////
//     //Timer

//     const deadLine = '2021-04-11';

//     setClock('.timer', deadLine);

//     function getTimeRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//               days = Math.floor(t / (1000 * 60 * 60 * 24)),
//               hours = Math.floor((t / 1000 / 60 / 60) % 24),
//               minutes = Math.floor((t / 1000 / 60) % 60),
//               seconds = Math.floor((t / 1000) % 60);

//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function getZero(num) {
//         if (num >=0 && num <10) {
//             return `0${num}`;
//         } else {
//             return num;
//         }
//     }

//     function setClock(selector, endTime) {
//         const timer = document.querySelector(selector),
//               days = timer.querySelector('#days'),
//               hours = timer.querySelector('#hours'),
//               minutes = timer.querySelector('#minutes'),
//               seconds = timer.querySelector('#seconds'),
//               timeInterval = setInterval(updateClock, 1000);

//         updateClock();

//         function updateClock () {
//             const t = getTimeRemaining(endTime);

//             days.innerHTML = getZero(t.days);
//             hours.innerHTML = getZero(t.hours);
//             minutes.innerHTML = getZero(t.minutes);
//             seconds.innerHTML = getZero(t.seconds);

//             if (t.total <= 0) {
//                 clearInterval(timeInterval);
//             }
//         }
//     }

//     //////////////////////////////////////
//     //Modal

//     const modal = document.querySelector('.modal'),
//           socialAncOpen = document.querySelectorAll('[data-modal]');

//     const timerSpam = setTimeout (function () {
//         socialAncOpenFun();
//     }, 30000000);

//     socialAncOpen.forEach(function (event) {
//         event.addEventListener('click', socialAncOpenFun);
//     });

//     modal.addEventListener('click', function (event) {
//         if (event.target === modal || event.target.getAttribute('data-close') == '') {
//             socialAncCloseFun();
//         }
//     });

//     document.addEventListener('keydown', function (event) {
//         if (event.code === 'Escape' && modal.classList.contains('show')) {
//             socialAncCloseFun();
//         }
//     });

//     window.addEventListener('scroll', showModalByScroll);

//     function socialAncCloseFun() {
//         modal.classList.add('hide');
//         modal.classList.remove('show');
//         document.body.style.overflow = '';
//     }

//     function socialAncOpenFun() {
//         modal.classList.add('show');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         clearInterval(timerSpam);
//     }

//     function showModalByScroll() {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             socialAncOpenFun();
//             window.removeEventListener('scroll', showModalByScroll);
//         }
//     }


//     //////////////////////////////////////
//     //Menu

//     class MenuItem {
//         constructor(img, alt, title, text, price, parentId, ...classes) {
//             this.img = img;
//             this.alt = alt;
//             this.title = title;
//             this.text = text;
//             this.price = price;
//             this.classes = classes;
//             this.parentId = document.getElementById(`${parentId}`);
//             this.transfer = 27;
//             this.changeToUAH();
//         }

//         changeToUAH() {
//             this.price = this.price*this.transfer;
//         }

//         render() {
//             const element = document.createElement('div');
//             if (this.classes.length === 0) {
//                 this.element = 'menu__item';
//                 element.classList.add(this.element);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }

//             element.innerHTML = `
//                 <img src=${this.img} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.text}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>
//             `;
//             this.parentId.append(element);
//         }
//     }

//     const getResource = async (url) => {
//         const res = await fetch(url);

//         if (!res.ok) {
//             throw new Error(`Could not fetch ${url}, status ${res.status}`);
//         }

//         return await res.json();
//     };

//     getResource('http://localhost:3000/menu')
//         .then(data => {
//             data.forEach(({img, altimg, title, descr, price}) => {
//                 new MenuItem(img, altimg, title, descr, price, 'containerMenu').render();
//             });
//         });
    
//     // axios.get('http://localhost:3000/menu')
//     //     .then(data => {
//     //         data.data.forEach(({img, altimg, title, descr, price}) => {
//     //         new MenuItem(img, altimg, title, descr, price, 'containerMenu').render();});
//     //         });
    
//     //////////////////////////////////////
//     //Form
    
//     const forms = document.querySelectorAll('form');

//     const message = {
//         loading: 'img/form/spinner.svg',
//         success: "Скоро с вами свяжемся",
//         failure: 'Что-то пошло не так...'
//     };

//     forms.forEach(item => {
//         bindPostData(item);
//     });

//     const postData = async (url, data) => {
//         const res = await fetch(url, {
//             method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }, 
//                 body: data
//         });
//         console.log(res);
//         return await res.json();
//     };

//     function bindPostData(form) {
//         form.addEventListener('submit', (event) => {
//             event.preventDefault();
            
//             const statusMessage = document.createElement('img');
//             statusMessage.src = message.loading;
//             statusMessage.style.cssText = `
//                 display: block;
//                 margin: 0 auto;
//             `;
//             form.insertAdjacentElement('afterend', statusMessage);

//             const formData = new FormData(form);

//             const json = JSON.stringify(Object.fromEntries(formData.entries()));

//             postData('http://localhost:3000/requests', json)
//             .then(data => {
//                 console.log(data);
//                 showThanksModal(message.success);
//                 statusMessage.remove();
//             }).catch(() => {
//                 showThanksModal(message.failure);
//             }).finally(() => {
//                 form.reset();
//             });
//         });
//     }


//     function showThanksModal(message) {
//         const prevModalDial = document.querySelector('.modal__dialog');
//         prevModalDial.classList.add('hide');
//         socialAncOpenFun();

//         const thanksModal = document.createElement('div');
//         thanksModal.classList.add('modal__dialog'); 
//         thanksModal.innerHTML = `
//         <div class='modal__content'>
//             <div class='modal__close' data-close>×</div>
//             <div class='modal__title'>${message}</div>
//         </div>
//         `;

//         document.querySelector('.modal').append(thanksModal);
//         setTimeout(() => {
//             thanksModal.remove();
//             prevModalDial.classList.remove('hide');
//             //prevModalDial.classList.add('show');
//             socialAncCloseFun();
//         }, 4000);
//     }

//     //////////////////////////////////////
//     //Slide


//     const slides = document.querySelectorAll('.offer__slide'),
//           slider = document.querySelector('.offer__slider'),
//           prev = document.querySelector('.offer__slider-prev'),
//           next = document.querySelector('.offer__slider-next'),
//           total = document.querySelector('#total'),
//           current = document.querySelector('#current'),
//           slidesWrapper = document.querySelector('.offer__slider-wrapper'),
//           sliderField = document.querySelector('.offer__slider-inner'),
//           width = window.getComputedStyle(slidesWrapper).width;

//     let slideIndex = 1;
//     let offset = 0;

//     if (slides.length < 10) {
//         total.textContent = `0${slides.length}`;
//         current.textContent = `0${slideIndex}`;
//     } else {
//         total.textContent = slides.length;
//         current.textContent = slideIndex;
//     }

//     sliderField.style.width = 100 * slides.length + '%';
//     sliderField.style.display = 'flex';
//     sliderField.style.transition = '0.5s all';

//     slidesWrapper.style.overflow = 'hidden';

//     slides.forEach(slide => {
//         slide.style.width = width;
//     });

//     slider.style.position = 'relative';

//     const indicators = document.createElement('ol'),
//           dots = [];
//     indicators.classList.add('carousel-indicators');
//     slider.append(indicators);

//     for (let i = 0; i < slides.length; i++) {
//         const dot = document.createElement('li');
//         dot.setAttribute('data-slide-to', i + 1);
//         dot.classList.add('dot');
//         indicators.append(dot);
//         if (i == 0) {
//             dot.style.opacity = 1;
//         }
//         dots.push(dot);
//     }

//     indicators.addEventListener('click', (event) => {
//         if (event.target.node === 'LI') {
//             console.log('aaaaaaaaaa');
//         }
//     });

//     next.addEventListener('click', () => {
//         if (offset == noStr(width) * (slides.length - 1)) {
//             offset = 0;
//         } else {
//             offset += noStr(width);
//         }    

//         sliderField.style.transform = `translateX(-${offset}px)`;

//         if (slideIndex == slides.length) {
//             slideIndex = 1;
//         } else {
//             slideIndex++;
//         }

//         slideIndexFun();
//         dotSwap();
//     });

//     prev.addEventListener('click', () => {
//         if (offset == 0) {
//             offset = noStr(width) * (slides.length - 1);
//         } else {
//             offset -= noStr(width);
//         }    
//         sliderField.style.transform = `translateX(-${offset}px)`;

//         if (slideIndex == 1) {
//             slideIndex = slides.length;
//         } else {
//             slideIndex--;
//         }

//         slideIndexFun();
//         dotSwap();
//     });

//     dots.forEach(dot => {
//         dot.addEventListener('click', (e) => {
//             const slideTo =e.target.getAttribute('data-slide-to');

//             slideIndex = slideTo;
//             offset = noStr(width) * (slideTo - 1);

//             sliderField.style.transform = `translateX(-${offset}px)`;

//             slideIndexFun();
//             dotSwap();
//         });
//     });

//     function slideIndexFun() {
//         if (slides.length < 10) {
//             current.textContent = `0${slideIndex}`;
//         } else {
//             current.textContent = slideIndex;
//         }
//     }

//     function dotSwap() {
//         dots.forEach(dot => dot.style.opacity = '.5');
//         dots[slideIndex - 1].style.opacity = 1;
//     }

//     function noStr(str) {
//         return +str.replace(/\D/g, '');
//     }

//     //////////////////////////////////////
//     //Calculator

//     const result = document.querySelector('.calculating__result span');
//     let sex, height, weight, age, ratio;

//     if (localStorage.getItem('sex')) {
//         sex = localStorage.getItem('sex');
//     } else {
//         sex = 'female';
//         localStorage.setItem('sex', 'female');
//     }

//     if (localStorage.getItem('ratio')) {
//         ratio = localStorage.getItem('ratio');
//     } else {
//         ratio = 1.375;
//         localStorage.setItem('ratio', 1.375);
//     }


//     calcTotal();
//     getStaticInformation('#gender div', 'calculating__choose-item_active');
//     getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
//     getDinamicInformation('#height');
//     getDinamicInformation('#weight');
//     getDinamicInformation('#age');
//     initLocalSettings('#gender div', 'calculating__choose-item_active');
//     initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
    



//     function calcTotal() {
//         if (!sex || !height || !weight || !age || !ratio) {
//             result.textContent = '____';
//             return;
//         }

//         if (sex === 'female') {
//             result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
//         } else {
//             result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
//         }
//     }

//     function getStaticInformation(selector, activeClass) {
//         const elements = document.querySelectorAll(selector);

//         elements.forEach(elem => {
//             elem.addEventListener('click', (event) => {
//                 if (event.target.getAttribute('data-ratio')) {
//                     ratio = +event.target.getAttribute('data-ratio');
//                     localStorage.setItem('ratio', +event.target.getAttribute('data-ratio'));
//                 } else {
//                     sex = event.target.getAttribute('id');
//                     localStorage.setItem('sex', event.target.getAttribute('id'));
//                 }
    
//                 elements.forEach(elem => {
//                     elem.classList.remove(activeClass);
//                 });
//                 event.target.classList.add(activeClass);
//                 calcTotal();
//             });
//         });   
//     }

//     function getDinamicInformation(selector) {
//         const input = document.querySelector(selector);

//         input.addEventListener('input', ()=> {
//             if (input.value.match(/\D/g)) {
//                 input.style.border = '1px solid red';
//             } else {
//                 input.style.border = 'none';
//             }

//             switch(input.getAttribute('id')) {
//                 case 'height': 
//                     height = +input.value;
//                     break;
//                 case 'weight':
//                     weight = +input.value;
//                     break;
//                 case 'age':
//                     age = +input.value;
//                     break;
//             }
//             calcTotal();
//         });   
//     }

//     function initLocalSettings(selector, activeClass) {
//         const element = document.querySelectorAll(selector);

//         element.forEach(elem => {
//             elem.classList.remove(activeClass);
//             if (elem.getAttribute('id') === localStorage.getItem('sex')) {
//                 elem.classList.add(activeClass);
//             }
//             if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
//                 elem.classList.add(activeClass);
//             }
//         });
//     }










































