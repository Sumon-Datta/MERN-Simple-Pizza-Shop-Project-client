import Swal from "sweetalert2";

const AddPizzas = () => {
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const cheif = form.cheif.value;
        const quality = form.quality.value;
        const details = form.details.value;
        const photourl = form.photourl.value;

        const pizza = {name, quantity, supplier, cheif, quality, details, photourl }

        console.log(pizza)
        fetch('http://localhost:5000/pizzas',{
          method: "POST",
          headers:{
            "content-type": "application/json"
          },
          body: JSON.stringify(pizza)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.insertedId){
            Swal.fire(
              'Good job!',
              'You clicked the button!',
              'success'
            )
          }
        })
    }
  return (
    <div className="p-14 bg-gray-300" >
      <h1 className="text-3xl text-center mb-7 font-bold" >Add Pizzas</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} >
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
              placeholder="Name"
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
              placeholder="Quantity"
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
              placeholder="Supplier"
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
              placeholder="Cheif"
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
              placeholder="Quality"
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
              placeholder="Details"
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
              placeholder="Photo"
              className="input input-bordered w-full"
            />
          </label>
        </div>
      
        {/* Image End */}

        {/* Submit Button */}
        <input type="submit" value="Add Pizza" className="btn btn-block mt-6 bg-slate-950 txt hover:bg-sky-700 text-white " />
        {/* Submit Button */}

      </form>
      {/* form */}
    </div>
  );
};

export default AddPizzas;
