export interface TabEntity {
  name: string;
  def: string;
  payload: string;
}

export interface CategoryItem {
  name: string;
  itemsCount: number;
  icon: string;
  url: string;
}

// Generic Global Interfaces

export interface GlobalMenuItem {
  title: string;
  url: string;
  logo: string;
}
