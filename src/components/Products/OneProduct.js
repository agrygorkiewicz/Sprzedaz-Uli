import React from 'react';

export default function OneProduct(props) {
    const {product, onAdd} = props;
    return (
        <div className="pricing-table row-fluid text-center">
            <div className="span4">
                <div className="plan">
                    <div className="plan-name">
                        <h2>Kod: {product.id}</h2>
                        <h3>{product.name}</h3>
                    </div>
                    <div className="plan-price">
                        <h4><span>Cena: </span> netto: {product.price}zł </h4>
                    </div>
                    <div className="plan-action">
                        <button onClick={() => onAdd(product)}>
                            Wybierz</button>
                    </div>

                </div>
            </div>
        </div>
    )
}