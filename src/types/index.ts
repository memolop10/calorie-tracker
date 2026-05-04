export interface  CategoryInterface {
  id: number;
  name: string;
};

export interface ActivityInterface {
  id: string;
  category: number;
  nameActivity: string;
  calories: number;
}