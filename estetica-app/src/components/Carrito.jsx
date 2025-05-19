import { useCarrito } from "../Context/CarritoContext";

export default function Carrito() {
    const { carrito, limpiarCarrito } = useCarrito();

    const total = carrito.reduce((sum, item) => sum + item.precio, 0);
    const mensaje = carrito
        .map((item) => `- ${item.nombre} ($${item.precio})`)
        .join("%0A");

    const numero = "3815455655"; // Número de WhatsApp
    const url = `https://wa.me/54${numero}?text=Hola! Quiero solicitar los siguientes tratamientos:%0A${mensaje}%0A%0ATotal: $${total}`;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md p-4">
            <h3 className="font-bold text-lg">Carrito</h3>
            {carrito.length === 0 ? (
                <p className="text-gray-500">Aún no seleccionaste ningún tratamiento.</p>
            ) : (
                <>
                    <ul className="mb-2">
                        {carrito.map((item, i) => (
                            <li key={i} className="text-sm">
                                {item.nombre} - ${item.precio}
                            </li>
                        ))}
                    </ul>
                    <p className="font-semibold">Total: ${total}</p>
                    <div className="mt-2 flex gap-2">
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            Finalizar pedido
                        </a>
                        <button
                            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                            onClick={limpiarCarrito}
                        >
                            Vaciar
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
