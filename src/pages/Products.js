import React, { useEffect, useState } from "react";
import SingleProduct from "../components/Home/SingleProduct";
import Search from "../components/Search";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  // const { data:reviews} = useQuery('reviews', ()=>fetch('reviews.json').then(res=>res.json()));

  useEffect(()=>{
      fetch("products.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
  },[search])

  if(search.length>0){
    const searchProducts = products.filter((product) => product.name.toLowerCase().includes(search));
    console.log("Search items",searchProducts)

    if(searchProducts) {
        setProducts(searchProducts);
        setSearch('');
    }
  }

  return (
    <div className="my-20">
      <h2 className="text-4xl mb-10 font-semibold text-secondary text-center">
        All Customer Reviews
      </h2>

      <Search setSearch={setSearch} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-2 lg:mx-20">
        {products? products.map((p) => (
          <SingleProduct key={p?._id} product={p} />
        )):
        <p className="text-center text-secondary text-4xl my-20">No product to show</p>
        }
      </div>
    </div>
  );
};

export default Products;
