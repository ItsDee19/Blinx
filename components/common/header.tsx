import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import NavLinks from "./nav-links";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Header() {
  return (
    <nav className="container flex items-center py-4 lg:px-8 px-2 mx-auto">
      {/* Left: Logo + Blinx */}
      <div className="flex items-center">
        <NavLinks
          href="/"
          className="flex items-center gap-1 lg:gap-2 shrink-0"
        >
          <FileText
            className="w-4 h-4 lg:w-7 lg:h-7 text-gray-900 hover:rotate-12 transform transition duration-300 ease-in-out flex-shrink-0"
          />
          <span className="text-xl font-bold text-gray-900 whitespace-nowrap flex-shrink-0">
            Blinx
          </span>
        </NavLinks>
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Middle: Navbar Links */}
      <div className="flex items-center gap-4 lg:gap-10">
        <NavLinks href="/#pricing">Pricing</NavLinks>
        <SignedIn>
          <NavLinks href="/dashboard">Your Summaries</NavLinks>
        </SignedIn>
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Right: Conditional Link */}
      <div className="flex items-center">
        <SignedIn>
          <div className="flex items-center gap-2">
            <NavLinks href="/upload">Upload PDF</NavLinks>
            <div>Pro</div>
            <Button>User</Button>
          </div>
        </SignedIn>
        
        <SignedOut>
          <NavLinks href="/sign-in">Sign In</NavLinks>
        </SignedOut>
      </div>
    </nav>
  );
}