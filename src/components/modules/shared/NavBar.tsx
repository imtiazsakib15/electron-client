"use client";

import Link from "next/link";
import Container from "@/components/modules/shared/Container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon, ShoppingCart } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="bg-white py-3 lg:py-4 border-b shadow-md">
      <Container>
        <div className="flex justify-between">
          <Link href={"/"}>
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-900">
              Electron
            </h3>
          </Link>
          <div className="flex items-center gap-5">
            <div className="hidden md:block space-x-5">
              {NAV_LINKS.map((navLink) => (
                <Link
                  key={navLink.path}
                  href={navLink.path}
                  className={`${
                    pathname === navLink.path
                  } ? 'border-b-2 border-blue-900' : ''`}
                >
                  {navLink.page}
                </Link>
              ))}
            </div>
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <MenuIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-52">
                  <DropdownMenuGroup>
                    {NAV_LINKS.map((navLink) => (
                      <DropdownMenuItem key={navLink.path}>
                        <Link
                          key={navLink.path}
                          href={navLink.path}
                          className={`${
                            pathname === navLink.path
                          } ? border-b-2 border-blue-900 : `}
                        >
                          {navLink.page}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link href={"/cart"}>
              <ShoppingCart />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
