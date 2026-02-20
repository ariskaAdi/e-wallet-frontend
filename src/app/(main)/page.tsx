"use client";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ApiProduct {
  id: number;
  title: string;
  price: number;
}

const API_URL = "https://fakestoreapi.com/products";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const [form, setForm] = useState<Omit<Product, "id">>({
    name: "",
    price: 0,
  });

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      const response = await axios.get<ApiProduct[]>(API_URL);

      const mappedProducts: Product[] = response.data.map((item) => ({
        id: item.id,
        name: item.title,
        price: item.price,
      }));

      setProducts(mappedProducts);
      setFilteredProducts(mappedProducts);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (minPrice) {
      result = result.filter((p) => p.price >= Number(minPrice));
    }

    if (maxPrice) {
      result = result.filter((p) => p.price <= Number(maxPrice));
    }

    setFilteredProducts(result);
  }, [search, minPrice, maxPrice, products]);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleAddProduct = (e: FormEvent): void => {
    e.preventDefault();

    if (!form.name || form.price <= 0) return;

    const newProduct: Product = {
      id: Date.now(),
      name: form.name,
      price: form.price,
    };

    setProducts((prev) => [...prev, newProduct]);
    setForm({ name: "", price: 0 });
  };

  const handleDelete = (id: number): void => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Product Table</h2>

      <form onSubmit={handleAddProduct}>
        <input
          name="name"
          placeholder="Product name"
          value={form.name}
          onChange={handleFormChange}
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleFormChange}
        />
        <button type="submit">Add</button>
      </form>

      <hr />

      <input
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        type="number"
        placeholder="Min price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Max price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      <table border={1} cellPadding={8} style={{ marginTop: 16 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;
