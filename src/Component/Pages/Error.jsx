import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/6ZVP5cC/404.png')] bg-cover object-cover w-full h-screen pt-[200px]">
            <Link to='/'>
            <button className="flex justify-center items-center mx-auto px-[20px] py-[10px] bg-gradient-to-r from-blue-800 to-indigo-900 rounded-3xl " ><img className="w-[180px]" src="https://i.ibb.co/hYtfywq/back-home-removebg-preview.png" alt="" /> </button>
            </Link>
        </div>
    );
};

export default Error;