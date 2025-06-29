import Image from "next/image";
import Link from "next/link";
import hero from "../public/images/ricamia-hero.png";

export default function Home() {
  return (
    <div className="h-full">
      <main className="h-full">
        <section className="min-h-screen px-[5%] justify-end md:justify-center flex flex-col items-center bg-primary text-white">
          <div className="w-full h-full max-w-6xl pt-16 pb-8 md:py-32 relative">
            <div className="flex flex-col items-start gap-4 max-w-lg">
              <h1 className="text-6xl">Rica Mia</h1>
              <p className="text-2xl">
                Social Media Manager & Graphic Designer
              </p>
              <div className="mt-8">
                <Link
                  href="mailto:saetricamia28@gmail.com"
                  className="py-4 px-8 border border-white rounded-full hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Work With Me
                </Link>
              </div>
            </div>
          </div>
          <Image
            src={hero}
            alt=""
            className="w-full sm:w-auto max-w-md lg:max-w-3xl xl:max-w-4xl md:absolute md:bottom-0 right-0"
          ></Image>
        </section>
      </main>
      <footer className=""></footer>
    </div>
  );
}
