// components/Header.jsx
import Image from "next/image";
import LogoEmpresa from "../../assets/image/Logo_Empresa.png";

export default function Header() {
  const today = new Date().toLocaleDateString();

  return (
    <header className="w-full bg-[var(--color-primary-dark)] text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image src={LogoEmpresa} alt="Logo da empresa" width={60} height={60} />
        <div className="text-lg font-semibold">Centro Automotivo</div>
      </div>
      <div className="text-sm text-white">
        <p>Login: João Carlos</p>
        <p>Data: {today}</p>
      </div>
    </header>
  );
}
