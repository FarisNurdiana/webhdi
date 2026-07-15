/**
 * News & field program entries.
 *
 * Every entry corresponds to published press coverage of real HDI
 * activities. Do not add entries without a verifiable source.
 */

export type NewsItem = {
  slug: string;
  date: string;
  dateLabel: string;
  category: string;
  title: string;
  excerpt: string;
  source: { name: string; url: string };
};

export const news: NewsItem[] = [
  {
    slug: "hydrogen-car-free-day-2025",
    date: "2025-10-12",
    dateLabel: "October 2025",
    category: "Field Demonstration",
    title:
      "HDI demonstrates hydrogen vehicle, stoves and genset at Hydrogen Car Free Day, Jakarta",
    excerpt:
      "Together with PLN Suku Cadang and the Indonesia Fuel Cell and Hydrogen Energy Society (IFHE), HDI brought hydrogen technology to the public at Dukuh Atas, Jakarta — including a Daihatsu Terios converted to hydrogen fuel and working hydrogen stove units.",
    source: {
      name: "Koran Jakarta",
      url: "https://koran-jakarta.com/2025-10-12/hdi-pamerkan-inovasi-kendaraan-kompor-dan-genset-berbahan-bakar-hidrogen-di-hydrogen-car-free-day",
    },
  },
  {
    slug: "hydrogen-day-2025-fun-walk",
    date: "2025-06-01",
    dateLabel: "2025",
    category: "Clean Energy Event",
    title:
      "HDI and PLN Suku Cadang support Fun Walk Hydrogen Day 2025 with clean-energy innovation",
    excerpt:
      "HDI joined PLN Suku Cadang in bringing clean-energy innovation to Hydrogen Day 2025, presenting its hydrogen technology to a broad public audience.",
    source: {
      name: "PT PLN Suku Cadang",
      url: "https://www.plnsc.co.id/pt-pln-suku-cadang-dan-pt-hidro-dinamika-internasional-sukseskan-fun-walk-hydrogen-day-2025-dengan-inovasi-energi-bersih/",
    },
  },
  {
    slug: "ifhe-hydrogen-car-stove",
    date: "2025-01-01",
    dateLabel: "2025",
    category: "Exhibition",
    title:
      "Hydrogen-fueled car and stove presented at the IFHE forum with PLN SC",
    excerpt:
      "At the Indonesia Fuel Cell and Hydrogen Energy forum, HDI and PLN SC presented a hydrogen-fueled vehicle and hydrogen cooking innovation, showcasing practical applications of Indonesian hydrogen technology.",
    source: {
      name: "Warta Ekonomi",
      url: "https://wartaekonomi.co.id/read586078/inovasi-pln-sc-dan-pt-hdi-tampilkan-mobil-dan-kompor-berbahan-bakar-hidrogen-di-ajang-ifhe",
    },
  },
];
