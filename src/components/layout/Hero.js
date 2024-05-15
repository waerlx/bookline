import Image from "next/image"
import Right from "../icons/Right"
export default function Hero() {
    return (
        <section className="hero mt-4">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">Everything <br /> is better <br /> with a&nbsp; <span className="text-primary">Books</span> </h1> 
                <p className="my-y text-gray-500 text-sm mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis architecto illo numquam. Vero animi totam, maiores voluptates aliquam nemo cum ipsum accusamus veritatis aliquid nesciunt ad, id recusandae, suscipit maxime!</p>
                <div className="flex gap-4 text-sm mt-4">
                    <button className="bg-primary flex items-center uppercase gap-2 text-white px-4 py-2 rounded-full ">Order now <Right /></button>
                    <button className="flex gap-2 py-2 text-gray-400 font-semibold">Learn more <Right /> </button>

                </div>
            </div>

            <div className=" relative"> <Image src={'/anna.jpg'} layout={'fill'} objectFit={'contain'} alt={'pizza'} /></div>

        </section>
    )
}