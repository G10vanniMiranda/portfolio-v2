import Image from "next/image";
import Link from "next/link";
import { AiFillProject } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoIosHome } from "react-icons/io";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">

      {/* Conteudo Principal */}
      <section className="w-full h-auto flex flex-col items-center g-3">

        {/* Header */}
        <div className=" w-full h-24 flex justify-center items-center gap-3 md:justify-end md:p-10">

          <Link href="/" className="bg-green-500 flex items-center justify-end p-2 gap-3 w-32 h-8 rounded-l-md cursor-pointer" >
            <h2>Home</h2>
            <p>|</p>
            <IoIosHome className="text-black" />
          </Link>

          <div className="bg-green-500 flex items-center justify-start p-2 gap-3 w-32 h-8 rounded-e-md cursor-pointer">
            <AiFillProject className="text-black" />
            <p>|</p>
            <h2>Projetos</h2>
          </div>

        </div>

        <div className="flex flex-col md:flex-row-reverse md:items-center md:gap-40 md:p-20">
          {/* Foto de Perfil */}
          <div className="w-full h-[400px] flex justify-center" >
            <Image width={200} height={100} src="/perfil.png" alt="Foto de Perfil" className="w-96 rounded-2xl" />
          </div>

          {/* Sobre */}
          <div>
            {/* Sobre Mim */}
            <div className="w-full flex flex-col justify-center items-center gap-2 pt-3" >

              <div className="w-96 flex justify-start">
                <h2 className="text-green-500">Olá, meu nome é</h2>
              </div>

              <div className="w-96 mb-3">
                <h2 className="text-4xl">Giovanni Miranda</h2>
              </div>

              <div className="w-96 h-auto">
                <h2>
                  Olá, tenho 28 anos e sou de Porto Velho, RO. Estou cursando o 5º período de Ciências
                  da Computação e trabalho há 2 anos na área de suporte técnico, com sólida experiência
                  em Help Desk. Sou apaixonado por tecnologia e busco constantemente me aperfeiçoar na
                  área de desenvolvimento de software. Meu objetivo é me tornar um desenvolvedor full stack,
                  e estou trabalhando em projetos que refletem meu aprendizado e crescimento profissional.
                </h2>
              </div>

            </div>

            {/* Tecnologias */}
            <div className=" w-full flex flex-col gap-2 items-center pt-6">

              <div className="w-96 flex gap-2">
                <div className="bg-green-800 text-green-300 rounded-md px-2">Next.js</div>
                <div className="bg-green-800 text-green-300 rounded-md px-2">Next Auth</div>
                <div className="bg-green-800 text-green-300 rounded-md px-2">TailWindCSS</div>
                <div className="bg-green-800 text-green-300 rounded-md px-2">Bootstrap</div>
              </div>

              <div className="w-96 flex gap-2">
                <div className="bg-green-800 text-green-300 rounded-md px-2">TypeScript</div>
                <div className="bg-green-800 text-green-300 rounded-md px-2">Prisma</div>
                <div className="bg-green-800 text-green-300 rounded-md px-2">React</div>
                <div className="bg-green-800 text-green-300 rounded-md px-2">JSON</div>
                <div className="bg-green-800 text-green-300 rounded-md px-2">API</div>
              </div>

            </div>

            {/* Contato */}
            <div className="w-96 flex items-center justify-items-start gap-3 pt-8">


              <div className="bg-green-500 rounded-md p-2 p flex gap-2">
                Entre em contato --{">"}
              </div>

              <div className="flex gap-2">

                <FiGithub />
                <CiLinkedin />
                <FaInstagram />

                <Link href="https://api.whatsapp.com/send?phone=5569999210459">
                  <FaWhatsapp />
                </Link>
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
