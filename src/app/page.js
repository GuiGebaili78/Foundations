import Image from 'next/image';
import LogoHome from './assets/image/Logo_Home.jpg';

export default function HomePage() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <Image
        src={LogoHome}
        alt="Imagem de fundo da Home"
        layout="fill"
        objectFit="cover"
        priority={true}
        className="opacity-20"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg mb-4">
          Centro Automotivo
        </h1>
        <p className="text-xl sm:text-2xl drop-shadow-md">
          Gestão Inteligente para sua Oficina Mecânica e Elétrica
        </p>
      </div>
    </div>
  );
}