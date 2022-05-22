import React from 'react';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const products = [
    { _id:1, name: 'engine', desc:'a engine ldwhb djbd sbcjshjs sndjsbjdbsjd  djsbdjsbdj ddjsbjesjfs sjfhsbfbf sjbfjsjf', price: 500, minQuantity: 150, available: 12000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7CAE65XFjF6_Cyk6Wtw_zea4VJcsSpqzoSGzuwecTNXmxAEct1Ccc2J1Px7r4ehk9jM&usqp=CAU'},
    { _id:2, name: 'engine', desc:'a engine ldwhb djbd sbcjshjs sndjsbjdbsjd  djsbdjsbdj ddjsbjesjfs sjfhsbfbf sjbfjsjf', price: 500, minQuantity: 150, available: 12000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7CAE65XFjF6_Cyk6Wtw_zea4VJcsSpqzoSGzuwecTNXmxAEct1Ccc2J1Px7r4ehk9jM&usqp=CAU'},
    { _id:3, name: 'engine', desc:'a engine ldwhb djbd sbcjshjs sndjsbjdbsjd  djsbdjsbdj ddjsbjesjfs sjfhsbfbf sjbfjsjf', price: 500, minQuantity: 150, available: 12000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7CAE65XFjF6_Cyk6Wtw_zea4VJcsSpqzoSGzuwecTNXmxAEct1Ccc2J1Px7r4ehk9jM&usqp=CAU'},
    { _id:4, name: 'engine', desc:'a engine ldwhb djbd sbcjshjs sndjsbjdbsjd  djsbdjsbdj ddjsbjesjfs sjfhsbfbf sjbfjsjf', price: 500, minQuantity: 150, available: 12000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7CAE65XFjF6_Cyk6Wtw_zea4VJcsSpqzoSGzuwecTNXmxAEct1Ccc2J1Px7r4ehk9jM&usqp=CAU'},
    { _id:4, name: 'engine', desc:'a engine ldwhb djbd sbcjshjs sndjsbjdbsjd  djsbdjsbdj ddjsbjesjfs sjfhsbfbf sjbfjsjf', price: 500, minQuantity: 150, available: 12000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7CAE65XFjF6_Cyk6Wtw_zea4VJcsSpqzoSGzuwecTNXmxAEct1Ccc2J1Px7r4ehk9jM&usqp=CAU'},
    { _id:4, name: 'engine', desc:'a engine ldwhb djbd sbcjshjs sndjsbjdbsjd  djsbdjsbdj ddjsbjesjfs sjfhsbfbf sjbfjsjf', price: 500, minQuantity: 150, available: 12000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7CAE65XFjF6_Cyk6Wtw_zea4VJcsSpqzoSGzuwecTNXmxAEct1Ccc2J1Px7r4ehk9jM&usqp=CAU'},
]

const Parts = () => {
    return (
        <div className='bg-white py-0 lg:py-20'>
            <h2 className='text-4xl font-bold text-center'>Parts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mx-6 lg:mx-20'>
            {
                products.map(p=><SingleProduct key={p._id} product={p}/>)
            }
            </div>
            <div className=''>
            <Link to='/reviews' className='block w-20 ml-auto pb-10 lg:pb-0 lg:mr-20 mt-10 text-lg font-bold'>See All</Link>
            </div>
        </div>
    );
};

export default Parts;