import Image from "next/image";
import MenuItem from "./menu/MenuItems";
import SectionHeaders from "./SectionHeaders";
export default function HomeMenu() {
    return (
        <section className="mt-8">
            {/* <div className= "absolute left-0 right-0 justify-start ">
                <div className=" absolute left-0 -top-[70px] text-left -z-10 ">
                    <Image src={'/sallad1.png'} width={109} height={189} alt={'sallad'}></Image>
                </div>
                <div className="h-48  absolute -top-[100px] right-0 -z-10">
                    <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'}></Image>
                </div>
            </div> */}


            <div className="text-center mb-4">
                {/* <div className="text-center"></div> */}
                <SectionHeaders subHeader={'check out'}
                mainHeader={'Menu'}/>
            </div>

            <div className="grid grid-cols-3 gap-4">
               <MenuItem/>
               <MenuItem/>
               <MenuItem/>
               <MenuItem/>
               <MenuItem/>
               <MenuItem/>
               

            </div>
        </section>

    );
}