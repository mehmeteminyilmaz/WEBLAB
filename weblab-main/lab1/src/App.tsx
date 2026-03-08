import qrCodeImg from './assets/qr-code-pwa.png';

function App() {
    return (
        <>
            <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

            <header>
                <div className="site-title">Emin'in Portfolyosu</div>
                <nav aria-label="Ana navigasyon">
                    <ul>
                        <li><a href="#hakkimda">Hakkımda</a></li>
                        <li><a href="#projeler">Projeler</a></li>
                        <li><a href="#iletisim">İletişim</a></li>
                    </ul>
                </nav>
            </header>

            <main id="main-content">
                <section id="hakkimda">
                    <h2>Hakkımda</h2>
                    <div className="about-content">
                        <div>
                            <p>Ben Mehmet Emin Yılmaz, yazılım geliştirme alanına ilgi duyan ve kendini sürekli geliştirmeye
                                çalışan bir yazılım mühendisliği öğrencisiyim. Özellikle web ve mobil uygulama geliştirme
                                alanlarında projeler üretmeye odaklanıyorum. Programlama alanında C, C#, Java ve Python
                                dilleriyle çalışabilmekteyim. Ayrıca HTML, CSS ve JavaScript kullanarak modern, kullanıcı dostu
                                ve mobil uyumlu web uygulamaları geliştirme konusunda deneyim sahibiyim.</p>
                            <p>Proje geliştirme süreçlerinde analiz, tasarım ve uygulama aşamalarına önem veriyor; kullanıcı
                                ihtiyaçlarını dikkate alarak işlevsel ve sürdürülebilir sistemler oluşturmayı hedefliyorum. Aynı
                                zamanda mobil uygulama geliştirme alanında da kendimi geliştirmekte ve farklı platformlarda
                                çalışabilecek projeler üretmeye yönelik çalışmalar yapmaktayım.</p>
                            <p>Yazılım alanındaki güncel teknolojileri takip ederek teknik bilgi ve becerilerimi sürekli
                                geliştirmeyi, yenilikçi ve etkili yazılım çözümleri üreten bir geliştirici olmayı hedefliyorum.
                            </p>
                            <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Google Gemini API</li>
                                <li>Git</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="projeler">
                    <h2>Projelerim</h2>
                    <div className="project-grid">

                        <article className="project-card">
                            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop"
                                alt="Expense Tracker" />
                            <h3>Expense Tracker</h3>
                            <p>Full-stack expense tracking app with real-time Firebase Firestore database, category filtering,
                                and Chart.js visualizations built with React.</p>
                            <ul className="skill-tags">
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Firebase</li>
                            </ul>
                            <a href="https://github.com/mehmeteminyilmaz/expense-tracker" target="_blank"
                                rel="noopener noreferrer">Projeyi İncele</a>
                        </article>

                        <article className="project-card">
                            <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop"
                                alt="Film Recommender" />
                            <h3>Film Recommender</h3>
                            <p>AI-powered personalized movie recommendation engine that suggests films based on your watch
                                history, mood, and genre preferences.</p>
                            <ul className="skill-tags">
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Gemini API</li>
                            </ul>
                            <a href="https://github.com/mehmeteminyilmaz/film-recommender" target="_blank"
                                rel="noopener noreferrer">Projeyi İncele</a>
                        </article>

                        <article className="project-card">
                            <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=400&fit=crop"
                                alt="Smart Note Summarizer" />
                            <h3>Smart Note Summarizer</h3>
                            <p>AI-powered text summarizer built with React and Google Gemini API.</p>
                            <ul className="skill-tags">
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Gemini API</li>
                            </ul>
                            <a href="https://github.com/mehmeteminyilmaz/smart-note-summarizer" target="_blank"
                                rel="noopener noreferrer">Projeyi İncele</a>
                        </article>

                        <article className="project-card">
                            <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop"
                                alt="News Bias Detector" />
                            <h3>News Bias Detector</h3>
                            <p>AI-powered news bias detector that analyzes political leaning, bias score, and manipulative
                                language using React and Google Gemini API.</p>
                            <ul className="skill-tags">
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Gemini API</li>
                            </ul>
                            <a href="https://github.com/mehmeteminyilmaz/news-bias-detector" target="_blank"
                                rel="noopener noreferrer">Projeyi İncele</a>
                        </article>

                        <article className="project-card">
                            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
                                alt="CommitGen AI" />
                            <h3>CommitGen AI</h3>
                            <p>AI powered tool for generating Git commit messages seamlessly.</p>
                            <ul className="skill-tags">
                                <li>TypeScript</li>
                                <li>AI</li>
                            </ul>
                            <a href="https://github.com/mehmeteminyilmaz/commitgen-ai" target="_blank"
                                rel="noopener noreferrer">Projeyi İncele</a>
                        </article>

                        <article className="project-card">
                            <img src={qrCodeImg} alt="QR Code PWA App" />
                            <h3>QR Code PWA App</h3>
                            <p>React tabanlı, çevrimdışı çalışabilen (PWA) modern bir QR kod üretici ve okuyucu.</p>
                            <ul className="skill-tags">
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>PWA</li>
                            </ul>
                            <a href="https://github.com/mehmeteminyilmaz/qr-code-pwa-app" target="_blank"
                                rel="noopener noreferrer">Projeyi İncele</a>
                        </article>

                        <article className="project-card">
                            <img src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600&h=400&fit=crop"
                                alt="VeloPath" />
                            <h3>VeloPath</h3>
                            <p>AI destekli adaptif proje yol haritası sistemi.</p>
                            <ul className="skill-tags">
                                <li>AI</li>
                            </ul>
                            <a href="https://github.com/mehmeteminyilmaz/VeloPath" target="_blank"
                                rel="noopener noreferrer">Projeyi İncele</a>
                        </article>

                    </div>
                </section>

                <section id="iletisim">
                    <h2>İletişim</h2>
                    <form action="#" method="POST" noValidate>
                        <fieldset>
                            <legend>Bana Mesaj Gönderin</legend>
                            <div className="form-group">
                                <label htmlFor="name">Ad Soyad:</label>
                                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                                <small id="name-error" className="error-msg" role="alert"></small>
                            </div>
                            <button type="submit">Gönder</button>
                        </fieldset>
                    </form>
                </section>
            </main>

            <footer>
                <p>&copy; 2026 Emin. Tüm hakları saklıdır.</p>
            </footer>
        </>
    )
}

export default App
