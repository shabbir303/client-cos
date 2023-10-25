import { Rating } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Authcontext } from "./AuthProvider/AuthProvider";


 
const Details = () => {
   const {user} = useContext(Authcontext);
   console.log(user);

    const [detail, setDetail] = useState([]);
    const {id} = useParams();
    console.log(id);

    const details = useLoaderData();
    console.log(details);

    useEffect(()=>{
      const findDetails = details.find(eachDetail => eachDetail._id === id);
      console.log(findDetails);
      setDetail(findDetails);
    },[details,id] )
    console.log(detail);

    const handleCart =() =>{
        fetch('http://localhost:5000/cart',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(detail),
    })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data?.acknowledged === true)
            {
                Swal.fire({
                    icon: 'success',
                    title: 'Great',
                    text: 'Product added successfully',
                    
                  })
                        
            }
        })
    } 
    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-center text-[50px] font-[700] mt-[150px]">{detail.type} </h1>
            <div className="flex  items-center  gap-[50px]  mt-[100px] ">
            <img src={detail.image} alt="" className=" w-[50%] h-[400px] rounded-xl shadow-2xl "/>
            <div>
                <h1 className="text-[20px] font-bold text-teal-700">{detail.brand} </h1>
                <h1 className="text-[40px] font-[700] text-black">{detail.name} </h1>
                {/* export function ReadonlyRating() {
  return <Rating value={4} readonly />
} */}           <h1 className="text-black font-[600] text-[20px] mb-[20px]" >Rating: <span className="text-[#808B96]">{detail.rating}</span></h1>
                                     {/* <Rating style={{width:'20px',  } } value ={`${parseInt(detail.rating)}` } readonly /> */}

                    {/* <Rating value={detail.rating} style={{width:'50px',}} /> */}
                <h1 className="text-[16px] text-[#808B96] font-[400] w-[300px] ">{detail.describe} </h1>
                <h1 className="text-[30px] font-[600]">Price: <span className="text-pink-700  ">${detail.price}</span> </h1>
                <Link to={`/cart/${detail._id}`}>
                <img onClick={handleCart} src="https://i.ibb.co/wh05W04/cart-removebg-preview.png" alt="" className="w-[300px]" />
                </Link>
            </div>
            </div>
        </div>
    );
};

export default Details;
 