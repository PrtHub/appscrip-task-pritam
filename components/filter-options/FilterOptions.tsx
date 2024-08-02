"use client";

import React, { useState } from "react";
import Select from "react-select";
import "./filterOptions.css";
import { customStyles } from "@/lib/utils";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterOptionsProps {
  categoryFilter: FilterOption | null;
  ratingFilter: FilterOption | null;
  minPrice: number;
  maxPrice: number;
  onCategoryChange: (selectedOption: FilterOption | null) => void;
  onRatingChange: (selectedOption: FilterOption | null) => void;
  onPriceChange: (minPrice: number, maxPrice: number) => void;
}

const categoryOptions: FilterOption[] = [
  { value: "", label: "All" },
  { value: "men's clothing", label: "Men's Clothing" },
  { value: "women's clothing", label: "Women's Clothing" },
  { value: "electronics", label: "Electronics" },
  { value: "jewelery", label: "Jewelery" }
];

const ratingOptions: FilterOption[] = [
  { value: "", label: "All" },
  { value: "4", label: "4 stars & up" },
  { value: "3", label: "3 stars & up" },
  { value: "2", label: "2 stars & up" },
  { value: "1", label: "1 star & up" },
];

const FilterOptions: React.FC<FilterOptionsProps> = ({
  categoryFilter,
  ratingFilter,
  minPrice,
  maxPrice,
  onCategoryChange,
  onRatingChange,
  onPriceChange
}) => {
  const [localMinPrice, setLocalMinPrice] = useState(minPrice);
  const [localMaxPrice, setLocalMaxPrice] = useState(maxPrice);

  const handlePriceChange = () => {
    onPriceChange(localMinPrice, localMaxPrice);
  };

  return (
    <div className="filter-options">
     
      <div className="filter-group">
        <label>Category:</label>
        <Select
          options={categoryOptions}
          value={categoryFilter}
          onChange={onCategoryChange}
          isClearable
          classNamePrefix="react-select"
          styles={customStyles}
        />
      </div>
      <div className="filter-group">
        <label>Rating:</label>
        <Select
          options={ratingOptions}
          value={ratingFilter}
          onChange={onRatingChange}
          isClearable
          classNamePrefix="react-select"
          styles={customStyles}
        />
      </div>
      <div className="filter-group">
        <label>Price (USD):</label>
        <div className="price-filter">
          <input
            type="number"
            value={localMinPrice}
            onChange={(e) => setLocalMinPrice(Number(e.target.value))}
            placeholder="Min Price"
          />
          <input
            type="number"
            value={localMaxPrice}
            onChange={(e) => setLocalMaxPrice(Number(e.target.value))}
            placeholder="Max Price"
          />
          <button onClick={handlePriceChange} className="apply-button">Apply Price Filter</button>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
