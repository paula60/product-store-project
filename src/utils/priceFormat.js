export function priceFormat (price, fx) {
    switch (fx) {
        case 'EUR':
            return `€${price.toFixed(2)}`;

        case 'USD':
            return `$${price.toFixed(2)}`;

        case 'Points':
            return `${price.toLocaleString()} pts`;

        default:
            return `${price}`;
    }
}
