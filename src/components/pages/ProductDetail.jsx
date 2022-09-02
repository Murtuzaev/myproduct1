import React, { useEffect, useState } from 'react'
import ShopApi from '../../api/ShopApi'
import { useParams } from 'react-router-dom'
const ProductDetail = () => {
  const {id} = useParams()
  const [productDetail, setProductDetail] = useState([])
  
  useEffect(() => { 
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>setProductDetail(json))
  }, [id])

  return (
    <>
          <section>
          <div className="container">
             <div className="row align-items-center">
           <div className="col-lg-4">
             <img className='img-fluid'style={{height:'250px'}} src = {productDetail.image} alt="" />
           </div>
             <div className="col-lg-6">
               <h1>{productDetail.title}</h1>
               <h4>{productDetail.price}</h4>
             </div>
         </div>
       </div>
     </section>
    </>
  )
}

export default ProductDetail