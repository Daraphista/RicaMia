import Image from "next/image";
import Link from "next/link";
import hero from "../public/images/ricamia-hero.png";

import echaguePageImage from "../public/images/echague-page.png";
import ccasPageImage from "../public/images/ccas-page.png";
import soyungPageImage from "../public/images/soyung-page.png";
import isuPageImage from "../public/images/isu-page.png";

import workSample1 from "../public/images/work-samples/work-sample-1.jpeg";
import workSample2 from "../public/images/work-samples/work-sample-2.jpeg";
import workSample3 from "../public/images/work-samples/work-sample-3.jpeg";
import workSample4 from "../public/images/work-samples/work-sample-4.jpeg";
import workSample5 from "../public/images/work-samples/work-sample-5.jpeg";
import workSample6 from "../public/images/work-samples/work-sample-6.jpeg";
import workSample7 from "../public/images/work-samples/work-sample-7.jpeg";
import workSample8 from "../public/images/work-samples/work-sample-8.jpeg";

import about from "../public/images/about.jpg";

import ctaImage from "../public/images/cta-image.png";

import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <section className="px-[5%] flex justify-center text-white bg-primary">
          <div className="flex flex-col xl:flex-row xl:w-full max-w-6xl">
            <div className="flex flex-col gap-4 justify-center pt-16 pb-4 lg:py-32">
              <h1 className="text-6xl">Rica Mia Saet</h1>
              <p className="text-2xl">
                Social Media Manager & Graphic Designer
              </p>
              <div className="mt-10">
                <Link
                  href="#contact"
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
              loading="eager"
            ></Image>
          </div>
        </section>
        <section className="text-center px-[5%] flex justify-center relative bg-center bg-[url(/images/pages-managed.webp)] bg-fixed text-[#624a3c] py-16 md:py-32">
          <div className="flex flex-col gap-16 items-center w-full max-w-6xl relative z-10">
            <h2 className="text-5xl">Pages I&apos;ve managed</h2>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <PageLink
                  title="Echague Tourism, Heritage, Culture and Arts"
                  imageUrl={echaguePageImage}
                  followerCount="23K"
                  link="/"
                ></PageLink>
                <PageLink
                  title="Community for Culture, Arts and Sports - CCAS"
                  imageUrl={ccasPageImage}
                  followerCount="3.8K"
                  link="/"
                ></PageLink>
                <PageLink
                  title="Kabataang SoYoung"
                  imageUrl={soyungPageImage}
                  followerCount="2K"
                  link="/"
                ></PageLink>
                <PageLink
                  title="Society of Elementary Educators -Isabela State University Main Campus"
                  imageUrl={isuPageImage}
                  followerCount="1.7K"
                  link="/"
                ></PageLink>
              </div>
            </div>
            <Link
              href="#contact"
              className="py-4 px-8 border border-[#624a3c] rounded-full hover:bg-[#624a3c] hover:text-white transition-all duration-300"
            >
              Work With Me
            </Link>
          </div>

          <div className="absolute inset-0 bg-[#f8ede4]/90"></div>
        </section>

        <section className="text-center px-[5%] flex justify-center relative bg-[#ab7456] text-white py-16 md:py-32">
          <div className="flex flex-col gap-16 items-center w-full max-w-6xl relative z-10">
            <h2 className="text-5xl">Work Samples</h2>
            <div className="p-16">
              <div className="relative">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  <Image
                    alt=""
                    src={workSample1}
                    className="aspect-square shadow-lg rounded"
                  ></Image>
                  <Image
                    alt=""
                    src={workSample2}
                    className="aspect-square shadow-lg rounded"
                  ></Image>
                  <Image
                    alt=""
                    src={workSample3}
                    className="aspect-square shadow-lg rounded"
                  ></Image>
                  <Image
                    alt=""
                    src={workSample4}
                    className="aspect-square shadow-lg rounded"
                  ></Image>
                  <Image
                    alt=""
                    src={workSample5}
                    className="aspect-square shadow-lg rounded"
                  ></Image>
                  <Image
                    alt=""
                    src={workSample6}
                    className="aspect-square shadow-lg rounded"
                  ></Image>
                  <Image
                    alt=""
                    src={workSample7}
                    className="aspect-square shadow-lg rounded"
                  ></Image>
                  <Image
                    alt=""
                    src={workSample8}
                    className="aspect-square shadow-lg rounded"
                  ></Image>
                </div>
                <div className="absolute w-full h-full -top-16 -right-16 border-t border-r border-[#f8ede4]/80">
                  <svg
                    className="absolute -top-[35px] -left-32"
                    width="84"
                    height="70"
                    viewBox="0 0 84 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M26.4189 52H25.5811C25.5811 45.1657 23.0251 39.1904 17.9173 34.0827C12.8096 28.9749 6.83854 26.4189 0 26.4189V25.5811C6.83854 25.5811 12.8096 23.0251 17.9173 17.9046C23.0251 12.7842 25.5811 6.81315 25.5811 0H26.4189C26.4189 6.83431 28.9749 12.8096 34.0827 17.9173C39.1904 23.0251 45.1615 25.5811 52 25.5811V26.4189C45.1657 26.4189 39.1904 28.9749 34.0827 34.0827C28.9749 39.1904 26.4189 45.1615 26.4189 52Z"
                      fill="#F8EDE4"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M72.6772 29H72.3228C72.3228 26.1086 71.2414 23.5806 69.0804 21.4196C66.9194 19.2586 64.3932 18.1772 61.5 18.1772V17.8228C64.3932 17.8228 66.9194 16.7414 69.0804 14.575C71.2414 12.4087 72.3228 9.88249 72.3228 7H72.6772C72.6772 9.89144 73.7586 12.4194 75.9196 14.5804C78.0806 16.7414 80.6068 17.8228 83.5 17.8228V18.1772C80.6086 18.1772 78.0806 19.2586 75.9196 21.4196C73.7586 23.5806 72.6772 26.1068 72.6772 29Z"
                      fill="#F8EDE4"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M58.7659 70H58.2341C58.2341 65.6628 56.6121 61.8708 53.3706 58.6294C50.1292 55.3879 46.3398 53.7659 42 53.7659V53.2341C46.3398 53.2341 50.1292 51.6121 53.3706 48.3625C56.6121 45.113 58.2341 41.3237 58.2341 37H58.7659C58.7659 41.3372 60.3879 45.1292 63.6294 48.3706C66.8708 51.6121 70.6602 53.2341 75 53.2341V53.7659C70.6628 53.7659 66.8708 55.3879 63.6294 58.6294C60.3879 61.8708 58.7659 65.6602 58.7659 70Z"
                      fill="#F8EDE4"
                    />
                  </svg>
                </div>
                <div className="absolute w-full h-full -bottom-16 -left-16 border-b border-l border-[#f8ede4]/80">
                  <svg
                    className="absolute -bottom-[35px] -right-32"
                    width="84"
                    height="70"
                    viewBox="0 0 84 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M26.4189 52H25.5811C25.5811 45.1657 23.0251 39.1904 17.9173 34.0827C12.8096 28.9749 6.83854 26.4189 0 26.4189V25.5811C6.83854 25.5811 12.8096 23.0251 17.9173 17.9046C23.0251 12.7842 25.5811 6.81315 25.5811 0H26.4189C26.4189 6.83431 28.9749 12.8096 34.0827 17.9173C39.1904 23.0251 45.1615 25.5811 52 25.5811V26.4189C45.1657 26.4189 39.1904 28.9749 34.0827 34.0827C28.9749 39.1904 26.4189 45.1615 26.4189 52Z"
                      fill="#F8EDE4"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M72.6772 29H72.3228C72.3228 26.1086 71.2414 23.5806 69.0804 21.4196C66.9194 19.2586 64.3932 18.1772 61.5 18.1772V17.8228C64.3932 17.8228 66.9194 16.7414 69.0804 14.575C71.2414 12.4087 72.3228 9.88249 72.3228 7H72.6772C72.6772 9.89144 73.7586 12.4194 75.9196 14.5804C78.0806 16.7414 80.6068 17.8228 83.5 17.8228V18.1772C80.6086 18.1772 78.0806 19.2586 75.9196 21.4196C73.7586 23.5806 72.6772 26.1068 72.6772 29Z"
                      fill="#F8EDE4"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M58.7659 70H58.2341C58.2341 65.6628 56.6121 61.8708 53.3706 58.6294C50.1292 55.3879 46.3398 53.7659 42 53.7659V53.2341C46.3398 53.2341 50.1292 51.6121 53.3706 48.3625C56.6121 45.113 58.2341 41.3237 58.2341 37H58.7659C58.7659 41.3372 60.3879 45.1292 63.6294 48.3706C66.8708 51.6121 70.6602 53.2341 75 53.2341V53.7659C70.6628 53.7659 66.8708 55.3879 63.6294 58.6294C60.3879 61.8708 58.7659 65.6602 58.7659 70Z"
                      fill="#F8EDE4"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <Link
              href="#contact"
              className="py-4 px-8 border border-white rounded-full hover:bg-white hover:text-[#624a3c] transition-all duration-300"
            >
              Work With Me
            </Link>
          </div>
        </section>

        <section className="px-[5%] flex justify-center relative bg-[#f8ede4] text-[#624a3c] py-16 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full max-w-6xl relative z-10">
            <div>
              <Image alt="" className="rounded-xl" src={about}></Image>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-5xl">About Me</h2>
              <p>
                I am a passionate graphic designer and social media manager with
                hands-on experience working with government offices, youth
                organizations, and local community groups. I specialize in
                modern, purpose-driven designs and content strategies that help
                build connection, trust, and engagement online. I&apos;ve
                successfully grown and managed three active Facebook pages for
                our municipality and barangay, turning simple ideas into
                powerful online impact.
              </p>
              <Link
                href="#contact"
                className="py-4 px-8 border border-[#624a3c] rounded-full hover:bg-[#624a3c] hover:text-white transition-all duration-300"
              >
                Work With Me
              </Link>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative text-white bg-[#624a3c] grid grid-cols-1 md:grid-cols-2"
        >
          <div className="flex justify-end pl-[10%] py-16 md:py-32">
            <div className="max-w-xl w-full pr-8 flex flex-col items-start gap-12">
              <h2 className="text-5xl">Work With Me</h2>

              <Contact></Contact>
            </div>
          </div>
          <div className="bg-[#E8BC95] flex pr-[10%]">
            <div className="">
              <Image className="h-full w-auto" alt="" src={ctaImage}></Image>
            </div>
          </div>
        </section>
      </main>
      <footer className=""></footer>
    </div>
  );
}

const PageLink = ({ title, imageUrl, followerCount }) => (
  <div className="relative block">
    <Image alt={title} src={imageUrl}></Image>
    <div className="absolute -bottom-4 right-8 lg:right-0 flex justify-center items-center w-[200px] h-[200px]">
      <h3 className="relative z-10 text-white flex flex-col items-center">
        <span className="text-5xl">{followerCount}</span>
        <span>followers</span>
      </h3>
      <svg
        className="inset-0 absolute"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M82.4212 2.85141C80.0775 0.390471 76.5619 -0.547029 73.2806 0.312346C69.9994 1.17172 67.4603 3.78891 66.6009 7.07016L60.429 31.4842L36.2103 24.6483C32.929 23.7108 29.4134 24.6483 27.0306 27.0311C24.6478 29.4139 23.7103 32.9295 24.6478 36.2108L31.4837 60.4295L7.06967 66.6405C3.78842 67.4608 1.2103 70.0389 0.311858 73.3202C-0.586579 76.6014 0.389983 80.078 2.85092 82.4217L20.8978 99.9998L2.85092 117.578C0.389983 119.922 -0.547517 123.437 0.311858 126.719C1.17123 130 3.78842 132.539 7.06967 133.398L31.4837 139.57L24.6478 163.789C23.7103 167.07 24.6478 170.586 27.0306 172.969C29.4134 175.351 32.929 176.289 36.2103 175.351L60.429 168.515L66.6009 192.93C67.4212 196.211 69.9994 198.789 73.2806 199.687C76.5619 200.586 80.0384 199.609 82.4212 197.187L99.9994 179.14L117.577 197.187C119.96 199.609 123.437 200.586 126.718 199.687C129.999 198.789 132.538 196.211 133.398 192.93L139.57 168.515L163.788 175.351C167.07 176.289 170.585 175.351 172.968 172.969C175.351 170.586 176.288 167.07 175.351 163.789L168.515 139.57L192.929 133.398C196.21 132.578 198.788 130 199.687 126.719C200.585 123.437 199.609 119.922 197.187 117.578L179.14 99.9998L197.187 82.4217C199.609 80.0389 200.585 76.5624 199.687 73.2811C198.788 69.9999 196.21 67.4608 192.929 66.6014L168.515 60.4295L175.351 36.2108C176.288 32.9295 175.351 29.4139 172.968 27.0311C170.585 24.6483 167.07 23.7108 163.788 24.6483L139.57 31.4842L133.359 7.07016C132.538 3.78891 129.96 1.21078 126.679 0.312346C123.398 -0.586091 119.921 0.390471 117.577 2.85141L99.9994 20.8983L82.4212 2.85141Z"
          fill="#AB7456"
        />
      </svg>
    </div>
  </div>
);
