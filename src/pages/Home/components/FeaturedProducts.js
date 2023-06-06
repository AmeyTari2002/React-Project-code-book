import { useEffect, useState } from "react";
import { ProductCard } from "../../../components";

export const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    //useeffect for reload and async function to fetch the feature ds
    //response to take respone from server
    //data store the response from server
    //with useEffect we call the Api to fetch product we get the information
    //set the product
    useEffect(() => {
        async function fetchproducts() {
            const response = await fetch("http://localhost:8000/featured_products");
            const data = await response.json()
            setProducts(data);
        }
        fetchproducts();
    }, [])

    //map to acces the information
    return (
        <section className="my-20">
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
            <div className="flex flex-wrap justify-center lg:flex-row">

                {/* created a loop */}
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </div>
        </section>
    )
}