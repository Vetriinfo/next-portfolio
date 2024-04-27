import Image from "next/image";

export default function Home() {
  return (
   <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/*image */}
    <div className="h-1/2 lg:h-auto lg:w-1/2 relative">
      <Image src='/hero.png' alt="" fill className="object-contain"/>
    </div>

    <div className="h-1/2 lg:h-full mt lg:w-1/2 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-4xl md:text-5xl mt-20 font-bold ">The Odyssey Of A Full Stack Web Developer</h1>

      <p className="md:text-xl">Welcome to my Web,where innovation and creativity converge. With keen eye for aesthetics and a mastery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence. </p>

      <div className="w-full flex gap-4">
        <button className="p-4 rounded-lg ring-1 ring-black bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">View My Work</button>
        <button className="p-4 rounded-lg ring-1 ring-black ">Contact Me</button>
      </div>
    </div>
   </div>
  );
}
