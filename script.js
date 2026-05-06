document.addEventListener('DOMContentLoaded', () => {
    const toggleInput = document.getElementById('billing-toggle');
    const billingMonthly = document.getElementById('billing-monthly');
    const billingAnnual = document.getElementById('billing-annual');

    const priceElements = {
        starter: document.getElementById('price-starter'),
        business: document.getElementById('price-business'),
        scale: document.getElementById('price-scale')
    };

    const prices = {
        monthly: {
            starter: '15',
            business: '20',
            scale: '40'
        },
        annual: {
            starter: '10',
            business: '16.67',
            scale: '33.34'
        }
    };

    function updatePrices() {
        const isAnnual = toggleInput.checked;

        if (isAnnual) {
            billingMonthly.classList.remove('active');
            billingAnnual.classList.add('active');

            Object.keys(priceElements).forEach(key => {
                animateValue(priceElements[key], prices.annual[key]);
            });
        } else {
            billingAnnual.classList.remove('active');
            billingMonthly.classList.add('active');

            Object.keys(priceElements).forEach(key => {
                animateValue(priceElements[key], prices.monthly[key]);
            });
        }
    }

    function animateValue(element, endValue) {
        element.style.opacity = 0;
        setTimeout(() => {
            element.textContent = endValue;
            element.style.opacity = 1;
        }, 200);
    }

    if (toggleInput) {
        // Init with toggled state if checked by default
        if (toggleInput.checked) {
            billingAnnual.classList.add('active');
            billingMonthly.classList.remove('active');
            Object.keys(priceElements).forEach(key => {
                priceElements[key].textContent = prices.annual[key];
            });
        }
        toggleInput.addEventListener('change', updatePrices);
    }
});
