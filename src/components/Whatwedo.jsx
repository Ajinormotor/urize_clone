import phootgrapher from "../../public/photographer.svg"

import upload from  "../../public/upload.svg"
import investor from "../../public/investor.svg"

import stars from "../../public/stars (1).svg"
import message from "../../public/message-notif.svg"
import handshake from "../../public/handshake (1).svg"
import recieve from "../../public/receive.svg"
import sideeye from "../../public/sideeye.svg"

const Whatwedo = () => {
  return (

<section className="overflow-x-hidden flex flex-col items-center justify-center py-[2rem]">

    {/* heading */}

    <div className="flex flex-col items-center justify-center max-w-[768px] w-full gap-[15px]">
        <h1 className="text-[#0a0a0a] md:text-[36px] text-[26px]  uppercase font-[700]">What we do</h1>

        <p  className="text-[#0a0a0a] text-center text-[16px]">
        UriZe is a Media Technology Marketplace for Film and TV Rights. We match projects with talents, financing, and distribution. Our aim is to streamline the process of buying, acquiring, selling & investing IP in emerging markets. Creators ( Writers, Producers & Directors) can submit their Web Series, Feature Films, 
        Short Films, Documentaries and Pilots and reach new audiences and new markets!
        </p>
    </div>

    <div className="flex flex-col items-center justify-center py-[3rem]">


    <h1 className="text-[#0a0a0a] md:text-[36px] text-[26px]  uppercase font-[700]">How it works</h1>


    <div className="flex flex-col gap-[45px]">


{/* first div */}
    <div className="flex md:flex-row flex-col  justify-center gap-[25px] p-[20px]">

    <div className="flex max-w-[439px] w-full h-[474px] object-cover">
<img src={phootgrapher}  alt="mission_pics"  className="w-full h-full object-cover rounded-sm"  />
</div>



{/* first div */}
<div className="flex flex-col text-start gap-[10px]  max-w-[434px] w-full">
    <h1 className="text-[36px] text-[#333333]">For creators</h1>

    <p  className="text-[16px] text-[#333333]">   A creator is someone with a vision, idea, or film project. This could be a filmmaker crafting a cinematic masterpiece or an actor/actress looking to showcase their talent. They are seeking the resources, be it funding or talent, to turn their dream project into a reality.
    </p>

    <div className="flex flex-col gap-[10px]">

        <ul className="flex items-center  gap-[30px]">
        <li  className="w-[60px] h-[60px] flex items-center justify-center bg-[#ece6f4]">  <img src={upload}  alt="icon" className="w-[30px] h-[30px]" /></li>
        <li className="text-[16px] text-[#333333]"> Upload your film project</li>
        </ul>

        
        <ul className="flex items-center  gap-[30px]">
        <li  className="w-[60px] h-[60px] flex items-center justify-center bg-[#ece6f4]">  <img src={message}  alt="icon" className="w-[30px] h-[30px]" /></li>
        <li className="text-[16px] text-[#333333]"> Recieve offers</li>
        </ul>

        
        <ul className="flex items-center  gap-[30px]">
        <li  className="w-[60px] h-[60px] flex items-center justify-center bg-[#ece6f4]">  <img src={handshake}  alt="icon" className="w-[30px] h-[30px]" /></li>
        <li className="text-[16px] text-[#333333]"> 
        Negotiatie & Sign Contract</li>
        </ul>

        
        <ul className="flex items-center  gap-[30px]">
        <li  className="w-[60px] h-[60px] flex items-center justify-center bg-[#ece6f4]">  <img src={stars}  alt="icon" className="w-[30px] h-[30px]" /></li>
        <li className="text-[16px] text-[#333333]"> Recieve Funding</li>
        </ul>

        
    </div>
</div>


</div>

{/* second div */}

<div className="flex md:flex-row flex-col  justify-center gap-[25px] p-[20px]">





<div className="flex flex-col text-start gap-[10px]  max-w-[434px] w-full">
    <h1 className="text-[36px] text-[#333333]">For interested party</h1>

    <p  className="text-[16px] text-[#333333]"> An interested party represents studios or investors looking for promising talents or captivating film projects to support, acquire, or invest in. 
        They are eager to discover innovative creators and impactful projects that resonate with audiences and make a mark in the industry.
    </p>

    <div className="flex flex-col gap-[10px]">

        <ul className="flex items-center  gap-[30px]">
        <li  className="w-[60px] h-[60px] flex items-center justify-center bg-[#ece6f4]">  <img src={sideeye}  alt="icon" className="w-[30px] h-[30px]" /></li>
        <li className="text-[16px] text-[#333333]"> 
        Explore film projects</li>
        </ul>

        
        <ul className="flex items-center  gap-[30px]">
        <li  className="w-[60px] h-[60px] flex items-center justify-center bg-[#ece6f4]">  <img src={recieve}  alt="icon" className="w-[30px] h-[30px]" /></li>
        <li className="text-[16px] text-[#333333]"> Make an offer</li>
        </ul>

        
        <ul className="flex items-center  gap-[30px]">
        <li  className="w-[60px] h-[60px] flex items-center justify-center bg-[#ece6f4]">  <img src={upload}  alt="icon" className="w-[30px] h-[30px]" /></li>
        <li className="text-[16px] text-[#333333]"> 
        Negotiatie & Sign Contract</li>
        </ul>

        
        <ul className="flex items-center  gap-[30px]">
        <li  className="w-[60px] h-[60px] flex items-center justify-center bg-[#ece6f4]">  <img src={stars}  alt="icon" className="w-[30px] h-[30px]" /></li>
        <li className="text-[16px] text-[#333333]"> Acquire film project funding</li>
        </ul>

        
    </div>
</div>

<div className="flex max-w-[439px] w-full h-[474px] object-cover">
<img src={investor}  alt="mission_pics"  className="w-full h-full object-cover rounded-sm"  />
</div>


</div>


    </div>



    </div>


</section>
  )
}

export default Whatwedo
