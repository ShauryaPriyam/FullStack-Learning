import { create } from "zustand";

const LOCAL_URL = "http://localhost:5000";
const REMOTE_URL = "https://fullstack-learning.onrender.com";

const getBaseUrl = () => (window.location.hostname === "localhost" ? LOCAL_URL : REMOTE_URL);

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (newProducts) => set({ products: newProducts }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill all fields" };
    }
    const res = await fetch(`${getBaseUrl()}/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Product created successfully" };
  },
  fetchProducts: async () => {
    const res = await fetch(`${getBaseUrl()}/api/products`);
    const data = await res.json();
    set({ products: data.data });
  },
  deleteProduct: async (id) => {
    const res = await fetch(`${getBaseUrl()}/api/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) {
      return { success: false, message: data.message };
    }
    // update ui immediately without refresh
    set((state) => ({
      products: state.products.filter((product) => product._id !== id),
    }));
    return { success: true, message: "Product deleted successfully" };
  },
}));
