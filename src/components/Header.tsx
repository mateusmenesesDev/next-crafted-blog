import Link from "next/link";
import ChangeTheme from "./ChangeTheme";

export default function Header() {
  return (
    <header className="mb-9 flex justify-between border-b border-[#C3C3C3] p-5">
      <Link href="/" className="text-lg font-semibold">
        Next Crafted
      </Link>
      <ChangeTheme />
    </header>
  );
}
