import React from 'react';

export default function Summary({ choices }) {
    const { sauce, crust, toppings } = choices;
    return (
        <div>
            <h1>Your Order</h1>
            <ul>
                <li>Crust: {crust}</li>
                <li>Sauce: {sauce}</li>
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
