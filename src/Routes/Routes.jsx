import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddPizzas from "../AddPizzas/AddPizzas";
import UpdatePizzas from "../UpdatePizzas/UpdatePizzas";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      loader: ()=>fetch('http://localhost:5000/pizzas')
    },
    {
      path: "/addpizza",
      element: <AddPizzas></AddPizzas>,
     
    },
    {
      path: "/updatepizza/:id",
      element: <UpdatePizzas></UpdatePizzas>,
      loader: ({params})=>fetch(`http://localhost:5000/pizzas/${params.id}`)
    },
  ]);

  export default router;