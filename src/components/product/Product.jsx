import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ShopApi from '../../api/ShopApi'

const Product = () => {
    const [products,setproduct] = useState([])
    const gethandleproduct = async () =>{
        setproduct(await ShopApi.getProducts())
    }
    useEffect(() => {
     gethandleproduct()
    }, [])
    
  return (
    <section>
       <div className="container">
           <div className="row">
               {
                   products?.map((product)=>(
                    <div className="col-lg-3" key={product.id}>
                    <Link to = {`/detail/${product.id}`}>
                    <div className="product-list">
                      <img className='img-fluid' style={{height:'250px'}} src={product.image} alt="" />
                      <h1>{product.title}</h1>
                      <p>{product.price}</p>
                     </div>
                    </Link>
                  </div>
                   ))
               }
           </div>
       </div>
    </section>
  )
}

export default Product