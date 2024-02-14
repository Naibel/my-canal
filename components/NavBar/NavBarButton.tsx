import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { PageType } from "./NavBar";

type NavBarButtonProps = {
  to: PageType;
  children: ReactNode;
};

const NavBarButton = ({ to, children }: NavBarButtonProps) => {
  const pathname = usePathname();
  return (
    <Link href={`/${to}`}>
      <span
        className={`duration-300 uppercase italic font-semibold text-base md:text-lg ${
          pathname !== "/" + to + "/"
            ? "opacity-50 hover:opacity-100 active:opacity-70 cursor-pointer"
            : ""
        }`}
      >
        {children}
      </span>
    </Link>
  );
};

export default NavBarButton;
