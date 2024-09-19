import { useState } from "react"
import logo from"../../public/logo.svg"

const Header = () => {


    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
  return (
<section className="flex justify-between px-[3rem] h-[80px] items-center bg-[#f9f9f9]">

    <div className="flex w-[82px] h-[32px]">
        <img src={logo} alt="logo" className="w-full h-full" />
    </div>

    <div className="flex">
        <div onClick={handleToggle} className=" cursor-pointer transition-all ">
            
            {toggle ?  

            
<i className="ri-close-line text-[25px] font-[700]"></i>
:

<i className="ri-menu-2-line text-[25px] font-[700]"></i>





}
        </div>
    </div>


{/* mobile menu */}
    <div className={`w-[200px] flex flex-col h-[130px] shadow-lg absolute top-[70px] right-[20px] bg-[white] items-start justify-start px-[1.8rem]
          ${toggle? "flex flex-col"  : "hidden"  }`}>
    <button className=" py-[0.5rem] text-[16px]">View Projects</button>
            <button className=" py-[0.5rem] text-[16px]">Sign Up</button>
            <button className="w-[129px] h-[40px] rounded-[10px] text-white uppercase
             bg-gradient-to-r from-amber-400 to-fuchsia-600">Login</button>
        </div>


        <div className="lg:flex hidden items-center justify-center">
            <button className="px-[2rem] py-[0.5rem] text-[16px]">Sign Up</button>
            <button className="w-[129px] h-[40px] rounded-[10px] text-white
             bg-gradient-to-r from-amber-400 to-fuchsia-600">Login</button>
        </div>
 
</section>
  )
}

export default Header
