import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
import { useMemo } from "react";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  guardarOrder: () => void;
};

const OrderTotal = ({ order, tip, guardarOrder }: OrderTotalProps) => {
  //Calculo Total
  const orderTotal = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );

  //Calculo Tips
  const orderTips = useMemo(() => orderTotal * tip, [orderTotal, tip]);

  //Calculo Total a Pagar
  const orderTotalToPay = useMemo(
    () => orderTotal + orderTips,
    [orderTotal, orderTips]
  );

  return (
    <div className="space-y-3">
      <h2 className="font-black text-2xl">Totales y Propina</h2>
      <p className="">
        Subtotal a pagar:{" "}
        <span className="font-bold">{formatCurrency(orderTotal)}</span>
      </p>
      <p className="">
        Propina:{" "}
        <span className="font-bold"> {formatCurrency(orderTips)} </span>
      </p>
      <p className="">
        Total a Pagar:{" "}
        <span className="font-bold">{formatCurrency(orderTotalToPay)}</span>
      </p>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-20 disabled:cursor-not-allowed"
        disabled={orderTotalToPay === 0}
        onClick={() => guardarOrder()}
      >
        Guardar Orden
      </button>
    </div>
  );
};

export default OrderTotal;
