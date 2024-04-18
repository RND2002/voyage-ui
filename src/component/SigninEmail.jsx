import { MdKeyboardArrowLeft } from "react-icons/md";
const SigninEmail = () => {
  return (
    <>
      <div className="h-[100vh] bg-dirtWhite flex justify-center items-center ">
        <div className="flex flex-col items-center  border rounded-md bg-white h-[90vh] w-[80vh]">
          <div className="text-2xl mt-6 md:text-3xl font-poppins font-medium">
            <h2>Sign in with Email </h2>
          </div>

          <div className="mx-4 mt-20 md:mx-20 ">
            <h3 className="font-medium">
            Enter the email address associated with your account, and we’ll send a magic link to your inbox.
            </h3>
          </div>
          <div className="mt-10 ">
            <h3 className="font-normal text-xs">Your Email</h3>
          </div>
          <div className="mt-10">
            <input
              type="email"
              placeholder="Email"
              className="border-b border-gray-800 w-full px-3 py-2 focus:outline-none"
            />
            
          </div>
          {/* <div className="mt-1"><FaGoogle size={32}/></div> */}

          <div className="flex justify-around border border-black bg-black rounded-full h-10 w-[30vh]  mt-10">
            <button className="text-white">Continue</button>
            
          </div>
          {/* <div className="mt-10">
            <span className="font-medium">No account? </span>
            <span className="text-green-700 font-semibold">Create one</span>
          </div> */}
          <div className="mt-10 mx-auto flex flex-row">
          <div><MdKeyboardArrowLeft/></div>
            <div>
            <p className="text-xs text-green-800 font-medium">
              All Signin Options.
            </p>
            </div>
           
          </div>
          {/* <div className="mt-20 mx-20">
            <p className="font-normal text-xs">
            This site is protected by reCAPTCHA Enterprise and the
Google Privacy Policy and Terms of Service apply.
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SigninEmail;
