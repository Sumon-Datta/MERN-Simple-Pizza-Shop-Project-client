import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PizzaCard = ({ pizza, setPizzas, pizzas }) => {
  const { _id, name, quantity, supplier, cheif, quality, photourl } = pizza;

  const handleDelete = (_id) => {
    console.log("delete id",_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/pizzas/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              const remaining = pizzas.filter(pizz => pizz._id !== _id )
              setPizzas(remaining)
            }
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div className="">
      {/* Card */}
      <div className="card card-side bg-base-100 shadow-xl gap-4 p-3">
        <figure className="w-full">
          <img className="h-[300px] w-[300px]" src={photourl} alt="Movie" />
        </figure>
        <div className=" flex justify-between w-full mt-7">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
            <p>Cheif: {cheif}</p>
            <p>Qwality: {quality}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical pr-4 space-y-4">
              <button className="btn bg-blue-600">View</button>
              <Link to={`updatepizza/${_id}`} >
              <button className="btn bg-green-600">Edit</button>
              </Link>
              <button
                className="btn bg-yellow-500"
                onClick={() => handleDelete(_id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
