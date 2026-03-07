# CSS Kararlari

## 1. Breakpoint Secimi
- Neden 640px ve 1024px sectim?
Genis bir cihaz yelpazesini (telefon, tablet, masaustu) desteklemek ve bakimini kolaylastirmak icin en yaygin kullanilan iki kirilim noktasini sectim. Cogu mobil cihaz 640px altinda, tabletler 640px - 1024px arasinda ve masaustu ekranlar 1024px uzerindedir.
- Icerigim bu noktalarda nasil degisiyor?
640px uzerinde header, hakkimda kismi ve form alani mobildeki tek sutun (dikey) yerlesimden yatay (yan yana) yerlesime geciyor. 1024px uzerinde ise proje kartlari uclu izgara sistemine oturuyor ve maksimum sayfa genisligi sinirlaniyor.

## 2. Layout Tercihleri
- Header icin neden Flexbox sectim?
Header yatay hizalama (logo solda, linkler sagda) ve tek boyutlu (1D) siralama gerektirdigi icin Flexbox tam da bu is icin ideal bir cozumdur.
- Proje kartlari icin neden Grid sectim?
Proje kartlari sayfa genisligine gore satir ve sutun sayisinin degistigi iki boyutlu (2D) yerlesime ihtiyac duydugu icin Grid en uygun mimalaridir.
- auto-fit mi auto-fill mi kullandim, neden?
`auto-fit` kullandim cunku bosta kalan yer olursa mevcut sutunlarin yatayda esit oranda (*fr*) buyumesini istedim, boylece ekran daima tam anlamiyla dolmus oluyor.

## 3. Design Tokens
- Hangi renk paletini sectim ve neden?
Kullanici dostu, gozu yormayan bir gorsellik saglamak amaciyla mavi agirlikli (`--color-primary`, `--color-secondary`) temiz bir renk paleti.
- Spacing skalasini nasil belirledim?
Bilesenler ve fontlar arasinda tutarli orantilar curmak amacli `rem` birimleri ile olusturulan 4 tabanli (4px, 8px, 16px ...) bir aralik sistemi secildi.
- Fluid typography icin clamp degerlerini nasil ayarladim?
Metinlerin (ornegin `h1` ve `body`) ekran daraldiginda cok kuculmemesi, acayip genislediginde ise cok buyumemesi ve akici olarak gecis yapmasi icin minimum limit (`rem`), tercih edilen deger (viewport genisligi oranli `%` / `vw`) ve maksimum limit (`rem`) hesaplanarak eklendi.

## 4. Responsive Stratejiler
- Mobile-first yaklasimini nasil uyguladim?
CSS kodlamasina once en kucuk ekranlarda calisacak (mobil gorunume ait) kurallari tanimlayarak basladim. Sonrasinda `min-width` kullanarak ekrana buyume sartlari getirdim.
- Hangi elemanlar breakpoint'lerde degisiyor?
Navigasyon menusu yan yana diziliyor, Hakkimda kismi yatay serilime geciyor ve Projeler alani sutunlasarak gosteriliyor.
- Gorsel boyutlari nasil yonettim?
Gorsellerin ebeveyn div icinden tasmamasi adina css uzerinde `max-width: 100%` kullandim. Kart gorsellerinin guzel kirpilmasi ve bozulmamasi icin `object-fit: cover` ozelligini atadim.
