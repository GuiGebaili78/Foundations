// components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full h-10 bg-[var(--color-primary-dark)] text-[var(--foreground)] text-center flex items-center justify-center text-sm">
      &copy; {year} Guilherme Gebaili. Todos os direitos reservados.
    </footer>
  );
}
