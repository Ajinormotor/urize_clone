import music from "../../public/music-square.svg"
import music_chart from "../../public/music_chart.png"

import personOne from "../../public/person1.svg"
import personTwo from "../../public/person2.svg"

const Create = () => {
  return (
  <section className="w-full bg-[#40048F] h-full py-[2rem]">

    <div className="flex flex-col md:flex-row items-center justify-around">

<div className="flex flex-col-reverse items-center md:gap-[20px]  md:flex-row">



<div className="flex max-w-[362px] w-full h-[500px] ">
        <img src={music} alt="logo" className="w-full h-full" />
    </div>

    <div className="max-w-[306px] text-center md:text-start w-full flex flex-col gap-[25px]">
    <h1  className="text-[40px]  text-white">

    Create Original Soundtracks
</h1>

<p  className="text-[16px] text-white">Synchronize your film with original soundtracks
     and licensed music from your favorite artists with Synch!
</p>

<img src={music_chart} alt="logo" className="w-full h-[50px] hidden md:flex" />



<button className="w-[140px] h-[50px] rounded-[10px] text-black text-[16px] font-[500] uppercase hidden md:flex justify-center items-center
             bg-gradient-to-r from-amber-400 to-fuchsia-600">Coming Soon!</button>

    </div>

</div>


<button className="w-[140px] h-[50px] rounded-[10px] text-black text-[16px] font-[500] uppercase md:hidden flex text-center items-center justify-center
             bg-gradient-to-r from-amber-400 to-fuchsia-600">Coming Soon!</button>



{/* second div */}
<div className="hidden md:flex flex-col mt-[-3rem]">

    
<div className="flex max-w-[172px] w-full h-[150px]">
        <img src={personOne} alt="logo" className="w-full h-full object-cover" />
    </div>

    
<div className="flex max-w-[172px] w-full h-[150px]">
        <img src={personTwo} alt="logo" className="w-full h-full  object-cover" />
    </div>

</div>

    </div>

  </section>
  )
}

export default Create
