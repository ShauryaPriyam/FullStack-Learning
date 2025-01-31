import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/products'
import { MdDelete } from "react-icons/md";
import { toast, Bounce } from 'react-toastify';


const HomePage = () => {
  const { fetchProducts, products,deleteProduct } = useProductStore();
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])
  const handleDelete =async(id)=>{
     const {success,message}= await deleteProduct(id)
     if (success) {
      toast.success('Product deleted Succesfully!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
    }
    else {
      toast.error(message || 'An error occurred', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce, // Applying Bounce transition
      });
  }
  }
  return (
    <div className='home-box h-[85vh] w-full bg-[#293F46]'>
      <h1 className='text-3xl'>Create Products</h1>
      {products.length==0 ? (
        <>
        <span>Nothing to Show :- </span> 
        <Link to="/create" className='text-blue-500'>Create a Product</Link>
        </>) : (
        <div className='product-list'>
          {products.map((product) => (
            <div key={product._id} className='product-item'>
              <img src={product.image} alt={product.name}className='img' />
              <h2 className='text-yellow-600'>{product.name}</h2>
              <p className='text-green-600'>Price: ${product.price}</p>
               <p className='text-red-500' onClick={()=>handleDelete(product._id)}><MdDelete size={20}/> </p>
            </div>
          ))}
        </div>
        ) 
       }



    </div>
  )
}

export default HomePage
