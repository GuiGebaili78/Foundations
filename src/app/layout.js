// src/layout.js
import "./globals.css";
import Sidebar from "./components/layout/Sidebar.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

export const metadata = {
  title: "Centro Automotivo",
  description: "Gestão de oficina mecânica e elétrica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="flex h-screen bg-[var(--color-background)] text-[var(--color-foreground)] font-[var(--font-geist-sans)]">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 p-4 overflow-y-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
