import React, {useState, useEffect} from 'react';
import "./Products.scss";
import ProductTable from "./ProductTable";
import Ul from "../../images/ul-zdj.jpg";
import Cart from "./Cart"
import data from "./data/data";
import MapProducts from "./MapProducts";
import Header from "./Header/Header-Products.js"

// noinspection JSUnusedAssignment
const Products = () => {
    const {products} = data;
    const [status, setStatus] = useState("low-roof");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        filterHandler();
    });


    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if (exist) {
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x
                )
            );
        } else {
            setCartItems([...cartItems, {...product, qty: 1}])
        }
    }

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x
                )
            );
        }
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }


    const filterHandler = () => {
        switch (status) {
            case "low-roof":
                setFilteredProducts(products.filter(function (products) {
                    return ((products.category === "low"))
                }))
                break;
            case 'high-roof':
                setFilteredProducts(products.filter(function (products) {
                    return (products.category === "high")
                }))
                break;
            case 'elementy':
                setFilteredProducts(products.filter(function (products) {
                    return (products.category === "element")
                }))
                break;
            default:
                setFilteredProducts(products);
                break;

        }
    }


    const [tableVisable, setTableVisable] = useState(false);
    const toggleTableVisable = () => {
        setTableVisable(prevState => !prevState);
    }


    return (
        <>
            <div className="container">
                <main>
                    <Header/>
                    <div className="page-title">
                        <h1>Nasze produkty</h1>
                    </div>
                    <div className="beehive-image">
                        <img alt="" src={Ul}/>
                    </div>
                    <div className="beehive-description">
                        <h2>Ul wielkopolski 10-ramkowy</h2>
                        <h3>Wymiary ula po obrysie korpusu:</h3>
                        <p>44,5 x 44,5 x 95 cm</p>
                        <h3>Wymiary ula po obrysie dennicy:</h3>
                        <p>45 x 50 x 100 cm</p>
                        <h3>Grubość ścianek: 3,5 cm</h3>
                        <h3>Waga ula: 9,5 kg</h3>
                    </div>
                    <div className="specification-beehive">
                        <h4>Specyfikacja produktów</h4>
                        <button onClick={toggleTableVisable}>rozwiń <img alt=""
                                                                         src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk3MC41ODZweCIgaGVpZ2h0PSI5NzAuNTg2cHgiIHZpZXdCb3g9IjAgMCA5NzAuNTg2IDk3MC41ODYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDk3MC41ODYgOTcwLjU4NjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQ0LjE3NywyMjAuMzA3bDM2My45LDI5Ni40YzIyLjEwMSwxOCw0OC45LDI3LDc1LjgsMjdjMjYuOTAxLDAsNTMuNzAxLTksNzUuODAxLTI3bDM2Ni42OTktMjk4LjcNCgkJYzUxLjQtNDEuOSw1OS4xMDEtMTE3LjQsMTcuMi0xNjguOGMtNDEuOC01MS40LTExNy4zOTktNTkuMS0xNjguOC0xNy4zbC0yOTAuOTAxLDIzN2wtMjg4LjEtMjM0LjdjLTUxLjQtNDEuOC0xMjctMzQuMS0xNjguOCwxNy4zDQoJCUMtMTQuOTIzLDEwMi45MDctNy4xMjMsMTc4LjQwNyw0NC4xNzcsMjIwLjMwN3oiLz4NCgk8cGF0aCBkPSJNNDQuMTc3LDY0Mi4yMDdsMzYzLjksMjk2LjM5OWMyMi4xMDEsMTgsNDguOSwyNyw3NS44LDI3YzI2LjkwMSwwLDUzLjcwMS05LDc1LjgwMS0yN2wzNjYuNjk5LTI5OC43DQoJCWM1MS40LTQxLjg5OSw1OS4xMDEtMTE3LjM5OSwxNy4yLTE2OC44Yy00MS44OTktNTEuMzk5LTExNy4zOTktNTkuMS0xNjguOC0xNy4ybC0yOTAuOTAxLDIzNi45bC0yODguMS0yMzQuNg0KCQljLTUxLjQtNDEuOS0xMjctMzQuMTAxLTE2OC44LDE3LjE5OUMtMTQuOTIzLDUyNC44MDctNy4xMjMsNjAwLjQwNiw0NC4xNzcsNjQyLjIwN3oiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
                                                                         className="specification-icon"/></button>
                    </div>
                    <div className="table-beehive">
                        {tableVisable && <ProductTable/>}
                    </div>


                    <div className="select">
                        <p>Wybierz kategorię produktów: </p>
                        <select onChange={statusHandler} name="filtered-list" className="filter-products">

                            <option value="low-roof">Niski daszek</option>
                            <option value="high-roof">Wysoki daszek</option>
                            <option value="elementy">Elementy</option>
                            <option value="all">Wszystkie produkty</option>
                        </select>
                    </div>

                    <MapProducts onAdd={onAdd} products={products} filteredProducts={filteredProducts}/>
                    <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} countCartItems={cartItems.length}/>


                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-price text-center">Dennica higieniczna</h4>
                                <ul className="fa-ul">
                                    <li><strong>Kod: A014</strong></li>
                                    <li>Cena netto: 56 zł
                                    </li>
                                    <li>Cena brutto: 70 zł
                                    </li>
                                </ul>
                                <button
                                    className="btn btn-block btn-primary text-uppercase">Wybierz
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-price text-center">Korpus 1/1</h4>
                                <ul className="fa-ul">
                                    <li><strong>Kod: A015</strong></li>
                                    <li>Cena netto: 52 zł
                                    </li>
                                    <li>Cena brutto: 65 zł
                                    </li>
                                </ul>
                                <button className="btn btn-block btn-primary text-uppercase">Wybierz</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-price text-center">Korpus 1/2</h4>
                                <ul className="fa-ul">
                                    <li><strong>Kod: A016</strong></li>
                                    <li>Cena netto: 40 zł
                                    </li>
                                    <li>Cena brutto: 50 zł
                                    </li>
                                </ul>
                                <button className="btn btn-block btn-primary text-uppercase">Wybierz</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-price text-center">Powałka</h4>
                                <ul className="fa-ul">
                                    <li><strong>Kod: A017</strong></li>
                                    <li>Cena netto: 34 zł
                                    </li>
                                    <li>Cena brutto: 43 zł
                                    </li>
                                </ul>
                                <button className="btn btn-block btn-primary text-uppercase">Wybierz</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-price text-center">Daszek</h4>
                                <ul className="fa-ul">
                                    <li><strong>Kod: A018</strong></li>
                                    <li>Cena netto: 44 zł
                                    </li>
                                    <li>Cena brutto: 55 zł
                                    </li>
                                </ul>
                                <button className="btn btn-block btn-primary text-uppercase">Wybierz</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )

}


export default Products;