document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('output-screen');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });

    function handleClick(event) {
        const buttonValue = event.target.dataset.value;
        let currentValue = display.value;

        if (buttonValue === 'AC') {
            display.value = '0';
        } else if (buttonValue === 'DEL') {
            display.value = currentValue.slice(0, -1) || '0';
        } else if (buttonValue === '=') {
            try {
                display.value = eval(currentValue) || '0';
            } catch {
                display.value = 'Error';
            }
        } else {
            if (currentValue === '0' && !isNaN(buttonValue)) {
                display.value = buttonValue;
            } else {
                display.value += buttonValue;
            }
        }
    }
});
