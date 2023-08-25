
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PizzaCard from "./PizzaCard/PizzaCard";

const App = () => {

  const loadData = useLoaderData()
  const [pizzas, setPizzas] = useState(loadData)

  return (
    <div>
      <h1 className="text-3xl text-center text-blue-900 mt-4">Pizzas</h1>
     <h1 className="text-2xl text-center text-blue-900" >{pizzas.length}</h1> 
     <div className="grid grid-cols-2 gap-4 p-4" >
     {
      pizzas.map(pizza => <PizzaCard
      key={pizza._id}
      pizza = {pizza}
      pizzas = {pizzas}
      setPizzas = {setPizzas}
      ></PizzaCard> )
     }
     </div>
    </div>
  );
};

export default App;
