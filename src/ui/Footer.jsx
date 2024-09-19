import logo from"../../public/logo.svg"

import facebook from "../../public/facebook.svg"
import instagram from "../../public/instagram.svg"
import twitter from "../../public/twitter.svg"
import linkedin from "../../public/linkedin.svg"


const Footer = () => {
  return (
 <section className="flex justify-between max-h-[437px] h-full w-full py-[5rem] md:px-[2rem]">


<div className=" flex flex-col gap-[15px]">

<div className="flex w-[82px] h-[32px]">
        <img src={logo} alt="logo" className="w-full h-full" />

       
    </div>

    <h1 className="text-[16px] text-[#0a0a0a]">© 2023 Urize. All rights reserved.</h1>

    <ul  className="flex gap-[10px]">
<li>  <img src={facebook} alt="facebook" className="w-[24px] h-[24px]" /></li>

<li> <img src={instagram} alt="instagram" className="w-[24px] h-[24px]" /></li>

<li>  <img src={twitter} alt="twitter" className="w-[24px] h-[24px]" /></li>

<li>   <img src={linkedin} alt="linkdin" className="w-[24px] h-[24px]" /></li>

    </ul>

</div>

<div className="flex flex-col gap-[15px]">
  
<h1 className="text-[16px] text-[#0a0a0a]">info@urize.app</h1>
  
<h1 className="text-[16px] text-[#0a0a0a]">Privacy Policy</h1>
   
<h1 className="text-[16px] text-[#0a0a0a] font-[500]"> Terms of Service</h1>
</div>


 </section>
  )
}

export default Footer
