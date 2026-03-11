import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
    return (
        <div className="min-h-screen bg-bg text-text p-8 space-y-16">
            <header className="max-w-6xl mx-auto space-y-4">
                <a href="/" className="text-primary hover:underline flex items-center gap-2">
                    ← Portfolyoya Dön
                </a>
                <h1 className="text-5xl font-extrabold tracking-tight">UI Kit</h1>
                <p className="text-text/60 text-lg">LAB-4 kapsamında oluşturulan bileşen kütüphanesi ve varyantları.</p>
            </header>

            <main className="max-w-6xl mx-auto space-y-16">
                {/* Buttons Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold border-b border-border pb-2">Buttons</h2>
                    <div className="space-y-8">
                        <div className="space-y-3">
                            <h3 className="text-sm font-medium text-text/40 uppercase tracking-widest">Renk Varyantları</h3>
                            <div className="flex flex-wrap gap-4">
                                <Button variant="primary">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="danger">Danger</Button>
                                <Button variant="ghost">Ghost</Button>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-sm font-medium text-text/40 uppercase tracking-widest">Boyut Varyantları</h3>
                            <div className="flex flex-wrap items-end gap-4">
                                <Button size="sm">Small</Button>
                                <Button size="md">Medium</Button>
                                <Button size="lg">Large</Button>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-sm font-medium text-text/40 uppercase tracking-widest">Durumlar</h3>
                            <div className="flex flex-wrap gap-4">
                                <Button disabled>Disabled</Button>
                                <Button variant="secondary" className="animate-pulse">Loading...</Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Inputs Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold border-b border-border pb-2">Inputs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                        <Input id="in-1" label="Normal Input" placeholder="Bir şeyler yazın..." />
                        <Input id="in-2" label="Yardımcı Metinli" helpText="Şifreniz en az 8 karakter olmalıdır." type="password" />
                        <Input id="in-3" label="Hatalı Durum" error="Geçersiz e-posta adresi." defaultValue="yanlis-mail" />
                        <Input id="in-4" label="Devre Dışı" disabled value="Düzenlenemez içerik" />
                    </div>
                </section>

                {/* Cards Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold border-b border-border pb-2">Cards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card variant="elevated" title="Elevated Card" image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop">
                            Gölge ve derinlik içeren, en sık kullanılan kart varyantı.
                        </Card>
                        <Card variant="outlined" title="Outlined Card">
                            Sadece kenarlık içeren, daha sade ve minimalist bir görünüm sunar.
                        </Card>
                        <Card variant="filled" title="Filled Card" footer={<Button size="sm" className="w-full">Action</Button>}>
                            Arka planı dolgulu, grup içerisindeki elemanları ayırmak için idealdir.
                        </Card>
                    </div>
                </section>

                {/* Alerts Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold border-b border-border pb-2">Alerts</h2>
                    <div className="space-y-4 max-w-3xl">
                        <Alert variant="info" title="Bilgilendirme">Bu sistemde Tailwind v4 kullanılmaktadır.</Alert>
                        <Alert variant="success" title="Başarılı">Formunuz başarıyla gönderildi.</Alert>
                        <Alert variant="warning" title="Uyarı">Oturumunuz 5 dakika içinde sona erecek.</Alert>
                        <Alert variant="error" title="Hata" dismissible onDismiss={() => alert('Alert kapatıldı')}>
                            İşlem sırasında bir sorun oluştu.
                        </Alert>
                    </div>
                </section>
            </main>

            <footer className="max-w-6xl mx-auto pt-16 border-t border-border text-text/40 text-sm pb-8">
                UI Kit v1.0 - Web Tasarımı ve Programlama LAB-4
            </footer>
        </div>
    );
}
