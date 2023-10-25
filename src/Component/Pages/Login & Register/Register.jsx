/* eslint-disable no-unused-vars */
import { useContext, useState, } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";


const Register = () => {
  const { createUser } = useContext(Authcontext)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [regSuccess, setRegSuccess] = useState('');
  const [showPassword, setShowPassword] = useState('');

  const reset =()=>{
      setName("");
      setEmail("");
      setPassword("");
      setEmail("");
  }

  const location = useLocation();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      name, email, image, password
    }
    console.log(userData.name, userData.email, userData.image, userData.password);

    if(!/[A-Z]/.test(userData.password)){
      setRegisterError('Password must contain at least one uppercase letter');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Password must contain at least one uppercase letter`,
      })
      return;
    }
    else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(userData.password)){
    
      setRegisterError('Password must contain at least one special character');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Password must contain at least one special character`,
      })
      return;
    }
    createUser( userData.email, userData.password)
      .then(result => {
        console.log(result.user);
        setRegSuccess(result.user)
        toast.success("Registrations success")
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registration Success',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(location?.state? location.state:'/login');
        reset();

        updateProfile(result.user,{
          displayName: `${userData.name}`,
          photoURL: `${userData.image}`
       })
       .then(()=>console.log('profile updated'))
       .catch(err=>console.log(err.message));
      })

     

      .catch(err => {
        console.log(err);
        setRegisterError(err.message)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.message}`,
          
        })
        reset();
      })
  }

  return (
    <div className="">
      <div className=" bg-[url('https://i.ibb.co/g44hDxK/blur.jpg')] w-full h-screen bg-cover object-cover">

        <div className="flex justify-center items-center mx-auto pt-[200px]  ">

          <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <h4 className="block font-sans text-2xl  leading-snug tracking-normal text-blue-gray-900 antialiased uppercase text-[50px] font-[700]">
              register
            </h4>
            <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Enter your details to register.
            </p>
            <form onSubmit={handleRegister}
              className="mt-8 mb-2 w-[350px] lg:w-[500px] rounded-2xl border-[1px] px-[20px] lg:px-[50px] py-[30px] bg-white bg-opacity-10  shadow-2xl shadow-cyan-500/50 ">
              <div className="mb-4 flex flex-col gap-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    name='name'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className=" h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Name
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="text"
                    name='image'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}

                    className=" h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Photo_URL
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    name='email'
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email
                  </label>
                </div>

                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type={  !showPassword? "password": 'text' }
                    placeholder
                    name='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                  />

                 
        <span onClick= {()=>setShowPassword(!showPassword) }>
        <span onClick={()=>setShowPassword(!showPassword) } ><div className="w-[20px] h-[20px] absolute top-[10px] right-[8px] ">
        {showPassword?
         <img src="https://i.ibb.co/mSBJ5sv/eye-removebg-preview-1.png" alt=""  />: <img src="https://i.ibb.co/chcNZm1/766077.png" alt="" />
        }

                    </div></span>
                  </span>
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Password
                  </label>
                </div>
              </div>
              <input
                name='submit'
                type='submit'
                value='Register'
                className="mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

                data-ripple-light="true"

              />
              <p className="mt-4 block text-center text-[20px] font-sans text-base font-normal leading-relaxed text-cyan-700 antialiased">
                Already have an account?
                <Link to='/login'>
                  <a
                    className="font-medium text-pink-500 transition-colors hover:text-blue-700"
                    href="#"
                  >
                    Sign In
                  </a>
                </Link>
              </p>

              <btn className="btn btn-outline btn-secondary mt-[15px] gap-2 flex items-center">Also Register on <img src="https://i.ibb.co/Pr9wM4m/google.png" alt="" className="w-[50px] h-[30px]" /></btn>
            </form>
            {

            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;