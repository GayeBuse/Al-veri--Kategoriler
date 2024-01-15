import CategoryList from './CategoryList';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function SideBar() {
  /* ADIM 1: Bir state tanımlayabilirsin */
  /* ADIM 2: kategorileri buradan alıp CategoryList'e yollayabilirsin: https://fakestoreapi.com/products/categories */
  
  // Make a request for a user with a given ID

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then(function (response) {
        // handle success
        console.log(response);
        setCategories(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <>
      <div className="side-container">
        <h2>Categories</h2>
        <CategoryList categories={categories} />
      </div>
    </>
  );
}
