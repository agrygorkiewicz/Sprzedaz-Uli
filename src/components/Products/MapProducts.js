import React from 'react';
import "./Products.scss";
import OneProduct from "./OneProduct";

const MapProducts = (props) => {
    const {onAdd, filteredProducts} = props;
    return (

        <div className="pricing-table row-fluid text-center small-roof">
            <div className="low-roof">
                {filteredProducts.map((products) => (
                    <OneProduct key={products.id} product={products} onAdd={onAdd}> </OneProduct>
                ))}

            </div>
        </div>
            )
            }

            export default MapProducts;