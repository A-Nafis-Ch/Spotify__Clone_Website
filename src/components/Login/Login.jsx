import { SlSocialSpotify } from "react-icons/sl";

// bg-[#121212]

const Login = () => {
  return (
    <div className="bg-[#121212] text-white flex items-center justify-center h-screen w-screen">

      <div className="login-div bg-transparent w-[400px] h-[600px] border border-1 flex flex-col items-center justify-center">

        <div className="login-logo flex justify-center ">

          <SlSocialSpotify className="h-[40px] md:h-[40px] lg:h-[40px] w-[30px] md:w-[30px] lg:w-[30px]" />

        </div>
          <div className="welcome flex justify-center">
            <h1 className="text-xl">Welcome back</h1>
          </div>
          <div className="username flex flex-col gap-2">

            <label>Email or username</label>
            <input type="text" className="h-[50px] w-full border border-2" />

            <button className="bg-[#3BE477] cursor-pointer rounded-full h-[50px]">Continue</button>

            <div className="flex justify-center"><p>or</p></div>

            <div className="socialacc-btns flex flex-col gap-2">

              <button className="bg-transparent border cursor-pointer rounded-full h-[50px]">Continue with Google</button>
              <button className="bg-transparent border cursor-pointer rounded-full h-[50px]">Continue with Facebook</button>
              <button className="bg-transparent border cursor-pointer rounded-full h-[50px]">Continue with Apple</button>

            </div>

            <div className="flex justify-center"><p>Don't have an account?</p></div>

            <div className="signup-btn flex justify-center">
              <button className="cursor-pointer">Sign up</button>
            </div>

            <div className="policy flex text-center">
              <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            </div>



          </div>



        </div>

      </div>



    
  )
}

export default Login
