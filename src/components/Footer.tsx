import { Socials } from "./ui/Socials";

export default function Footer() {
  return (
    <div className=" flex flex-row justify-between items-center">
      <div className="text-sm text-muted">© 2026 Felipe Min</div>
      <Socials />
    </div>
  );
}
