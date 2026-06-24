import Navbar from "./Navbar";

function Header() {
    return (
        <header className="bg-white">
            <Navbar />

            <div className="relative bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1600')",
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        Loja de Blusas Femininas
                    </h1>
                    <p className="mt-4 text-lg text-white/90 font-light">
                        Moda com estilo e conforto
                    </p>
                </div>

            </div>
        </header>
    );
}

export default Header;