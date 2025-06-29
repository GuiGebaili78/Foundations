// components/Navbar.jsx
import Image from "next/image";

export default function Navbar() {
  const today = new Date().toLocaleDateString();

  return (
    <header className="w-full bg-[var(--color-primary)] text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image src="/next.svg" alt="Logo" width={40} height={40} />
        <div className="text-lg font-semibold">Oficina Gebaili</div>
      </div>
      <div className="text-sm text-white">
        <p>Horário de Atendimento: 08h - 18h</p>
        <p>Data: {today}</p>
      </div>
    </header>
  );
}
