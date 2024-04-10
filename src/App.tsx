//Importar bd
import { menuItems } from "./data/db";

//Componentes
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import TipPorcentajeForm from "./components/TipPorcentajeForm";

//Hooks
import useOrder from "./hooks/useOrder";

function App() {
  //Utilizar Hooks
  const { order, tip, setTip, addItem, deleteItem, GuardarOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid  md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="mt-10 space-y-2">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents order={order} deleteItem={deleteItem} />
              <TipPorcentajeForm setTip={setTip} tip={tip} />
              <OrderTotal order={order} tip={tip} guardarOrder={GuardarOrder} />
            </>
          ) : (
            <span className="text-gray-500">No hay productos en el pedido</span>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
