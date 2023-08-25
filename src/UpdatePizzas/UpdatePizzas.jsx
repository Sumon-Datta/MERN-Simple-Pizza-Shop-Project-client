// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePizzas = () => {

    const pizza = useLoaderData()
    
    const { _id, name, quantity, supplier, cheif, quality, details, photourl } = pizza;
    

    const handleUpdate = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const cheif = form.cheif.value;
        const quality = form.quality.value;
        const details = form.details.value;
        const photourl = form.photourl.value;

        const updatedPizza = {name, quantity, supplier, cheif, quality, details, photourl }

        console.log(updatedPizza)
        fetch(`http://localhost:5000/pizzas/${_id}`,{
          method: "PUT",
          headers:{
            "content-type": "application/json"
          },
          body: JSON.stringify(updatedPizza)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount>0){
            Swal.fire({
                title: 'success!',
                text: 'Coffee updated successfully',
                icon: 'success',
                confirmButtonText: 'OK'
          })
          }
        })
    }

    return (
        <div>
             <div className="p-14 bg-gray-300" >
      <h1 className="text-3xl text-center mb-7 font-bold" >Update Pizza {name}</h1>

      {/* Form */}
      <form onSubmit={handleUpdate} >
        {/* Name & Quantity start */}
        {/* name */}
       <div className="flex w-full gap-14" >
       <div className="form-control  w-1/2">
          <label className="label">
            <span className="label-text text-xl font-bold">Pizza Name</span>
          </label>
          <label className="input-group"> 
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* quantity */}
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-xl font-bold">Quantity</span>
          </label>
          <label className="input-group"> 
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              className="input input-bordered w-full"
            />
          </label>
        </div>
       </div>
        {/* Name & Quantity end */}

        {/* supplier & cheif start */}
        {/* supplier */}
       <div className="flex w-full gap-14" >
       <div className="form-control  w-1/2">
          <label className="label">
            <span className="label-text text-xl font-bold">Supplier</span>
          </label>
          <label className="input-group"> 
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* cheif */}
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-xl font-bold">Cheif</span>
          </label>
          <label className="input-group"> 
            <input
              type="text"
              name="cheif"
              defaultValue={cheif}
              className="input input-bordered w-full"
            />
          </label>
        </div>
       </div>
        {/*supplier & cheif end */}

        {/* Quality & Details start */}
        {/* Quality */}
       <div className="flex w-full gap-14" >
       <div className="form-control  w-1/2">
          <label className="label">
            <span className="label-text text-xl font-bold">Quality</span>
          </label>
          <label className="input-group"> 
            <input
              type="text"
              name="quality"
              defaultValue={quality}
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* Details */}
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-xl font-bold">Details</span>
          </label>
          <label className="input-group"> 
            <input
              type="text"
              name="details"
              defaultValue={details}
              className="input input-bordered w-full"
            />
          </label>
        </div>
       </div>
        {/* Quality & Details end */}

        {/* Image start */}
       
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-xl font-bold">Photo</span>
          </label>
          <label className="input-group"> 
            <input
              type="text"
              name="photourl"
              defaultValue={photourl}
              className="input input-bordered w-full"
            />
          </label>
        </div>
      
        {/* Image End */}

        {/* Submit Button */}
        <input type="submit" value="Update Pizza" className="btn btn-block mt-6 bg-slate-950 txt hover:bg-sky-700 text-white " />
        {/* Submit Button */}

      </form>
      {/* form */}
    </div>
        </div>
    );
};

export default UpdatePizzas;