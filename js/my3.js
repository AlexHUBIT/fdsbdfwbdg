var selector = document.getElementById("tel");
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

new JustValidate('.contacts__form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 20
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        }
    }
});
const defaultSelect = () => {
    const element = document.querySelector('.js-choice');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
        position: false,
    });


};

defaultSelect();