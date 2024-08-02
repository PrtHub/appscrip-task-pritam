export const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: '1px solid #ddd',
      borderRadius: '4px',
      boxShadow: 'none',
      "&:hover": {
        borderColor: "#262626",
      },
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
      backgroundColor: state.isSelected ? '#252020' : (state.isFocused ? '#999999' : 'white'),
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