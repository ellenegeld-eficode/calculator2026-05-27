// @vitest-environment jsdom

const { calculateExpression } = require('../calculator-logic');
const { initCalculator } = require('../calculator');

function clickButton(doc, label) {
    const button = Array.from(doc.querySelectorAll('.button')).find(
        (item) => item.textContent === label
    );

    if (!button) {
        throw new Error(`Button with label "${label}" not found`);
    }

    button.click();
}

describe('calculator DOM interactions', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div class="calculator">
                <input type="text" class="display" disabled>
                <div class="buttons">
                    <button class="button">1</button>
                    <button class="button">2</button>
                    <button class="button">3</button>
                    <button class="button">+</button>
                    <button class="button">/</button>
                    <button class="button">0</button>
                    <button class="button">=</button>
                    <button class="button">C</button>
                </div>
            </div>
        `;

        window.calculateExpression = calculateExpression;
        initCalculator(document);
    });

    it('updates display from button clicks and calculates result', () => {
        clickButton(document, '1');
        clickButton(document, '+');
        clickButton(document, '2');
        clickButton(document, '=');

        expect(document.querySelector('.display').value).toBe('3');
    });

    it('clears display when C is clicked', () => {
        clickButton(document, '1');
        clickButton(document, '2');
        clickButton(document, 'C');

        expect(document.querySelector('.display').value).toBe('');
    });

    it('shows Error when expression is invalid', () => {
        clickButton(document, '1');
        clickButton(document, '/');
        clickButton(document, '=');

        expect(document.querySelector('.display').value).toBe('Error');
    });
});