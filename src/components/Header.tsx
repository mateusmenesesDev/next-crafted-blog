import ChangeTheme from "./ChangeTheme";

export default function Header() {
  return (
    <header className="mb-9 flex justify-between border-b border-[#C3C3C3] p-5">
      <span className="text-lg font-semibold">Next Crafted</span>
      <ChangeTheme />
    </header>
  );
}
