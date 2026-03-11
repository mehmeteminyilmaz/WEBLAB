# 🛠️ Web LAB-1 & LAB-2: Semantik ve Erişilebilir Portföy

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

---

# ⚡ Web LAB-4: Tailwind CSS v4 & Bileşen Yaklaşımı

Bu projede LAB-4 kapsamında **Tailwind CSS v4** entegrasyonu gerçekleştirilmiş ve portfolyo sitesi **Bileşen Tabanlı (Component-Based)** bir mimariye taşınmıştır.

## 🚀 Öne Çıkan Geliştirmeler

- **Tailwind CSS v4 Entegrasyonu**: Proje altyapısı tamamen Tailwind CSS v4'e taşındı. `@tailwindcss/vite` eklentisi ile modern derleme süreci sağlandı.
- **Bileşen Tabanlı Tasarım (UI Kit)**: Sitedeki tüm arayüz elemanları tekrar kullanılabilir bileşenler (`Button`, `Input`, `Card`, `Alert`) olarak yeniden inşa edildi.
- **Gelişmiş Karanlık Tema (Dark Mode)**: LAB-3'teki tema yapısı, Tailwind v4'ün `@theme dark` özellikleri ile standardize edildi. Işık ve karanlık temalar arasında kusursuz bir geçiş sağlandı.
- **Tasarım İyileştirmeleri ve Merkezleme**: "Hakkımda" ve "Projelerim" gibi ana bölümlerin başlıkları ve içerikleri, modern tasarım prensiplerine uygun olarak sayfada tam ortalandı.
- **UI Kit Galerisi**: Tüm bileşenlerin farklı varyantlarını (renk, boyut, durum) sergileyen özel bir `/uikit` sayfası eklendi.
- **Erişilebilirlik ve Temiz Kod**: Eski CSS kodları tamamen temizlenerek Tailwind'in utility-first yaklaşımı ile daha performanslı ve yönetilebilir bir kod yapısı oluşturuldu.

## 📁 Teslim Edilenler
- `/src/components`: Tekrar kullanılabilir UI bileşenleri.
- `/src/pages/UIKit.tsx`: Bileşen kütüphanesi sayfası.
- En az 6-8 anlamlı commit ile Git süreci yönetildi (`feature/tailwind-ui-kit` dalı).
- Güncel ekran görüntüleri ve walkthrough belgeleri hazırlandı.
