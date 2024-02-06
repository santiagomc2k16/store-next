export interface IListOfProducts {
  data: IProduct[];
}

export interface IProduct {
  id: Number;
  name: String;
  price: String;
  description: String;
  imgUrl: String;
}
