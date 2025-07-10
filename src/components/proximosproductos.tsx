import React from 'react';
import Calificacion from './calificacion'; // Importar el componente de calificación

export const ProximosProductos = () => {
    return (
        <div className="container mx-auto px-6 py-12 bg-gray-50 min-h-screen">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Most Demanded Products</h1>
            </div>

            {/* Layout similar a la imagen con columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                
                {/* Columna Izquierda - 2 productos */}
                <div className="space-y-6">
                    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" 
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-lg">Premium Sneakers</h2>
                            <div className="mb-2">
                                <Calificacion rating={5} />
                            </div>
                            <p className="text-gray-600 text-sm mb-4">Top-rated athletic shoes with exceptional comfort</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary btn-sm">View Details</button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" 
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-lg">Casual Footwear</h2>
                            <div className="mb-2">
                                <Calificacion rating={4} />
                            </div>
                            <p className="text-gray-600 text-sm mb-4">Comfortable everyday shoes perfect for any occasion</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary btn-sm">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna Central - Producto destacado (2 columnas de ancho) */}
                <div className="lg:col-span-2">
                    <div className="card bg-base-100 shadow-xl h-full">
                        <div className="card-body p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="badge badge-warning">Featured Product</span>
                                <div className="flex space-x-2">
                                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">♥</span>
                                    </div>
                                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">★</span>
                                    </div>
                                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">🛒</span>
                                    </div>
                                </div>
                            </div>
                            
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sport Edition Collection</h2>
                            
                            <div className="mb-4">
                                <Calificacion rating={5} />
                            </div>
                            
                            <figure className="bg-gray-100 rounded-2xl p-6 mb-6">
                                <img 
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" 
                                    alt="Featured Product" 
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            </figure>
                            
                            <p className="text-gray-600 mb-6 text-lg">High-performance athletic shoes designed for active lifestyles. Premium quality with exceptional comfort and durability.</p>
                            
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary btn-lg w-full">
                                    View Featured Collection
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna Derecha - 2 productos */}
                <div className="space-y-6">
                    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" 
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-lg">Classic Shoes</h2>
                            <div className="mb-2">
                                <Calificacion rating={3} />
                            </div>
                            <p className="text-gray-600 text-sm mb-4">Timeless design with reliable quality and comfort</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary btn-sm">View Details</button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" 
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-lg">Urban Style</h2>
                            <div className="mb-2">
                                <Calificacion rating={5} />
                            </div>
                            <p className="text-gray-600 text-sm mb-4">Trendy footwear that combines style with functionality</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary btn-sm">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};