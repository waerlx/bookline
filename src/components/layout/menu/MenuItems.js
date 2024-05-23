export default function MenuItem() {
    return (
        <div
        data-aos="fade-up"
        // data-aos-delay={data.aosDelay}
        // key={data.id}
        className=""
      >
        <img
          src={'/emma.jpg'}
          alt=""
          className="m-auto h-[220px] w-[150px] object-cover rounded-md"
        />
        <div>
          <h3 className="font-semibold"></h3>
          <p className="text-xl text-gray-600 text-center">anna</p>
          <div className="flex items-center gap-1">
            {/* <FaStar className="text-yellow-400" /> */}
            <span></span>
          </div>
          <button className=" mt-2 bg-primary text-white rounded-full px-4 py-2">Add to cart $12</button>
        </div>
      </div>
    );
}