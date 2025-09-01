import { useState } from "react";
import { placeOrder } from "../api";

export default function OrderForm() {
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await placeOrder({ item, quantity });
            setStatus(response.status);
            setItem("");
            setQuantity(1);
        } catch (err) {
            console.error(err);
            setStatus("Failed to place order");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Item"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                required
            />
            <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
            />
            <button type="submit">Place Order</button>
            <p>{status}</p>
        </form>
    );
}
