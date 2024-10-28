import Image from "next/image";
import image1 from "/public/images/bgrecipe.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative h-screen w-full bg-center bg-cover"
      style={{ backgroundImage: `url(${image1.src})` }}
    >
      <div className="flex justify-center items-center h-screen flex-col gap-10">
        <h1 className="lg:text-8xl md:text-6xl text-4xl font-extrabold text-black ">
          Rapid Recipe
        </h1>
        <button className="bg-black rounded-md p-3 text-white ">
          <Link href="/recipe-list">Explore</Link>
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black opacity-50"></div>
    </div>
  );
}
