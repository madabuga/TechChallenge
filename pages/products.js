import React from 'react';

import styles from '../styles/Products.module.css';

import { findExistingCategories, findExistingSizes, findExistingBrands } from '../utils/filter.js';
import { PRICES_LIST } from '../constants/filter.js';
import Filter from '../components/Filter';
import ProductsItem from '../components/ProductsItem';


export const getStaticProps = async () => {
    const res = await fetch('https://www.theoutfit.ro/test-react/');
    const data = await res.json();

    return {
        props: { products: data }
    }
}

class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isFilterBtnPressed: false
        }
    }

    openFilters = () => {
        this.state.isFilterBtnPressed ?
            this.setState({ isFilterBtnPressed: false }) :
            this.setState({ isFilterBtnPressed: true })
    }

    render() {
        let availableCategories = findExistingCategories(this.props.products)
        let availablePrices = PRICES_LIST
        let availableSizes = findExistingSizes(this.props.products)
        let availableBrands = findExistingBrands(this.props.products)

        if (!this.props.products) {
            return <div>Loading...</div>
        } else {
            return (
                <div className={styles.products}>
                    <div onClick={this.openFilters} className={styles.filters}>FILTERS</div>
                    {(this.state.isFilterBtnPressed === true) ? <Filter
                        categories={availableCategories}
                        prices={availablePrices}
                        sizes={availableSizes}
                        brands={availableBrands} /> : null}
                    <div className={styles.container}>
                        {
                            this.props.products.map(product => {
                                return <ProductsItem
                                    key={product.productId}
                                    brand={product.brand}
                                    image={product.imageURL}
                                    name={product.name}
                                    warehouseStock={product.warehouseStock}
                                    price={product.price}
                                />
                            })
                        }
                    </div>
                </div>
            )
        }
    }
}

export default Products;