"use client";

import { navItems } from "@/constants/nav.constants";
import React, { useState } from "react";
import NavDropdown from "./NavDropdown";

const NavItems = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  return (
    <nav className="flex items-center justify-center">
      {navItems?.map((item) => (
        <NavDropdown
          onOpen={() =>
            setOpenDropdown((prev) => (prev === item.label ? null : item.label))
          }
          isOpen={openDropdown === item.label}
          label={item?.label}
          options={item.children}
          key={item.path}
        />
      ))}
    </nav>
  );
};

export default NavItems;
