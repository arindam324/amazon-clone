import React, {ReactNode, useEffect} from 'react';

type Item = {
    id: string;
    description: string;
    price: number;
    image: string
};

type CartItem = {
    item: Item;
    quantity: number;
};

type ShoppingCart = {
    items: CartItem[];
    addItem: (item: Item) => void;
    removeItem: (itemId: string) => void;
    clearCart: () => void;
};

export const ShoppingCartContext = React.createContext<ShoppingCart>({
    items: [],
    addItem: (item: Item) => {
    },
    removeItem: (itemId: string) => {
    },
    clearCart: () => {
    },
});

export const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({children}) => {

    const [items, setItems] = React.useState<CartItem[]>([]);

    useEffect(() => {
        const storedItems = localStorage.getItem('cartItems');
        const initialItems = storedItems && JSON.parse(storedItems);
        setItems(initialItems)
    }, [])

    const addItem = (item: Item) => {
        // Check if the item is already in the cart
        const existingItemIndex = items.findIndex((cartItem) => cartItem.item.id === item.id);

        if (existingItemIndex !== -1) {
            // Item is already in the cart, increase the quantity
            const updatedItems = [...items];
            updatedItems[existingItemIndex].quantity++;
            setItems(updatedItems);
        } else {
            // Item is not yet in the cart, add it
            setItems([...items, {item, quantity: 1}]);
        }
        localStorage.setItem('cartItems', JSON.stringify(items));

    };

    const removeItem = (itemId: string) => {
        setItems(items.filter((cartItem) => cartItem.item.id !== itemId));
    };

    const clearCart = () => {
        setItems([]);
    };

    const shoppingCart: ShoppingCart = {
        items,
        addItem,
        removeItem,
        clearCart,
    };

    return (
        <ShoppingCartContext.Provider value={shoppingCart}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider
