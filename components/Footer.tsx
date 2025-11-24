export default function Footer() {
  return (
    <footer className="py-8 bg-foreground text-white/60 text-center text-sm">
      <div className="container mx-auto px-4">
        <p>© 2025 Bárbara Marques – Todos os direitos reservados</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
