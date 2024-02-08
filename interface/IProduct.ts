export interface IListOfProducts {
  data: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  price: string;
  description: string;
  imgUrl: string;
  amount?: number;
}
