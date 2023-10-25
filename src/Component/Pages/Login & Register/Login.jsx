/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";


const Login = () => {
  const {login, googleLogin} = useContext(Authcontext)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');
    const [loginFailure, setLoginFailure] = useState('');

    const reset=()=>{
       setName('');
       setEmail("");
       setPassword("");

      

    }

    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    

    const handleLogin = (e) => {
      e.preventDefault();
      const userData = {
        name, email, password
      }
      console.log(userData.name, userData.email, userData.password);
      login( userData.email, userData.password )
      .then(result =>{
        console.log(result.user);
        setLoginSuccess(result.user)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login Success',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(location?.state? location.state:'/')
        reset();
      })
      .catch(err=>{
        console.log(err);
        setLoginFailure(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.message}`,
          
        })
        reset();
      })
    }
   const handleGoogleLogin = ()=>{
     googleLogin()
     .then(result=>{
       navigate('/')
       console.log(result.user);
       Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login Success',
        showConfirmButton: false,
        timer: 1500
      })
    })
     .catch(err=>{
      console.log(err.message);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${err.message}`,
        
      })
    })
    
  }
    return (
        <div className="bg-[url('https://i.ibb.co/qYhXVP1/bg.jpg')] bg-cover object-cover w-full h-screen">
        
        <div className="flex justify-center items-center mx-auto pt-[200px]">
        <div className="relative flex w-[450px] flex-col rounded-xl bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-border text-gray-700 shadow-xl shadow-black/80 bg-opacity-[0.8]">
<div className="relative mx-4  grid h-28 place-items-center overflow-hidden rounded-xl bbg-gradient-to-r from-slate-900 to-slate-700 bg-clip-border text-white ">
<h3 className="block text-[50px] font-[700] text-3xl  leading-snug tracking-normal text-white antialiased uppercase drop-shadow-lg ">
  Sign In
</h3>
</div>
        <form onSubmit ={handleLogin}
         className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto px-[20px] mix-blend-overlay">
<div className="mb-4 flex flex-col gap-6">
  <div className="relative h-11 w-full min-w-[200px]">
    <input
      type="text"
      name='name'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      required
      className=" h-full w-full  rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    //   placeholder="Enter your name here "
    />
    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Name
    </label>
  </div>
  <div className="relative h-11 w-full min-w-[200px]">
    <input
    type="email"
    name='email'
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    // placeholder="Enter your email address"
    required
      className=" h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      
    />
    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Email
    </label>
  </div>
  <div className="relative h-11 w-full min-w-[200px]">
    <input
      type="password"
      name='password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
    //   placeholder="Enter your password"
      required
      className=" h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      
    />
    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Password
    </label>
  </div>
</div>

<input
  name='submit'
  type='submit'
  value='Login'
  className="mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  
  data-ripple-light="true"

/>
<p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
  Don't have an account?
  <Link to='/register'>
  <a
    className="font-medium text-white transition-colors hover:text-blue-700"
    href="#"
  >
    Register
  </a>
  </Link>
</p>

<btn onClick={handleGoogleLogin} className="btn btn-outline btn-success mt-[15px] gap-2 flex items-center mb-4">Also Logged on <img src="https://i.ibb.co/Pr9wM4m/google.png" alt="" className="w-[50px] h-[30px] " /></btn>
</form>

</div>
    </div>
    </div>
    );
};

export default Login;