import { useState, useEffect } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import qrCodeImg from './assets/qr-code-pwa.png';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const projects = [
        {
            title: "Expense Tracker",
            description: "Full-stack expense tracking app with real-time Firebase Firestore database, category filtering, and Chart.js visualizations built with React.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
            tags: ["JavaScript", "React", "Firebase"],
            link: "https://github.com/mehmeteminyilmaz/expense-tracker"
        },
        {
            title: "Film Recommender",
            description: "AI-powered personalized movie recommendation engine that suggests films based on your watch history, mood, and genre preferences.",
            image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop",
            tags: ["JavaScript", "React", "Gemini API"],
            link: "https://github.com/mehmeteminyilmaz/film-recommender"
        },
        {
            title: "Smart Note Summarizer",
            description: "AI-powered text summarizer built with React and Google Gemini API.",
            image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=400&fit=crop",
            tags: ["JavaScript", "React", "Gemini API"],
            link: "https://github.com/mehmeteminyilmaz/smart-note-summarizer"
        },
        {
            title: "News Bias Detector",
            description: "AI-powered news bias detector that analyzes political leaning, bias score, and manipulative language using React and Google Gemini API.",
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
            tags: ["JavaScript", "React", "Gemini API"],
            link: "https://github.com/mehmeteminyilmaz/news-bias-detector"
        },
        {
            title: "CommitGen AI",
            description: "AI powered tool for generating Git commit messages seamlessly.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
            tags: ["TypeScript", "AI"],
            link: "https://github.com/mehmeteminyilmaz/commitgen-ai"
        },
        {
            title: "QR Code PWA App",
            description: "React tabanlı, çevrimdışı çalışabilen (PWA) modern bir QR kod üretici ve okuyucu.",
            image: qrCodeImg,
            tags: ["JavaScript", "React", "PWA"],
            link: "https://github.com/mehmeteminyilmaz/qr-code-pwa-app"
        },
        {
            title: "VeloPath",
            description: "AI destekli adaptif proje yol haritası sistemi.",
            image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600&h=400&fit=crop",
            tags: ["AI"],
            link: "https://github.com/mehmeteminyilmaz/VeloPath"
        }
    ];

    return (
        <div className="min-h-screen bg-bg text-text selection:bg-primary/30 selection:text-primary-foreground font-sans transition-colors duration-300">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white p-3 rounded-lg z-50">
                Ana içeriğe atla
            </a>

            <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="fixed top-6 right-6 z-50 p-3 rounded-full bg-surface/80 backdrop-blur-md border border-border shadow-lg hover:scale-110 active:scale-95 transition-all group"
                aria-label="Temayı Değiştir"
            >
                {isDarkMode ? (
                    <span className="text-xl group-hover:rotate-12 transition-transform">☀️</span>
                ) : (
                    <span className="text-xl group-hover:-rotate-12 transition-transform">🌙</span>
                )}
            </button>

            <header className="sticky top-0 z-40 bg-bg/80 backdrop-blur-md border-b border-border transition-colors">
                <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Emin'in Portfolyosu
                    </h1>
                    <nav aria-label="Ana navigasyon">
                        <ul className="flex flex-wrap gap-2">
                            {['Hakkımda', 'Projeler', 'İletişim'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace('ı', 'i')}`}
                                        className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-surface border border-transparent hover:border-border transition-all"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="/uikit"
                                    className="px-4 py-2 rounded-lg text-sm font-bold text-primary hover:bg-primary/10 transition-all"
                                >
                                    UI Kit
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main id="main-content" className="max-w-6xl mx-auto px-6 py-12 space-y-24">
                <section id="hakkimda" className="scroll-mt-24">
                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
                        <div className="space-y-6 flex-1">
                            <h2 className="text-4xl font-extrabold tracking-tight">Hakkımda</h2>
                            <div className="space-y-4 text-text/80 text-lg leading-relaxed max-w-3xl">
                                <p>
                                    Ben Mehmet Emin Yılmaz, yazılım geliştirme alanına ilgi duyan ve kendini sürekli geliştirmeye
                                    çalışan bir yazılım mühendisliği öğrencisiyim. Özellikle web ve mobil uygulama geliştirme
                                    alanlarında projeler üretmeye odaklanıyorum.
                                </p>
                                <p>
                                    Proje geliştirme süreçlerinde analiz, tasarım ve uygulama aşamalarına önem veriyor; kullanıcı
                                    ihtiyaçlarını dikkate alarak işlevsel ve sürdürülebilir sistemler oluşturmayı hedefliyorum.
                                </p>
                            </div>
                            <ul className="flex flex-wrap justify-center md:justify-start gap-2 pt-4" role="list" aria-label="Beceri etiketleri">
                                {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Gemini API', 'Git', 'Tailwind'].map(skill => (
                                    <li key={skill} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="projeler" className="scroll-mt-24 space-y-12">
                    <div className="text-center md:text-left space-y-2">
                        <h2 className="text-4xl font-extrabold tracking-tight">Projelerim</h2>
                        <p className="text-text/60">Geliştirdiğim bazı öne çıkan çalışmalar.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <Card
                                key={idx}
                                title={project.title}
                                image={project.image}
                                variant="elevated"
                                footer={
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="w-full"
                                        onClick={() => window.open(project.link, '_blank')}
                                    >
                                        Projeyi İncele
                                    </Button>
                                }
                            >
                                <div className="space-y-4">
                                    <p className="line-clamp-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 bg-muted/20 rounded border border-border">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="iletisim" className="scroll-mt-24 max-w-xl mx-auto w-full text-center space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-extrabold tracking-tight">İletişim</h2>
                        <p className="text-text/60">Bir projeniz var mı? Benimle iletişime geçin.</p>
                    </div>
                    <form className="p-8 bg-surface border border-border rounded-2xl shadow-xl space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
                        <Input id="name" label="Ad Soyad" placeholder="Ahmet Yılmaz" required />
                        <Input id="email" label="E-posta" type="email" placeholder="ahmet@ornek.com" required />
                        <div className="space-y-1">
                            <label htmlFor="message" className="block text-sm font-medium text-text/80">Mesajınız</label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full px-3 py-2 rounded-lg border border-border focus:ring-2 focus:ring-primary/50 focus:outline-none bg-bg text-text transition-all hover:border-muted"
                                placeholder="Mesajınızı buraya yazın..."
                            ></textarea>
                        </div>
                        <Button type="submit" className="w-full shadow-lg shadow-primary/20" size="lg">
                            Gönder
                        </Button>
                    </form>
                </section>
            </main>

            <footer className="mt-24 py-12 border-t border-border bg-surface/30 text-center space-y-4">
                <p className="font-bold text-primary">Mehmet Emin Yılmaz</p>
                <p className="text-text/40 text-sm">
                    &copy; {new Date().getFullYear()} Emin. Tüm hakları saklıdır.
                </p>
            </footer>
        </div>
    );
}

export default App;
