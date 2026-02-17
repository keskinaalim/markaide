import {
  Brain,
  Recycle,
  Shirt,
  Sparkles,
  Footprints,
  PawPrint,
  WandSparkles
} from 'lucide-react';

export const brands = [
  {
    id: 'moodmate',
    name: 'Moodmate',
    slogan: 'Always there',
    categoryTag: 'YAPAY ZEKA DESTEKLI PSIKOLOJI',
    accent: '#2563EB',
    gradient: 'from-blue-500/30 via-cyan-400/20 to-indigo-500/30',
    logo: 'moodmate.png',
    icon: Brain,
    summary:
      'Yapay zeka destekli psikolojik destek botu; kullanıcıya güvenli bir konuşma alanı sunar.',
    howItWorks:
      'Moodmate, yapay zeka (AI) teknolojisini kullanan bir psikolojik destek botudur. Kullanıcılar, kendilerini yargılamayacak bir "AI arkadaş" ile sohbet ederek problemlerini anlatır. Uygulama, kullanıcının ruh halini analiz eder, ona güvenli bir alan sunar ve sorunlarına çözüm odaklı yanıtlar üreterek mental sağlığa katkıda bulunur.',
    ideaSource:
      'Teknoloji haberlerindeki yapay zeka alanındaki aşırı gelişmelerden esinlenerek doğdu. İnsanların başkalarına anlatmaya çekindiği sorunları, yargılanma korkusu olmadan anlatabileceği bir çözüm arayışı bu fikri tetikledi.',
    vision:
      'Yapay zeka destekli psikolojik danışmanlıkta yenilikçi ve sürdürülebilir bir platform sunarak dünya çapında ulaşılabilir bir ruh hali arkadaşı olmak.',
    mission:
      'İçe kapanık veya sorunlarını paylaşmakta zorlanan bireylere güvenli ve etik değerlere bağlı bir destek sistemi sunarak toplumsal iyilik haline katkı sağlamak.',
    contact: 'https://ide.k12.tr',
    pdf: '/pdf/moodmate.pdf',
    team: ['Kurucu Ekip']
  },
  {
    id: 'eco-cycle-bin',
    name: 'Eco Cycle Bin',
    slogan: 'Recycling For Home',
    categoryTag: 'AKILLI GERI DONUSUM SISTEMI',
    accent: '#16A34A',
    gradient: 'from-emerald-500/35 via-green-400/25 to-lime-400/25',
    logo: 'ecocyclebin.png',
    icon: Recycle,
    summary:
      'Atığı kaynağında küçülten akıllı geri dönüşüm kutusu ile ev içi sürdürülebilir döngü.',
    howItWorks:
      'Akıllı bir çöp kutusu/makinesi olarak tasarlanmıştır. Atılan plastik, kağıt ve yemek atıklarını kendi içinde öğüterek çok daha küçük parçalara ayırır. Bu sayede atık hacmi küçülür ve geri dönüşüm merkezlerine sevkiyat çok daha verimli bir şekilde gerçekleştirilir.',
    ideaSource:
      'Çevresel duyarlılığı artırma ve doğayı kirleten maddelerin yarattığı kirliliği minimize etme ihtiyacından doğdu. Atık yönetimini hane içinde başlatarak sürdürülebilir bir gelecek kurma fikri temel motivasyon kaynağı oldu.',
    vision:
      'Geri dönüşümü her evin ve işletmenin doğal bir parçası haline getirerek atıksız bir dünya vizyonuna öncülük etmek.',
    mission:
      'Teknolojik çözümlerle çöpleri kaynağında işleyerek karbon ayak izini azaltmak ve doğaya daha az atık bırakılmasını sağlamak.',
    contact: 'https://ide.k12.tr',
    pdf: '/pdf/ecocyclebin.pdf',
    team: ['Kurucu Ekip']
  },
  {
    id: 'garb-ai',
    name: 'Garb AI',
    slogan: 'Snap It, AI Does It!',
    categoryTag: 'AI DESTEKLI MODA URETIMI',
    accent: '#DC2626',
    gradient: 'from-rose-500/35 via-orange-400/20 to-red-500/35',
    logo: 'garbai.png',
    icon: Shirt,
    summary:
      'Fotoğraftan 24 saatte kişiye özel üretim yapan robotik AI terzi sistemi.',
    howItWorks:
      'Kullanıcı internette beğendiği bir kıyafetin fotoğrafını sisteme yükler. Garb AI makinesi görseli analiz eder, robot kollarını ve dikiş-nakış aletlerini kullanarak kullanıcının beden ölçülerine göre kıyafeti 24 saat içinde otomatik olarak diker.',
    ideaSource:
      'Moda dünyasındaki hızlı değişim ile teknolojiyi birleştirme isteğinden doğdu. Kişiye özel dikiş sürecini otomatize ederek, internetteki tasarımları anında fiziksel ürüne dönüştürme fikriyle kuruldu.',
    vision:
      'Tekstil üretimini kişiselleştirilmiş ve tamamen otonom bir hale getirerek moda sektöründe dijital bir devrim yaratmak.',
    mission:
      'Kullanıcılara istedikleri kıyafeti en hızlı ve en doğru şekilde ulaştırmak; üretimde robotik kollar ve yapay zeka kullanarak hata payını sıfıra indirmek.',
    contact: 'https://ide.k12.tr',
    pdf: '/pdf/garbai.pdf',
    team: ['Kurucu Ekip']
  },
  {
    id: 'alz-visio',
    name: 'Alz Visio',
    slogan: 'Remember again',
    categoryTag: 'SAGLIKTA HATIRLATICI VIZYON',
    accent: '#7C3AED',
    gradient: 'from-violet-500/35 via-fuchsia-400/25 to-indigo-500/30',
    logo: 'alzvisio.png',
    icon: Sparkles,
    summary:
      'Alzheimer hastalarına anı ve bağ hatırlatan dijital vizyon destek çözümü.',
    howItWorks:
      'Alzheimer hastalarına yönelik teknolojik bir hatırlatıcı vizyon sunar. Hastaların anılarını, ailelerini ve geçmişlerini unutmamaları için görsel ve dijital destek sağlayan içerikler oluşturur; beyin fonksiyonlarını destekleyen bir çözüm sunar.',
    ideaSource:
      'Toplumun en büyük sağlık sorunlarından biri olan Alzheimer\'a odaklanma fikriyle doğdu. Ekip üyelerinin önerisiyle, hastaların yaşam kalitesini artıracak ve onlara umut olacak bir çözüm geliştirme kararı alındı.',
    vision:
      'Alzheimer hastalarının dünyayla bağını koparmadığı, anıların teknolojiyle korunduğu bir gelecek inşa etmek.',
    mission:
      'Hasta yakınlarına rehberlik etmek, toplumsal farkındalık yaratmak ve hastaların mental gerilemesini yavaşlatacak teknolojik içerikler üretmek.',
    contact: 'https://ide.k12.tr',
    pdf: '/pdf/alzvisio.pdf',
    team: ['Kurucu Ekip']
  },
  {
    id: 'klaws',
    name: 'KlawS',
    slogan: 'Smart soles for every step',
    categoryTag: 'GIYILEBILIR HAREKET TEKNOLOJISI',
    accent: '#EA580C',
    gradient: 'from-orange-500/35 via-amber-400/25 to-yellow-500/25',
    logo: 'klaws.png',
    icon: Footprints,
    summary:
      'Hatalı basışları algılayan, konfor odaklı akıllı taban teknolojisi.',
    howItWorks:
      'Termoplastik Poliüretan ve Epoksi gibi yalıtkan malzemelerle kaplanmış, içinde bakır devreler barındıran akıllı bir ayakkabı tabanıdır. Kullanıcıya yürüyüş sırasında konfor sağlar ve hatalı basışları algılayarak veri sunar.',
    ideaSource:
      'Okul projesi kapsamında, günlük hayatta yaşanan yürüme zorlukları ve ayak sağlığı problemlerini teknolojik bir akıllı taban ile çözme fikrinden ortaya çıktı.',
    vision:
      'Akıllı ayakkabı teknolojilerinde lider marka haline gelerek bu yeniliği dünya geneline yaymak.',
    mission:
      'Müşterilere en yüksek konfor ve güvenliği sağlamak; teknolojik tabanlarla hareket kabiliyetini optimize etmek.',
    contact: 'https://ide.k12.tr',
    pdf: '/pdf/klaws.pdf',
    team: ['Kurucu Ekip']
  },
  {
    id: 'purify-paws',
    name: 'Purify Paws',
    slogan: 'Daha Temiz Patiler, Daha Temiz Çevre',
    categoryTag: 'OTONOM CEVRE TEMIZLIGI',
    accent: '#0D9488',
    gradient: 'from-teal-500/35 via-cyan-400/25 to-emerald-500/30',
    logo: 'pury.png',
    icon: PawPrint,
    summary:
      'Hayvan atıklarını otonom toplayan hijyen odaklı çevre robotik sistemi.',
    howItWorks:
      'Yerdeki hayvan atıklarını otonom bir şekilde tespit edip toplayan akıllı bir robotik sistemdir. Özellikle sokak temizliği ve evcil hayvan alanları için tasarlanmış çevre dostu bir temizlik robotudur.',
    ideaSource:
      'Sokaklardaki ve parklardaki hayvan atıklarının yarattığı hijyen sorununa teknolojik ve otomatik bir çözüm bulma ihtiyacıyla doğdu.',
    vision:
      'Şehir hayatında hayvan dostlarımızla birlikte yaşamı daha hijyenik ve sürdürülebilir kılmak.',
    mission:
      'Robotik çözümlerle çevre temizliğini otomatize ederek hem belediyelerin hem de bireysel kullanıcıların iş yükünü azaltmak.',
    contact: 'https://ide.k12.tr',
    pdf: '/pdf/purifypaws.pdf',
    team: ['Kurucu Ekip']
  },
  {
    id: 'combai',
    name: 'CombAI',
    slogan:
      'Gardırobunuzu akıllı hale getirin. Hava durumuna, etkinliklere ve kişisel tarzınıza göre mükemmel kombinler oluşturun.',
    categoryTag: 'KISISEL STIL ASISTANI',
    accent: '#1D4ED8',
    gradient: 'from-blue-600/35 via-indigo-500/25 to-sky-400/30',
    logo: 'combai.png',
    icon: WandSparkles,
    summary:
      'Dijital gardırop + takvim + hava verisiyle anında kombin önerileri üreten stil AI.',
    howItWorks:
      'Kullanıcılar öncelikle kıyafetlerini uygulamaya yükleyerek dijital gardıroplarını oluştururlar. Yapay zeka destekli analiz sistemi; güncel hava durumunu ve kullanıcının takvimindeki etkinlikleri değerlendirir. Bu verileri kullanıcının kişisel tarzıyla birleştirerek anında kişiselleştirilmiş kombin önerileri sunar.',
    ideaSource:
      'Ekip olarak yaptığımız beyin fırtınası sırasında, insanların her sabah ne giyeceğim sorusuna çok fazla zaman harcadığını ve bu yüzden gidecekleri yerlere geciktiklerini fark ettik. Yapay zeka araçlarından da ilham alarak bu zaman kaybını önleyecek akıllı bir asistan tasarlamaya karar verdik.',
    vision:
      'Kullanıcıların kombin yapmaya zaman harcamadığı; hava durumu, etkinlik ve tarza en uygun giyim önerileriyle hayatın kolaylaştığı bir gelecek sunmak.',
    mission:
      'Kullanıcılara modern stil ipuçları sunarak moda bilincini artırmak ve teknoloji aracılığıyla kişisel şıklığı pratik hale getirmek.',
    contact: 'https://ide.k12.tr',
    pdf: '/pdf/vidfindr.pdf',
    team: ['Selim Dadaşbilge', 'Kerem Atiktürk', 'Berra Kurtulmuş', 'Nil Polat']
  }
];
