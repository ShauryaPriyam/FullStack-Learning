import React, { useState } from 'react'
import { useProductStore } from '../store/products'
import { toast, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  })
  const navigate = useNavigate();
  const { createProduct } = useProductStore()
  const handleAddButton = async () => {
    const { success, message } = await createProduct(newProduct)
    if (success) {
      toast.success('Product created Succesfully!', {
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
      navigate("/")
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
    <div className='create-box h-[85vh] w-full bg-[#293F46]'>
      <h1 className='h1 text-white text-5xl'>Create Products</h1>
      <div className='info mt-10 w-[60%] h-[60%] bg-[#122930] rounded-lg'>
        <input
          type="text"
          name='name'
          placeholder='Name of Product'
          className='text w-[80%] h-[50px] bg-zinc-700 outline-none '
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          name='price'
          placeholder='Price of Product'
          className='text w-[80%] h-[50px] bg-zinc-700 outline-none '
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          name='image'
          placeholder='Image URL'
          className='text w-[80%] h-[50px] bg-zinc-700 outline-none '
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <button onClick={handleAddButton} className="create-btn bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300">
          Create Product
        </button>

      </div>
    </div>
  )
}

export default CreatePage
