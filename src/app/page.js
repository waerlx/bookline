import Header from "@/components/layout/Header";
import Link from "next/link";
import Hero from "@/components/layout/Hero"
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Our Story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto  mt-4 flex flex-col gap-4">
        <p >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis numquam cum sequi debitis, culpa neque sunt asperiores? Perferendis voluptas corrupti saepe dignissimos similique cumque optio atque obcaecati, libero, nostrum pariatur.
        </p>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id soluta nulla numquam voluptatum. Molestiae nobis consequuntur neque necessitatibus illum eligendi soluta rem, ratione assumenda ipsam doloremque, magni tempore animi sed!
        </p>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id soluta nulla numquam voluptatum. Molestiae nobis consequuntur neque necessitatibus illum eligendi soluta rem, ratione assumenda ipsam doloremque, magni tempore animi sed!
        </p>
        
        </div>
        
      </section>
      <section className="text-center my-8">
        <SectionHeaders
        subHeader={'Don\'t hesitate '}
        mainHeader={'Contact us'}
        />
        <div className="mt-8 ">
        <a className="text-4xl underline text-ray-500" href="tell:+46735767878">
          +46 735 767 878
          </a>
        </div>
      </section>
      

    </>
  );
}
