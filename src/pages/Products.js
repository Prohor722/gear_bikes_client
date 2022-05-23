import { data } from 'autoprefixer';
import React, { useState } from 'react';
import SingleProduct from '../components/Home/SingleProduct';
import Search from '../components/Search';

const Products = () => {
    const [products , setProducts] = useState([]);
    // const { data:reviews} = useQuery('reviews', ()=>fetch('reviews.json').then(res=>res.json()));
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))

    const onSearch = (event) =>{
        const search = event.target.search.value;
        console.log(search);
        const searchProducts = products.filter(p=>p.name.includes(search));
        // if(searchProducts){
        //     setProducts(searchProducts);
        // }
    }
    return (
        <div className='my-20'>
            <h2 className='text-4xl mb-10 font-semibold text-secondary text-center'>All Customer Reviews</h2>

            <div>
                <Search onSearch={onSearch}/>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mx-2 lg:mx-20'>
            {
                products.map(p=><SingleProduct key={p._id} product={p}/>)
            }
            </div>
        </div>
    )
};

export default Products;