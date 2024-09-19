import logo from"../../public/logo.svg"

const Header = () => {
  return (
<section className="flex justify-between px-[3rem] h-[80px] items-center bg-[#f9f9f9]">

    <div className="flex w-[82px] h-[32px]">
        <img src={logo} alt="logo" className="w-full h-full" />
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
