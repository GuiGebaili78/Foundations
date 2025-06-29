// src/layout.js
import './globals.css';
import Sidebar from './components/sidebar.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

export const metadata = {
  title: 'Oficina Gebaili',
  description: 'Gestão de oficina mecânica e elétrica',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="flex h-screen bg-[var(--background)] text-[var(--foreground)] font-[var(--font-sans)]">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 p-4 overflow-y-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}