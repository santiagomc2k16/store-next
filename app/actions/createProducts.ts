"use server";
import { IProduct } from "@/interface/IProduct";
import { cookies } from "next/headers";

export const createProductsCookies = async (product: IProduct) => {
  if (cookies().get("products") == undefined) {
    const initalProductList = {
      data: [{ ...product, amount: 1 }],
    };
    cookies().set("products", JSON.stringify(initalProductList));
  } else {
    const productCookie = JSON.parse(cookies().get("products")?.value || "");
    let saved = false;
    productCookie.data.map((item: IProduct) => {
      if (item.id == product.id) {
        item.amount = item.amount != undefined ? item.amount.valueOf() + 1 : 1;
        saved = true;
      }
    });
    if (!saved) productCookie.data.push({ ...product, amount: 1 });
    //console.log(productCookie);
    cookies().set("products", JSON.stringify(productCookie));
  }
};
