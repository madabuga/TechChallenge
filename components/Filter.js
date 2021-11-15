import styles from '../styles/Filter.module.css';


const Filter = (props) => {
    const { categories, prices, sizes, brands } = props;
    const FILTERS = [
        {
            name: "Categorie",
            items: categories,
            type: "category"
        },
        {
            name: "Pret",
            items: prices,
            type: "price"
        },
        {
            name: "Marimi",
            items: sizes,
            type: "size"
        },
        {
            name: "Brand",
            items: brands,
            type: "brand"
        }
    ];
    return (
        <div className={styles.filterContainer}>
            {
                FILTERS.map(filter => {
                    return (
                        <div key={filter.name} className={styles.filterItem}>
                            <div className={styles.title}>{filter.name}:</div>
                            {
                                filter.items.map((item, idx) => {
                                    return (
                                        <div className={styles.item} key={idx}>
                                            <input type="checkbox" name={filter.type} />
                                            <label htmlFor={filter.type}>{item}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Filter;