import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const BrandProducts = () => {

    const [products, setProduct] = useState([]);
    useEffect(()=>{
      fetch('/brand.json')
      .then(res=>res.json())
      .then(data=>setProduct(data))
    },[])
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center w-[85%] mx-auto gap-[100px]">
            <div className="w-[1/3]">
            <h1 className="text-[20px] font-[600]">DISCOVER</h1>
            <p className="text-[40px] font-[700]">Our beautiful Products</p>
            <p className="w-[350px]">Discover our exquisite line of cosmetic products designed to enhance your natural beauty. Our collection features a range of high-quality makeup, skincare, and haircare essentials, meticulously crafted to meet your beauty needs. From vibrant lip shades to nourishing skincare solutions and hair care that shines, our products are your trusted allies in looking and feeling your best. Elevate your daily beauty routine with our cosmetics, and let your inner radiance shine through</p>
            </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[50px] w-[2/3] ">
            {
                products.map(product=><Link to ={`/type/${product.name}`} key={product.id}>
                 <div  className="relative bg-slate-700 rounded-2xl">
                    <img src={product.image} alt="" className="w-[500px] h-[400px] rounded-2xl  mix-blend-overlay " />
                    
                    
                    <div>
                    <h1 className="absolute mt-4 ml-4  text-[white] gap-[100px] text-[30px] font-[600] top-[0px]" >{product.name} </h1>
                    </div>
                </div>
                </Link>)
            }
            </div>
        

        </div>
    );
};

export default BrandProducts;