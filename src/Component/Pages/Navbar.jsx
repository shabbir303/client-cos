import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import { useContext } from "react";
import { Authcontext } from "./AuthProvider/AuthProvider";


const Navbar = () => {
  const {user, UserSignOut} = useContext(Authcontext);

  const handleLogOut =()=>{
     
    UserSignOut()
    .then(console.log('signOut successfully'))
    .catch(error=>console.log(error))
  } 

    const navLinks = <>
    <li className="text-[20px] font-[600] " ><NavLink to ='/'
      style={({ isActive,  }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive? "#0BDCB0" : "",
          background: isActive? "none": '',
        };
      }}
    > Home</NavLink></li>
    <li className="text-[20px] font-[600] "><NavLink to='/addProduct' 
      style={({ isActive,  }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive? "#0BDCB0" : "",
          background: isActive? "none": '',
        };
      }}
    >Add-Product</NavLink></li>
    <li className="text-[20px] font-[600] "><NavLink to='/details'
      style={({ isActive,  }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive? "#0BDCB0" : "",
          background: isActive? "none": '',
        };
      }}
    >Details</NavLink></li>

    <li className="text-[20px] font-[600] "><NavLink to='/sports'
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive? "#0BDCB0" : "",
          background: isActive? "none": '',
        };
      }}
    >Sports Blog</NavLink></li>
    
  </>

    return (
        <div className="">
            <div className="navbar px-[120px] bg-gradient-to-r from-[#1C0BB2] to-pink-500 text-white   fixed top-0 opacity-70 z-10">
              
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img src={logo} alt="" className="h-[100px] bg-[#2dba31] bg-opacity-[0.3] rounded-md" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                    {
                      user? <>
                          <div className="flex flex-col lg:flex-col items-center justify-center gap-[0] lg:gap-[5px]">
      <h1>{user.displayName}</h1>
      <img  src={user.photoURL} alt="" className="w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] rounded-full " />
      </div>
       <button onClick={handleLogOut} className="text-[10px] font-[500] bg-gradient-to-r from-slate-900 to-slate-700 py-[4px] rounded-md shadow-xl shadow-green-500/50 px-[10px]">Logout</button>
                      </>
                      : <Link to='/login'>
                <div className="navbar-end w-full ">
                    <img className="  h-[70px] w-[70px]    " src="https://i.ibb.co/LNKvG4S/login-removebg-preview.png" alt="" />
                </div>
                </Link>
                    }

                <Link to='/cart'>
                    <div>
                      <img src="https://i.ibb.co/TcXn67J/cart-removebg-preview-1.png" alt="" className="h-[70px] w-[70px] ml-[20px]"/>
                    </div>
                </Link>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;