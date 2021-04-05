

const amountHook = (number) => {
    if (number < 1000) {
        return number;
    } else {
        const rounded = Math.ceil(number/100)*100;
        const final = rounded / 1000;
        return final + 'k';
    }
};

export default amountHook;