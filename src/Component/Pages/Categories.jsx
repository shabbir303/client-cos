/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./Swiper.css";
import Swal from "sweetalert2";





const Categories = () => {

  const notAvailable = <>
     <Link to ='/'>
      <button className=" flex justify-center items-center mx-auto  h-full"><img src="https://i.ibb.co/z6wtySZ/back-to-home.png"  /> </button>
     </Link>
  </>

  const [category, setCategory] = useState([]);


  const { brand } = useParams();
  console.log(brand)

  const categories = useLoaderData();
  console.log(categories);
  useEffect(() => {
    const findCategory = categories.filter(brandName => brandName.brand === brand);
    console.log(findCategory);
    setCategory(findCategory);

    if(findCategory.length> 0){
     return setCategory(findCategory);
    }
    else{
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Products are not available',
      })
      
      return ;
    }
  }
    , [brand, categories])
  console.log(category);
  
  return (
    <>
      <div className="mt-[140px]">
        <h1 className="text-center text-5xl font-semibold"><span className="text-pink-800">{brand}'s</span> Product </h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {

            category.map(category => (
              <SwiperSlide key={category._id} className="w-full h-[400px]">
                <img src={category.image} alt="category image" className="h-full w-full" />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-2 mb-[40px]">

        {
          category.map(category =>
            <div key={category._id} className="relative flex w-full max-w-[40rem]   flex-row rounded-xl  bg-clip-border text-gray-700 shadow-xl border-2   mt-[100px] ml-[100px]">
              <div className="relative z-0  bg-black/40 backdrop-brightness-75 w-2/5  m-0  overflow-hidden text-gray-700   rounded-r-none shrink-0 rounded-xl bg-clip-border">
                <img
                  src={category.image}
                  alt="image"
                  className="absolute z-10 object-cover mix-blend-overlay w-full h-full "
                />
              </div>
              <div className="p-6">
                <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                  {category.brand}
                </h6>

                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {category.type}
                </h4>
                <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                  {category.describe}
                </p>
                <div className="flex gap-4">
                  <Link to={`/details/${category._id}`}>
                  <button className="  btn btn-outline btn-info" ><img src="https://i.ibb.co/1L5yx4h/details-removebg-preview.png" alt="" className="w-[80px] h-[20px]" /></button>
                  </Link>
                  <Link to={`update/${category._id}`}>
                  <button className="btn btn-outline  btn-success"><img src="https://i.ibb.co/QfLqNkx/update.png" alt="" 
                   className="w-[80px] h-[20px]"/> </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        }
      </div>
       {
         category? <div className="w-[300px] h-[100px] flex justify-center items-center mx-auto  ">
         {notAvailable}
         </div>: <div className="w-full h-full">
       {notAvailable}
       </div>
       }
    </>
  );
};

export default Categories;