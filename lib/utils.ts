export const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: '1px solid #ddd',
      borderRadius: '4px',
      boxShadow: 'none',
    }),
    menu: (provided: any) => ({
      ...provided,
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginTop: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      padding: '8px 12px',
      backgroundColor: state.isSelected ? '#007bff' : (state.isFocused ? '#f1f1f1' : 'white'),
      color: state.isSelected ? 'white' : 'black',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#333',
    }),
  };


  export const sortOptions = [
    { value: 'price-low-high', label: 'Price: Low to High' },
    { value: 'price-high-low', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' },
    { value: 'popular', label: 'Popular' },
  ];


 export  const categoryOptions = [
    { value: "", label: "All" },
    { value: "men's clothing", label: "Men's Clothing" },
    { value: "women's clothing", label: "Women's Clothing" },
    { value: "jewelery", label: "Jewelery" },
    { value: "electronics", label: "Electronics" },
  ];

 export const ratingOptions = [
  { value: "4", label: "4 stars & up" },
  { value: "3", label: "3 stars & up" },
  { value: "2", label: "2 stars & up" },
  { value: "1", label: "3 stars & up" },
  ];

  export const priceOptions = [
    { value: [0, 50], label: "$0 to $50" },
    { value: [50, 100], label: "$50 to $100" },
    { value: [100, 200], label: "$100 to $200" },
    { value: [200, 500], label: "$200 to $500" },
    { value: [500, 1000], label: "$500 to $1000" },
  ];