import why from "../../public/why1.webp"
import why2 from "../../public/cinematographer.svg"

const Objective = () => {
  return (
<section className="flex flex-col bg-[#40048F] w-full py-[3rem]">


{/* Mission */}
<div className="flex md:flex-row flex-col items-center justify-center gap-[25px] p-[20px]">

    <div className="flex max-w-[483px] w-full h-full max-h-[524px]">
<img src={why}  alt="mission_pics"  className="w-full h-full"  />
    </div>


    <div className="flex flex-col text-center md:text-start  max-w-[434px] w-full">
        <h1 className="md:text-[36px] text-[24px] text-white">Our Mission</h1>

        <p  className="text-[16px] text-white">Our mission is to contribute to the Diversity, Equity, and Inclusion (DE&I) of TV and Film. We aim to support creators in reaching a global audience and assist buyers who are interested in supporting the Black arts and cultural influence movement. Our goal is to help them save time and cost by expanding 
            their catalog and acquiring Intellectual Property (IP).</p>
    </div>

</div>

{/* Vission */}

<div className="flex md:flex-row flex-col items-center justify-center gap-[35px] p-[20px]">


<div className="flex flex-col max-w-[482px] w-full gap-[30px] text-center md:text-start">
<h1 className="md:text-[36px] text-[24px] text-white"> Why Nollywood?</h1>

<p  className="text-[16px] text-white"> Africa to the World. Improving cultural relativism by enabling and empowering powerful stories.
“For the first time, thanks to Noll</p>

<p  className="text-[16px] text-white">“For the first time, thanks to Nollywood, Africans could now watch movies produced by their own people on a vast scale. Since they focused on shared customs, practices, and cultures all over the continent, 
    the movies helped dispel much of the mistrust and suspicion among people”.</p>

    <h1 className="text-[16px] text-white"> - Nashville Film Institute</h1>

    </div>

    <div className="flex max-w-[434px] w-full h-full max-h-[524px]">
<img src={why2}  alt="mission_pics"  className="w-full h-full"  />
    </div>


 

</div>



</section>
  )
}

export default Objective
