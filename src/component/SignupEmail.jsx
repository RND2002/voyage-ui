
// const SignupEmail = () => {
//   return (
//     <>
//       <div className="h-[100vh] bg-dirtWhite flex justify-center items-center ">
//         <div className="flex flex-col items-center  border rounded-md bg-white h-[90vh] w-[80vh]">
//           <div className="text-2xl mt-6 md:text-3xl font-poppins font-medium">
//             <h2>Signup with Email </h2>
//           </div>

//           <div className="mt-20 ">
//             <h3 className=" mx-4 font-medium">
//               Enter Your Email address to create a account.
//             </h3>
//           </div>
//           <div className="mt-10 ">
//             <h3 className="font-normal text-xs">Your Email</h3>
//           </div>
//           <div className="mt-10">
//             <input
//               type="email"
//               placeholder="Email"
//               className="border-b border-gray-800 w-full px-3 py-2 focus:outline-none"
//             />
            
//           </div>
//           {/* <div className="mt-1"><FaGoogle size={32}/></div> */}

//           <div className="flex justify-around border border-black bg-black rounded-full h-10 w-[30vh]  mt-10">
//             <button className="text-white">Continue</button>
            
//           </div>
//           {/* <div className="mt-10">
//             <span className="font-medium">No account? </span>
//             <span className="text-green-700 font-semibold">Create one</span>
//           </div> */}
//           {/* <div className="mt-10 mx-auto">
//             <p className="text-xs font-light">
//               Forgot email or trouble signing in? Get help.
//             </p>
//           </div> */}
//           <div className="mt-20 mx-20">
//             <p className="font-normal text-xs">
//             This site is protected by reCAPTCHA Enterprise and the
// Google Privacy Policy and Terms of Service apply.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };


const SignupEmail = () => {
  return (
    <div className="min-h-screen bg-dirtWhite flex justify-center items-center">
      <div className="flex flex-col items-center border rounded-md bg-white w-full h-[80vh] max-w-md p-6">
        <h2 className="text-2xl md:text-3xl font-poppins font-medium mt-6">Signup with Email</h2>

        <div className="mt-10 mx-4">
          <h3 className="font-medium text-center">
            Enter your email address to create an account.
          </h3>
        </div>

        <div className="mt-10">
          <h3 className="font-normal text-xs">Your Email</h3>
          <input
            type="email"
            placeholder="Email"
            className="border-b border-gray-800 w-full px-3 py-2 focus:outline-none"
          />
        </div>

        <div className="flex justify-center mt-10">
          <button className="flex justify-center items-center border border-black bg-black rounded-full h-10 w-full max-w-sm px-4 text-white">
            Continue
          </button>
        </div>

        <div className="mt-20 mx-4">
          <p className="font-normal text-xs text-center">
            This site is protected by reCAPTCHA Enterprise and the Google Privacy Policy and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupEmail;
