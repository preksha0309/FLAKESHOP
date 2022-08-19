import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const  ProductComponent = () =>{
  const products = useSelector((state) => state.allProducts.products);
  // const {id,title} = products[0];
  const renderList = products.map((products) => {
    const {id, title, price,image,category} =products;
    return (
      <div className='four wide column' key={id}>
        <Link to = {`/product/${id}`}>
        <div className='ui link cards'>
          <div className='card'>
            <div className='image'>
              <img src={image} alt={title}/>
            </div>
               <div className='content'>
                  <div className='header'>{title}</div>
                  <div className='meta price'>${price}</div>
                  <div className='meta'>{category}</div>
            </div>
          </div>
        </div>
        </Link>
  
  
      </div>
    )
  })

  return(
    <>
    {renderList}
    </>
  )


}
export default ProductComponent;
