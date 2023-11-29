import React, { useEffect, useState } from 'react';

export default function ProductTable() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data from your API here (replace with your actual API endpoint)
        fetch('https://api.example.com/products')
            .then(response => response.json())
            .then(data => setProducts(data.products)) // Assuming the fetched data contains an array of products
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <table>
            {/* Table structure */}
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>${product.price}</td>
                        <td>{product.discountPercentage}%</td>
                        <td>{product.rating}</td>
                        <td>{product.stock}</td>
                        <td>{product.brand}</td>
                        <td>{product.category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
