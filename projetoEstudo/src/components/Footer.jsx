function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                    <p className="text-sm font-medium text-white">
                        © 2026 Loja de Blusas Femininas
                    </p>
                    <p className="text-sm text-gray-400">
                        Todos os direitos reservados
                    </p>
                </div>
                <div className="text-center md:text-right">
                    <p className="text-sm text-gray-400">
                        Email:{" "}
                        <a
                            href="mailto:contato@lojablusas.com"
                            className="text-white hover:underline"
                        >
                            contato@lojablusas.com
                        </a>
                    </p>
                </div>
            </div>
        </footer >
    );
}

export default Footer;