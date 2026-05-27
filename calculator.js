function fallbackCalculateExpression(expression) {
    if (typeof expression !== 'string' || expression.trim() === '') {
        return 'Error';
    }

    try {
        const result = eval(expression);
        return result === undefined ? 'Error' : String(result);
    } catch (error) {
        return 'Error';
    }
}

function getCalculateExpression() {
    if (typeof window !== 'undefined' && typeof window.calculateExpression === 'function') {
        return window.calculateExpression;
    }

    if (typeof require === 'function') {
        try {
            const logic = require('./calculator-logic');
            if (logic && typeof logic.calculateExpression === 'function') {
                return logic.calculateExpression;
            }
        } catch (error) {
            // Ignore resolution errors and use the fallback.
        }
    }

    return fallbackCalculateExpression;
}

function initCalculator(doc = document) {
    const display = doc.querySelector('.display');
    const buttons = doc.querySelectorAll('.button');

    if (!display || !buttons.length) {
        return;
    }

    const calculateExpression = getCalculateExpression();

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === '=') {
                display.value = calculateExpression(display.value);
            } else if (value === 'C') {
                display.value = '';
            } else {
                display.value += value;
            }
        });
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initCalculator };
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.initCalculator = initCalculator;
    initCalculator(document);
}
