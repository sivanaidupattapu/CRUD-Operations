import React, { useState } from "react";
import { useGetAllProductsQuery, useLazyGetAllProductsQuery } from "../../services/productsApi";
function Product() {
    // let { isLoading,data } = useGetAllProductsQuery();
    // console.log('isloading ::', isLoading)
    // console.log('data ::', data)
    let [isLoading, setIsLoading] = useState(true);
    let [data, setData] = useState({});
    let [getAllProducts] = useLazyGetAllProductsQuery();
    // useLazyGetAllProductsQuery gives an arrray []
    function getProducts() {
        getAllProducts().then((res) => {
            setIsLoading(false)
            setData(res.data)
        })
    }
    return <div className="border border-2 border-warning m-1 p-2">
        <h2 className="text-center text-danger">Products Component</h2>
        <button className="btn btn-dark m-1" onClick={() => { getProducts() }}>Load our Products</button>
        {isLoading &&
            <button class="btn btn-danger m-1" type="button" disabled>
                <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span role="status">Loading...</span>
            </button>
        }
        <ul>
            {isLoading === false && (
                data?.map(p => { return <li>Title : {p.title}</li> })
            )}
        </ul>
    </div>
}
export default Product