import Logo from "./Logo";
import Navigation from "@/components/Navigation";
import ContactIcons from "./ContactIcons";

export default function Header() {
  return (
    <div className="bg-blue-300 flex justify-between">
      <Logo />
      <div className="flex space-x-32">
        <Navigation />
        <ContactIcons />
      </div>
    </div>
  );
}
