
import Calificacion from './calificacion'; // Importar el componente de calificación

export const ProductCards = () => {
    return (
        <div className="container mx-auto px-6 py-12 bg-gray-50 min-h-screen">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Peces más adquiridos a nivel global</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
                {/* Goldfish */}
                <div className="card bg-base-100 w-80 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <figure>
                        <img
                            src="https://i.pinimg.com/1200x/b2/b1/91/b2b1911062cd5286c4b45308fff1ee3c.jpg"
                            alt="Goldfish"
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Goldfish</h2>
                        <div className="mb-2">
                            <Calificacion rating={5} />
                        </div>
                        <p className="text-gray-600 mb-4">
                            Uno de los peces ornamentales más populares del mundo. Fácil de cuidar y con una gran variedad de colores y formas.
                        </p>
                    </div>
                </div>

                {/* Guppy */}
                <div className="card bg-base-100 w-80 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <figure>
                        <img
                            src="https://i.pinimg.com/736x/50/d1/84/50d18418fe4bf350e5539f0784831312.jpg"
                            alt="Guppy"
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Guppy</h2>
                        <div className="mb-2">
                            <Calificacion rating={5} />
                        </div>
                        <p className="text-gray-600 mb-4">
                            Pez pequeño y colorido, muy resistente, ideal para principiantes. Se reproduce con facilidad y tiene diversas variedades.
                        </p>
                    </div>
                </div>

                {/* Neon Tetra */}
                <div className="card bg-base-100 w-80 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <figure>
                        <img
                            src="https://i.pinimg.com/736x/f3/b1/1d/f3b11da1d0b13ecf72d8897c01d59c41.jpg"
                            alt="Neon Tetra"
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Neon Tetra</h2>
                        <div className="mb-2">
                            <Calificacion rating={4} />
                        </div>
                        <p className="text-gray-600 mb-4">
                            Pez pacífico y sociable, conocido por su color azul neón brillante y su tamaño pequeño, ideal para acuarios comunitarios.
                        </p>
                    </div>
                </div>

                {/* Betta */}
                <div className="card bg-base-100 w-80 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <figure>
                        <img
                            src="https://i.pinimg.com/736x/d3/51/0b/d3510bf50be651390e36549c60fb8456.jpg"
                            alt="Betta"
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Betta</h2>
                        <div className="mb-2">
                            <Calificacion rating={5} />
                        </div>
                        <p className="text-gray-600 mb-4">
                            Conocido como pez luchador de Siam, es muy colorido y popular, pero requiere cuidados específicos y no debe convivir con otros machos.
                        </p>
                    </div>
                </div>

                {/* Molly */}
                <div className="card bg-base-100 w-80 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <figure>
                        <img
                            src="https://i.pinimg.com/1200x/19/d2/f5/19d2f5e702f353dc055a365bf4970f81.jpg"
                            alt="Molly"
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Molly</h2>
                        <div className="mb-2">
                            <Calificacion rating={4} />
                        </div>
                        <p className="text-gray-600 mb-4">
                            Pez muy adaptable y activo, ideal para acuarios comunitarios, con varias especies y colores disponibles.
                        </p>
                    </div>
                </div>

                {/* Corydoras */}
                <div className="card bg-base-100 w-80 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <figure>
                        <img
                            src="https://i.pinimg.com/1200x/f2/63/04/f26304bc50f195c598d2a81e1861a1d5.jpg"
                            alt="Corydoras"
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Corydoras</h2>
                        <div className="mb-2">
                            <Calificacion rating={5} />
                        </div>
                        <p className="text-gray-600 mb-4">
                            Pez de fondo tranquilo, ayuda a limpiar el sustrato y es muy sociable, perfecto para acuarios comunitarios.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
