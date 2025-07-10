import React from 'react';
import Calificacion from './calificacion'; // Importar el componente de calificación

export const ProductCards = () => {
    return (
        <div className="container mx-auto px-6 py-12 bg-gray-50 min-h-screen">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Most Demanded Products</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
                <div className="card bg-base-100 w-80 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" 
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Premium Sneakers</h2>
                        <div className="mb-2">
                            <Calificacion rating={5} />
                        </div>
                        <p className="text-gray-600 mb-4">Top-rated athletic shoes with exceptional comfort and style</p>
                        <div className="card-actions justify-end mt-4">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-80 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" 
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Casual Footwear</h2>
                        <div className="mb-2">
                            <Calificacion rating={4} />
                        </div>
                        <p className="text-gray-600 mb-4">Comfortable everyday shoes perfect for any occasion</p>
                        <div className="card-actions justify-end mt-4">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>

                                <div className="card bg-base-100 w-80 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" 
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Casual Footwear</h2>
                        <div className="mb-2">
                            <Calificacion rating={4} />
                        </div>
                        <p className="text-gray-600 mb-4">Comfortable everyday shoes perfect for any occasion</p>
                        <div className="card-actions justify-end mt-4">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>


                <div className="card bg-base-100 w-80 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" 
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Classic Shoes</h2>
                        <div className="mb-2">
                            <Calificacion rating={3} />
                        </div>
                        <p className="text-gray-600 mb-4">Timeless design with reliable quality and comfort</p>
                        <div className="card-actions justify-end mt-4">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-80 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" 
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Sport Edition</h2>
                        <div className="mb-2">
                            <Calificacion rating={4} />
                        </div>
                        <p className="text-gray-600 mb-4">High-performance athletic shoes for active lifestyles</p>
                        <div className="card-actions justify-end mt-4">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-80 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" 
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Urban Style</h2>
                        <div className="mb-2">
                            <Calificacion rating={5} />
                        </div>
                        <p className="text-gray-600 mb-4">Trendy footwear that combines style with functionality</p>
                        <div className="card-actions justify-end mt-4">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};