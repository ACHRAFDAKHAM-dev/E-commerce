// src/data/navbarData.ts

export interface CategoryItem {
  id: number;
  category: string;
}

export interface NavLink {
  id: number;
  label: string;
  path: string;
  submenu?: CategoryItem[];
}

export const categories: CategoryItem[][] = [
  [
    { id: 1, category: "Men" },
    { id: 2, category: "Women" },
    { id: 3, category: "Boys" },
    { id: 4, category: "Girls" },
    { id: 5, category: "Kids" },
  ],
  [
    { id: 1, category: "Tv" },
    { id: 2, category: "Phones" },
    { id: 3, category: "Laptops" },
    { id: 4, category: "Gaming" },
    { id: 5, category: "Airp" },
  ],
];

export const navLinks: NavLink[] = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Fashion", path: "/", submenu: categories[0] },
  { id: 3, label: "Electronics", path: "/", submenu: categories[1] },
  { id: 4, label: "Bags", path: "/" },
  { id: 5, label: "Footwear", path: "/" },
  { id: 6, label: "Groceries", path: "/" },
  { id: 7, label: "Beauty", path: "/" },
  { id: 8, label: "Wellness", path: "/" },
  { id: 9, label: "Jewellery", path: "/" },
];
