import { useState } from "react";

//Types
import type { OrderItem, MenuItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  //FUNCIONES
  const addItem = (item: MenuItem) => {
    const itemExists = order.find((orderItem) => orderItem.id === item.id);

    if (itemExists) {
      const newOrder = order.map((orderItem) => {
        if (orderItem.id === item.id) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        }
        return orderItem;
      });
      return setOrder(newOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const deleteItem = (id: MenuItem["id"]) => {
    const newOrder = order.filter((orderItem) => orderItem.id !== id);
    return setOrder(newOrder);
  };

  const GuardarOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    deleteItem,
    GuardarOrder,
  };
}
