import Image from "next/image";
import { SlMagnifier } from "react-icons/sl";
import logoImage from "@/public/logo.png";

export default function NavBar() {
  return (
    <nav className="flex w-full bg-zinc-800 text-zinc-50 justify-between px-5 py-2">
      <div className="logo flex items-center gap-1">
        <Image
          width={700}
          height={700}
          src={logoImage}
          alt="Shop logo"
          className="w-10"
        />
        <h2 className="">Santiago shop</h2>
      </div>
      <div className="flex items-center gap-10">
        <form
          action=""
          className="flex items-center rounded-md bg-zinc-900 p-1"
        >
          <SlMagnifier className="ml-2" />
          <input type="text" className="rounded-md bg-zinc-900" />
        </form>
        <ul className="flex items-center flex-row gap-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
          <ul></ul>
        </ul>
      </div>
    </nav>
  );
}
