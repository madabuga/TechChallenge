import styles from '../styles/Products.module.css';


const ProductsItem = (props) => {
    const { brand, image, name, warehouseStock, price } = props;
    return (
        <div className={styles.containerProduct}>
            <div className={styles.brandName}>{brand}</div>
            <img className={styles.image} src={image} alt={name} />
            <div className={styles.infoProduct}>
                <div className={styles.name}>{name}</div>
                <div>
                    {warehouseStock.map((el, idx) => <span className={styles.size} key={el + idx + el.quantity}>{el.size}</span>)}
                </div>
                <div className={styles.price}>{price} lei</div>
            </div>
        </div>
    )
}


export default ProductsItem;