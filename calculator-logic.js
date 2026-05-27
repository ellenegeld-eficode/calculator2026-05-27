function calculateExpression(expression) {
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

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateExpression };
}

if (typeof window !== 'undefined') {
    window.calculateExpression = calculateExpression;
}