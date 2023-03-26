//! Suspense ve Lazy (Performans Optimizasyon Teknikleri)

//? Lazy Metodu

// Şöyle düşünelim; Component tanımlamarını yapıyoruz. Ancak biz kullanıncaya kadar yüklenmiş olarak bekliyor. Bu durum performans kaybına neden oluyor. Düşünsenize 10'larca component yüklüyorsunuz ancak siz kullanana kadar performans üzerinde olumsuz etki etmeye devam ediyor.

// React Lazy, resim bileşenlerinin yalnızca ihtiyaç duyulduğunda yüklenmesine olanak tanır. Bu, sayfada birden çok resim varsa, sayfanın daha hızlı yüklenmesine yardımcı olabilir.

// Lazy ile tanımlama yaparak performans etkisini azaltıyoruz.

//? Suspense Metodu

// Componentin yüklenmesi sırasında aldığı tek özellik olan fallback içindeki işlemi yapar. Örneğimizde olduğu gibi “yükleniyor“ mesajı gösterebiliriz. Suspense yapısını route içinde kullandık. Ancak isterseniz component kullanımı yaptığınız herhangi bir bölgede de kullanabilirsiniz.

// React Suspense, React uygulamalarında veri yüklemesi (data fetching) ve diğer asenkron işlemler sırasında kullanıcıya daha iyi bir deneyim sunmak için kullanılan bir tekniktir. Bu teknik, yüklenen verilerin hazır olmadığı durumlarda React bileşenlerinin yerine geçici bir içerik göstermesine olanak tanır. Böylece, kullanıcı uygulama üzerinde gezinirken herhangi bir blokaj veya gecikme yaşamaz.
// React Lazy ise, uygulamanın yalnızca gerektiğinde bileşenleri yüklemesine olanak tanıyan bir tekniktir. Bu, uygulamanın ilk yüklenmesinin daha hızlı olmasına yardımcı olabilir. Bileşenlerin yalnızca ihtiyaç duyulduğunda yüklenmesi, uygulamanın toplam yükleme süresini de azaltabilir.

// React Suspense, bir resim veya başka bir kaynağın yüklenmesi sırasında bileşenin yüklenmesini geciktirebilir. Bu, resim veya kaynak yüklenirken, yer tutucu bir içerik göstererek kullanıcının beklemesini önleyebilir.

// Bu teknolojiler, modern web uygulamalarının performansını artırmak için kullanılan popüler tekniklerdir.

//! Projects sayfasında kullanım örneği var. Performans optimizasyonu üst düzey bir konu şuan sadece varlığından haberdar olmanız yeterli.Ayrıntılı incelemek için dökümana bakabilirsiniz.

// Document Linki => https://reactjs.org/docs/react-api.html#reactsuspense
