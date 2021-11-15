
export const findExistingCategories = (products) => {
    let categories = []
    products.forEach(item => {
        let checkCategory = false
        for (let i = 0; i < categories.length; i++) {
            if (item.category === categories[i]) {
                checkCategory = true
            }
        }
        if (!checkCategory) {
            categories.push(item.category)
        }
    })
    return categories
}

export const findExistingBrands = (products) => {
    let brands = []
    products.forEach(item => {
        let checkBrand = false
        for (let i = 0; i < brands.length; i++) {
            if (item.brand === brands[i]) {
                checkBrand = true
            }
        }
        if (!checkBrand) {
            brands.push(item.brand)
        }
    })
    return brands
}

export const findExistingSizes = (products) => {
    let sizes = []
    products.forEach(item => {
        let checkSize = false
        for (let i = 0; i < item.warehouseStock.length; i++) {
            for (let j = 0; j < sizes.length; j++) {
                if (item.warehouseStock[i].size === sizes[j]) {
                    checkSize = true
                }
            }
            if (!checkSize) {
                sizes.push(item.warehouseStock[i].size)
            }
        }
    })
    return sizes
}