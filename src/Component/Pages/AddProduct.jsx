import { useState } from "react";
import Swal from "sweetalert2";


const AddProduct = () => {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [describe, setDescribe] = useState("");
    const [rating, setRating] = useState('');

    const reset = () => {
        setImage("");
        setName("");
        setBrand("");
        setType("");
        setPrice("");
        setDescribe("");
        setRating("");
    };

    const handleUser = (e) => {
        e.preventDefault();
        const product = {
            image,
            name,
            brand,
            type,
            price,
            describe,
            rating
        }
        
        fetch('http://localhost:5000/beauties',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(product),
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
              reset();            
            }
        })
    }
    return (

        <div className=" h-screen bg-[url('https://i.ibb.co/RCnhxKR/441192-gorod-plitka-1680x1050-www-Gde-Fon-com-jpg.jpg')] bg-cover object-cover w-full  ">
            <div className="pt-[170px] flex w-[90%] justify-center items-center mx-auto gap-[50px] ">
                <img src="https://i.ibb.co/yFwBb7m/text.png" alt="" className="" />
                <form onSubmit={handleUser}
                    className="bg-[#2d8dba] bg-opacity-30  rounded-2xl shadow-2xl shadow-cyan/80  w-[800px] flex flex-col justify-center items-center mx-auto py-[50px]  ">
                    <div className="w-[500px] flex flex-col gap-[30px]">
                        <div className=" h-10 w-full min-w-[200px] flex justify-center items-center gap-[10px]">
                            <label className="text-[#0f8c73] font-[600]">
                                IMAGE
                            </label>
                            <input
                                name='image'
                                type='text'
                                required
                                className=" h-full w-[800px] rounded-[7px] border   px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 transition-all  "
                                placeholder="image_url"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                        <div className=" h-10 w-full min-w-[200px] flex justify-center items-center gap-[10px]">
                            <label className="text-[#0f8c73] font-[600]">
                                NAME
                            </label>
                            <input
                                type='text'
                                name='name'
                                required
                                className=" h-full w-[800px] rounded-[7px] border   px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 transition-all  "
                                placeholder="enter your name here"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className=" h-10 w-full min-w-[200px] flex justify-center items-center gap-[10px]">
                            <label className="uppercase text-[#0f8c73] font-[600]">
                                Brand
                            </label>
                            <input
                                type='text'
                                name='brand'
                                required
                                className=" h-full w-[800px] rounded-[7px] border   px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 transition-all  "
                                placeholder="enter brand name here "
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                        </div>
                        <div className=" h-10 w-full min-w-[200px] flex justify-center items-center gap-[10px]">
                            <label className="uppercase text-[#0f8c73] font-[600]">
                                Type
                            </label>
                            <input
                                type='text'
                                name='type'
                                className=" h-full w-full rounded-[7px] border   px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 transition-all  "
                                placeholder="please enter your product type "
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            />
                        </div>
                        <div className=" h-10 w-full min-w-[200px] flex justify-center items-center gap-[10px]">
                            <label className="uppercase text-[#0f8c73] font-[600]">
                                Price
                            </label>
                            <input
                                type='text'
                                name='price'
                                className=" h-full w-full rounded-[7px] border   px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 transition-all  "
                                placeholder="enter your sufficient amount"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className=" h-20 w-full min-w-[200px] flex justify-center items-center gap-[10px]">
                            <label className="uppercase text-[#0f8c73] font-[600]">
                                Short description
                            </label>
                            <input
                                type='text'
                                name='describe'
                                required
                                className=" h-full w-full rounded-[7px] border   px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 transition-all  "
                                placeholder="enter short description about your product"
                                value={describe}
                                onChange={(e) => setDescribe(e.target.value)}
                            />
                        </div>
                        <div className=" h-10 w-full min-w-[200px] flex justify-center items-center gap-[10px]">
                            <label className="uppercase text-[#0f8c73] font-[600]">
                                Rating
                            </label>
                            <input
                                type='number'
                                name='rating'
                                required
                                className=" h-full w-full rounded-[7px] border   px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 transition-all  "
                                placeholder="rating here"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                            />
                        </div>
                        <div className=" h-10 w-full min-w-[200px] flex justify-center items-center gap-[10px]">

                            <input
                                type='submit'


                                className=" h-full w-full rounded-[7px]    px-3 py-2.5 font-sans text-sm  text-blue-gray-700 transition-all bg-[#b02085] shadow-xl shadow-[#b02085]/50 text-white font-[600] "
                                value="ADD YOUR PRODUCT HERE"
                            />
                        </div>

                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;