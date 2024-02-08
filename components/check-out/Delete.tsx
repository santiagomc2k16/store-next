"use client";
import { eraseProductsCookies } from "@/app/actions/createProducts";
import cookie from "@boiseitguru/cookie-cutter";

export default function Delete(props: { id: number }) {
  const { id } = props;

  function handleClick() {
    eraseProductsCookies(id);
    console.log(cookie.get("products"));
  }

  return (
    <button
      className="bg-red-600 rounded-md px-2 py-1 text-slate-50 mr-5"
      onClick={handleClick}
    >
      Delete
    </button>
  );
}
