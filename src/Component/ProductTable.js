import React, { useState, useEffect } from 'react';


function ProductTable() {
  const [products, setProducts] = useState([]);

 

  // This useEffect fetches data from the provided URL
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  // Define the table header
  const tableHeader = (
    <thead>
      <tr>
        <th style={{border: '1px solid #000'}}>ID</th>
        <th style={{border: '1px solid #000'}}>Title</th>
        <th style={{border: '1px solid #000'}}>Description</th>
        <th style={{border: '1px solid #000'}}>Price</th>
        <th style={{border: '1px solid #000'}}>Discount Percentage</th>
        <th style={{border: '1px solid #000'}}>Rating</th>
        <th style={{border: '1px solid #000'}}>Stock</th>
        <th style={{border: '1px solid #000'}}>Brand</th>
        <th style={{border: '1px solid #000'}}>Category</th>
        <th style={{border: '1px solid #000'}}>Thumbnail</th>
      </tr>
    </thead>
  );

  // Generate rows from the product data
  const tableRows = products.map((product) => (
    <tr style={{margin:'3px'}} key={product.id}>
      <td style={{border: '1px solid #000'}}>{product.id}</td>
      <td style={{border: '1px solid #000'}}>{product.title}</td>
      <td style={{border: '1px solid #000'}}>{product.description}</td>
      <td style={{border: '1px solid #000'}}>${product.price}</td>
      <td style={{border: '1px solid #000'}}>{product.discountPercentage}%</td>
      <td style={{border: '1px solid #000'}}>{product.rating}</td>
      <td style={{border: '1px solid #000'}}>{product.stock}</td>
      <td style={{border: '1px solid #000'}}>{product.brand}</td>
      <td style={{border: '1px solid #000'}}>{product.category}</td>
      <td>
      <img src={product.thumbnail} alt={product.title} style={{width:'50px',height:'50px'}}/>
    </td>
    </tr>
  ));

  return (
    <div>
      <h1>Product Table</h1>
      <table style={{border: '1px solid #000'}}>
        {tableHeader}
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default ProductTable;
