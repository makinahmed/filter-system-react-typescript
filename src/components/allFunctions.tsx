import { Products } from "../features/api/apiSlice"


interface categoriesOptions {
    category: string[],
    range: number,

}


export const filterSystem = (data: Products[], categories: categoriesOptions) => {
    const { category, range } = categories

    let newProducts:Products[] = data

    if (category.length) {
        let products = newProducts?.filter((item: any) => category.includes(item.category))
        newProducts = [...products];
    }
    if (range > 0) {
        let results = newProducts?.filter((product: Products) => product.price <= range)
        newProducts = [...results];
    }
    return newProducts;
}