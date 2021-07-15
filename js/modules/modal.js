function socialAncCloseFun(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function socialAncOpenFun(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
    
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    //////////////////////////////////////
    //Modal

    const modal = document.querySelector(modalSelector),
          socialAncOpen = document.querySelectorAll(triggerSelector);

    

    socialAncOpen.forEach(function (event) {
        event.addEventListener('click', () => socialAncOpenFun(modalSelector, modalTimerId));
    });

    modal.addEventListener('click', function (event) {
        if (event.target === modal || event.target.getAttribute('data-close') == '') {
            socialAncCloseFun(modalSelector);
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            socialAncCloseFun(modalSelector);
        }
    });

    window.addEventListener('scroll', showModalByScroll);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            socialAncOpenFun(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
}

export default modal;
export {socialAncCloseFun};
export {socialAncOpenFun};
