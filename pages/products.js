import React from 'react';

import styles from '../styles/Products.module.css';
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

        }
    }

    render() {
        if (!this.props.products) {
            return <div>Loading...</div>
        } else {
            return (
                <div className={styles.products}>
                    <div className={styles.filters}>FILTERS</div>
                    <div className={styles.container}>
                        {
                            this.props.products.map(el => {
                                return <ProductsItem
                                    key={el.productId}
                                    brand={el.brand}
                                    image={el.imageURL}
                                    name={el.name}
                                    warehouseStock={el.warehouseStock}
                                    price={el.price}
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