"use client";

import "./products.css";
import axios from "axios";
import Select from 'react-select';
import { Filter } from "lucide-react";
import { useEffect, useState } from "react";
import { stagger, useAnimate } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { Product } from "@/types";
import { RootState } from "@/store/store";
import { customStyles, sortOptions } from "@/lib/utils";
import ProductCard from "@/components/product-card/ProductCard";
import LoadingSeketon from "@/components/skeleton/LoadingSeketon";
import FilterOptions from "@/components/filter-options/FilterOptions";
import { setProducts, setFilteredProducts, setLoading } from "@/store/productsSlice";

interface SortOption {
  value: string;
  label: string;
}

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const { filteredProducts, loading } = useSelector((state: RootState) => state.products);

  const [open, setOpen] = useState<Boolean>(false);
  const [scope, animate] = useAnimate();
  const [sortOption, setSortOption] = useState<SortOption | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<SortOption | null>({ value: "", label: "All" });
  const [ratingFilter, setRatingFilter] = useState<SortOption | null>({ value: "", label: "All" });
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
        const data = response.data;
        dispatch(setProducts(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchProducts();
  }, [dispatch]);

  const handleSortChange = (selectedOption: SortOption | null) => {
    setSortOption(selectedOption);
  };

  const handleCategoryChange = (selectedOption: SortOption | null) => {
    setCategoryFilter(selectedOption || { value: "", label: "All" });
  };

  const handleRatingChange = (selectedOption: SortOption | null) => {
    setRatingFilter(selectedOption || { value: "", label: "All" });
  };

  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const applyFiltersAndSort = () => {
    let filtered = [...products];

    if (categoryFilter?.value && categoryFilter.value !== "") {
      filtered = filtered.filter(product => product.category === categoryFilter.value);
    }

    if (ratingFilter?.value && ratingFilter.value !== "") {
      filtered = filtered.filter(product => product.rating.rate >= Number(ratingFilter.value));
    }

    filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);

    if (sortOption) {
      switch (sortOption.value) {
        case 'price-low-high':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high-low':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          filtered.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
          break;
        case 'popular':
          filtered.sort((a, b) => b.rating.rate - a.rating.rate);
          break;
        default:
          break;
      }
    }

    dispatch(setFilteredProducts(filtered));
  };

  useEffect(() => {
    applyFiltersAndSort();
  }, [categoryFilter, ratingFilter, sortOption, minPrice, maxPrice, products, dispatch]);

  const staggerList = stagger(0.1, { startDelay: 0.25 });

  useEffect(() => {
    if (open) {
      animate(
        "#filter",
        {
          width: 170,
          height: 680,
          opacity: 1,
        },
        {
          type: "spring",
          bounce: 0,
          duration: 0.5,
        }
      );
    } else {
      animate(
        "#filter",
        {
          width: 0,
          height: 0,
          opacity: 0,
        },
        {
          type: "spring",
          bounce: 0,
          duration: 0.5,
        }
      );
    }
  }, [animate, open]);
  

  return (
    <main ref={scope} className="products">
      <section className="products__filter-section">
        <span className="products__filter" onClick={() => setOpen(!open)}>
          <Filter size={20}/> <h3>{!open ? "Show Filter" : "Hide Filter"}</h3>
        </span>
        <div id="filter" className="filer_options"
        style={{
          display: open ? 'block' : 'none',
        }}
        >
          <FilterOptions
            categoryFilter={categoryFilter}
            ratingFilter={ratingFilter}
            minPrice={minPrice}
            maxPrice={maxPrice}
            onCategoryChange={handleCategoryChange}
            onRatingChange={handleRatingChange}
            onPriceChange={handlePriceChange}
          />
        </div>
        <Select
          options={sortOptions}
          onChange={handleSortChange}
          placeholder="Sort by"
          className="sort-select"
          styles={customStyles}
        />
      </section>
      <section className="all_products">
        {loading ? (
         <div className="loading">
         {Array.from({ length: 16 }).map((_, index) => (
           <LoadingSeketon key={index} />
         ))}
       </div>
        ) : (
          filteredProducts.map((product: Product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
              category={product.category}
              rating={product.rating}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default ProductsPage;
