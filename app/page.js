import Image from "next/image";
import Link from "next/link";
import hero from "../public/images/ricamia-hero.png";

export default function Home() {
  return (
    <div className="h-full">
      <main className="h-full">
        <section className="h-full px-[5%] flex justify-center text-white">
          <div className="h-full flex flex-col xl:flex-row max-w-6xl">
            <div className="h-full flex flex-col gap-4 justify-center pt-16 pb-8 md:py-32">
              <h1 className="text-6xl">Rica Mia Saet</h1>
              <p className="text-2xl">
                Social Media Manager & Graphic Designer
              </p>
              <div className="mt-10">
                <Link
                  href="mailto:saetricamia28@gmail.com"
                  className="py-4 px-8 border border-white rounded-full hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Work With Me
                </Link>
              </div>
            </div>
            <Image
              src={hero}
              alt=""
              className="xl:-ml-32 max-h-screen block self-end w-full max-w-2xl object-contain"
            ></Image>
          </div>
        </section>
      </main>
      <footer className=""></footer>
    </div>
  );
}
