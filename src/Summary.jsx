import React from 'react';

export default function Summary({ choices }) {
    const { sauce, crust, toppings, cheese } = choices;
    const none = 'None';
    return (
        <div>
            <h1>Your Order</h1>
            <ul>
                <li>Crust: {crust ? crust : none}</li>
                <li>Sauce: {sauce ? crust : none}</li>
                <li>Cheese: {cheese ? crust : none}</li>
                <li>
                    Toppings:
                    {[...toppings].length > 0 ? (
                        <ul>
                            {[...toppings].map((topping) => (
                                <li key={topping}>{topping}</li>
                            ))}
                        </ul>
                    ) : (
                        'None'
                    )}
                </li>
            </ul>
        </div>
    );
}
