'use client' 

import Link from "next/link";
import cn from "clsx";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLinks({ href, children, className }: NavLinksProps) {
    const pathname = usePathname();
    const isActive = pathname === href || (href !=='/' && pathname.startsWith(href));
  return (
    <Link 
      href={href}
      className={cn(
        "transition-colors duration-200 text-sm font-medium hover:text-rose-500",
        className,
        isActive && "text-rose-500"
      )}
    >
      {children}
    </Link>
  );
}