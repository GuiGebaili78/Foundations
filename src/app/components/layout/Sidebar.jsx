"use client";

import {
  Home,
  ClipboardList,
  Users,
  BarChart2,
  DollarSign,
  Settings,
  Wrench,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: ClipboardList, label: "Ordem de Serviço", href: "/ordens" },
  {
    icon: Users,
    label: "Clientes",
    href: "/clientes",
    submenu: [
      {
        label: "Cadastro",
        href: "../clientes/",
        icon: UserPlus,
      },
      // Aqui você pode adicionar mais itens depois
    ],
  },
  { icon: BarChart2, label: "Dashboard", href: "/dashboard" },
  { icon: DollarSign, label: "Financeiro", href: "/financeiro" },
  { icon: Settings, label: "Peças", href: "/pecas" },
  { icon: Wrench, label: "Oficina", href: "/oficina" },
];

export default function Sidebar() {
  const [hovered, setHovered] = useState(null);

  return (
    <aside className="w-60 h-screen bg-[var(--color-primary-dark)] text-white p-6 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-8">Oficina App</h1>
      <nav className="space-y-2">
        {menuItems.map(({ icon: Icon, label, href, submenu }) => (
          <div
            key={label}
            onMouseEnter={() => submenu && setHovered(label)}
            onMouseLeave={() => submenu && setHovered(null)}
          >
            <Link
              href={href}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--color-accent)] transition"
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </Link>

            {/* Submenu visível apenas ao passar o mouse */}
            {submenu && hovered === label && (
              <div className="ml-6 mt-1 space-y-1">
                {submenu.map(
                  ({ label: subLabel, href: subHref, icon: SubIcon }) => (
                    <Link
                      key={subLabel}
                      href={subHref}
                      className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg hover:bg-[var(--color-accent)] transition"
                    >
                      <SubIcon className="w-4 h-4" />
                      {subLabel}
                    </Link>
                  ),
                )}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
