"use server";
import { IProduct } from "@/interface/IProduct";
import { cookies } from "next/headers";

export const createProductsCookies = async (product: IProduct) => {
  if (cookies().get("products") == undefined) {
    const initalProductList = {
      data: [product],
    };
    cookies().set("products", JSON.stringify(initalProductList));
  } else {
    const productCookie = JSON.parse(cookies().get("products")?.value || "");
    productCookie.data.push(product);
    cookies().set("products", JSON.stringify(productCookie));
  }
};
