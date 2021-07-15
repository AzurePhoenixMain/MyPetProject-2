function slider({container, slide, prevArrow, nextArrow, totalCounter, currentCounter, wrapper, field}) {
    //////////////////////////////////////
    //Slide


    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          slidesWrapper = document.querySelector(wrapper),
          sliderField = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    sliderField.style.width = 100 * slides.length + '%';
    sliderField.style.display = 'flex';
    sliderField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        indicators.append(dot);
        if (i == 0) {
            dot.style.opacity = 1;
        }
        dots.push(dot);
    }

    indicators.addEventListener('click', (event) => {
        if (event.target.node === 'LI') {
            console.log('aaaaaaaaaa');
        }
    });

    next.addEventListener('click', () => {
        if (offset == noStr(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += noStr(width);
        }    

        sliderField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        slideIndexFun();
        dotSwap();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = noStr(width) * (slides.length - 1);
        } else {
            offset -= noStr(width);
        }    
        sliderField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        slideIndexFun();
        dotSwap();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo =e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = noStr(width) * (slideTo - 1);

            sliderField.style.transform = `translateX(-${offset}px)`;

            slideIndexFun();
            dotSwap();
        });
    });

    function slideIndexFun() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function dotSwap() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    function noStr(str) {
        return +str.replace(/\D/g, '');
    }
}

export default slider;