function CartItem({ item, onIncrease, onDecrease, onRemove }) {
    return (
        <div className="flex items-center gap-4 border-b border-gray-200 py-4">
            <img
                src={`/src/assets/${item.imageUrl}`}
                alt={item.name}
                className="w-20 h-24 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                <strong className="block mt-1 text-gray-900">R$ {item.price.toFixed(2)}</strong>
            </div>
            <div className="flex items-center gap-3 border border-gray-300 rounded-full px-3 py-1">
                <button
                    onClick={() => onDecrease(item.id)}
                    className="text-gray-600 hover:text-gray-900 font-medium w-5"
                >
                    -
                </button>
                <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                <button
                    onClick={() => onIncrease(item.id)}
                    className="text-gray-600 hover:text-gray-900 font-medium w-5"
                >
                    +
                </button>
            </div>
            <div className="text-right w-24">
                <p className="font-semibold text-gray-900">
                    R$ {(item.price * item.quantity).toFixed(2)}
                </p>
            </div>
            <button
                onClick={() => onRemove(item.id)}
                className="text-sm text-red-500 hover:text-red-700 hover:underline"
            >
                Remover
            </button>
        </div>
    );
}

export default CartItem;