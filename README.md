Web LAB-1 & LAB-2: Semantik ve Erişilebilir Portföy

📌 Proje Hakkında

Bu proje, Web Tasarımı ve Programlama dersi kapsamında, semantik HTML5 yapısına uygun ve yüksek erişilebilirlik standartlarında geliştirilmiştir.

👨‍💻 Geliştirici

Ad Soyad: Mehmet Emin Yılmaz
Öğrenci No:235541078
Bölüm: Yazılım Mühendisliği

🚀 Öne Çıkan Özellikler

Semantik Yapı: header, nav, main, section, article ve footer etiketleri kullanıldı.

Erişilebilirlik: Skip-link (İçeriğe atla) ve odak göstergesi eklendi.

Form Tasarımı: Label eşleşmeleri, ARIA rolleri ve HTML5 doğrulamaları (required, minlength) uygulandı.

Başlık Düzeni: H1'den H3'e kadar doğru hiyerarşi sağlandı.

📊 Lighthouse Skoru

Proje, Google Lighthouse erişilebilirlik testinden 96/100 puan almıştır.

📂 Git Süreci

feature/semantic-portfolio dalında çalışıldı.

En az 3 anlamlı commit atıldı ve merge işlemi tamamlandı.

---

# 🎨 Web LAB-3: Modern CSS & Responsive Düzen

Bu projede LAB-3 kapsamında **Mobile-First** (Önce Mobil) mantığıyla modern, duyarlı (responsive) ve şık bir portfolyo arayüzü inşa edildi.

## 🚀 Yeni Eklenen Özellikler

- **Design Tokens (`tokens.css`)**: Renk, boşluk, boyut ve gölge kavramları CSS custom properties (değişkenler) olarak bir araya getirildi. Koyu ve zarif (Zinc/Slate & Violet) bir tema uygulandı.
- **Akıcı Tipografi (Fluid Typography)**: Yazı boyutları, ekran boyutuna göre `clamp()` fonksiyonuyla donatıldı ve kusursuz akış sağlandı. 'Outfit' fontu entegre edildi.
- **Esnek Hizalama (Flexbox)**: Başlık navigasyonu ve beceri etiketleri (skill-tags) yatayda kolay ve duyarlı (responsive) konumlandırıldı.
- **Izgara (Grid) Sistemi**: Projeler listesi `repeat(auto-fit, minmax(320px, 1fr))` kullanılarak ekran boyutuna anında adapte olan çok sütunlu bir yapıya dönüştürüldü.
- **Dinamik Projeler**: "Projelerim" alanı benim aktif olarak geliştirdiğim GitHub depolarımla (Expense Tracker, News Bias Detector vb.) güncellendi.
- **Kırılma Noktaları (Breakpoints)**: 
  - `0-639px`: Tam bağımsız yatay yığınlı mobil görünüm.
  - `640px+ (Tablet)`: "Hakkımda" sekmesi gibi alanların yatay düzene geçtiği kırılma noktası.
  - `1024px+ (Masaüstü)`: İçerik sınırlarının `1280px`'e çekilip projelerin 3 sütuna yerleştiği görünüm.
  
## 📁 Teslim Edilenler
- Tasarım aşamalarında alınan ve onaylanan tasarımsal kararlar projedeki `CSS-KARARLARI.md` belgesine kaydedildi.
- Ekranların 3 ayrı portresinin (Desktop, Tablet, Mobile) tam ekran görüntüleri `screenshots/` klasörüne dahil edildi.
- **6 adım (commit)** işlenerek uzak depo ile senkronize edildi (`feature/responsive-layout` adında yeni dalda çalışılıp merge işlemlerine hazır bırakıldı).
