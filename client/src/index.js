import './style.scss'
const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
    const buttonElems = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector(modal);

    const closeModal = event => {
        const target = event.target;

        if (
            target === modalElem ||
            (btnClose && target.closest(btnClose)) ||
            event.code === 'Escape'
        ) {

            modalElem.style.opacity = 0;

            setTimeout(() => {
                modalElem.style.visibility = 'hidden';
            }, time);

            window.removeEventListener('keydown', closeModal);
        }
    }

    const openModal = () => {
        modalElem.style.display = 'flex';
        modalElem.style.visibility = 'visible';
        modalElem.style.opacity = 1;
        window.addEventListener('keydown', closeModal)
    };

    buttonElems.forEach(el => {
        el.addEventListener('click', openModal);
    });

    modalElem.addEventListener('click', closeModal);
};

modalController({
    modal: '.modal',
    btnOpen: '.sectionButton',
    btnClose: '.modal__close',
});






const btn = document.querySelector('.btn');
const inpUsername = document.querySelector('.Username-inp');
const inpEmail = document.querySelector('.E-mail-inp');
const inpPhone = document.querySelector('.Phone-inp');
const inpMessage = document.querySelector('.Message-inp');

const phoneMask = new IMask(inpPhone, {
    mask: "+{7}(000)000-00-00",
});

function isValidEmail(email) {
    const pattern = /^[a-z0-9_\.-]+@[a-z]+\.[a-z]{2,3}$/;
    return pattern.test(email);
};


btn.addEventListener('click', async () => {
    const objectToSerwer = {
        name: inpUsername.value,
        email: inpEmail.value,
        phone: phoneMask.unmaskedValue,
        message: inpMessage.value,
    };

    if (!inpUsername.value || !inpEmail.value || !inpPhone.value || !inpMessage.value) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    if (!isValidEmail(inpEmail.value)) {
        alert('Email не соответствует');
        return;
    }

    const response = await fetch('http://localhost:9090/api/registration', {
        method: 'POST',
        body: JSON.stringify(objectToSerwer),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    inpUsername.value = '';
    inpEmail.value = '';
    inpPhone.value = '';
    inpMessage.value = '';


    console.log(response.status);
    console.log(await response.json());

});

