// components/Sidebar.jsx
import {
  Home,
  ClipboardList,
  Users,
  BarChart2,
  DollarSign,
  Settings,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: ClipboardList, label: "Ordem de Serviço", href: "/ordens" },
  { icon: Users, label: "Clientes", href: "/clientes" },
  { icon: BarChart2, label: "Dashboard", href: "/dashboard" },
  { icon: DollarSign, label: "Financeiro", href: "/financeiro" },
  { icon: Settings, label: "Peças", href: "/pecas" },
  { icon: Wrench, label: "Oficina", href: "/oficina" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[var(--color-primary-dark)] text-white p-6">
      <h1 className="text-2xl font-bold mb-8">Oficina App</h1>
      <nav className="space-y-4">
        {menuItems.map(({ icon: Icon, label, href }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--color-accent)] transition"
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
