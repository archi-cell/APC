// api.js
import axios from "axios";

const BASE_URL = "http://localhost:8083/orders"; // replace with your backend URL

export const placeOrder = async (order) => {
  try {
    const response = await axios.post(BASE_URL, order);
    return response.data;
  } catch (error) {
    console.error("Error placing order:", error);
    return null;
  }
};

export const getPastOrders = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching past orders:", error);
    return [];
  }
};
