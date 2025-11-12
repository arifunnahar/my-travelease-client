import React from 'react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';

const Home = () => {
    const { products, loading, error } = useProducts();

    if (loading) return <p className="text-center py-10">Loading...</p>;
    if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

    const latestProducts = [...products]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 6);

    return (
        <div>
            <div className="py-5">
                <h1 className="text-3xl font-bold text-center">Latest Vehicles</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 md:p-0 lg:p-0 mb-5">
                {latestProducts.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
