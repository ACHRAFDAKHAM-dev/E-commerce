export type SubCategory = {
  name: string;
  link: string;
};

export type Category = {
  name: string;
  link: string;
  subCategories?: {
    name: string;
    link: string;
    items?: SubCategory[];
  }[];
};

export const categories: Category[] = [
  {
    name: "الأزياء",
    link: "/fashion",
    subCategories: [
      {
        name: "الملابس",
        link: "/fashion/apparel",
        items: [
          { name: "Smart Tablet", link: "/fashion/apparel/tablet" },
          { name: "قميص كريب", link: "/fashion/apparel/tshirt" },
          { name: "ساعة جلدية", link: "/fashion/apparel/watch" },
          { name: "ألماس", link: "/fashion/apparel/diamond" },
        ],
      },
    ],
  },
  {
    name: "الإلكترونيات",
    link: "/electronics",
    subCategories: [
      {
        name: "الهواتف",
        link: "/electronics/mobiles",
        items: [
          { name: "iPhone", link: "/electronics/mobiles/iphone" },
          { name: "Samsung", link: "/electronics/mobiles/samsung" },
        ],
      },
    ],
  },
];
