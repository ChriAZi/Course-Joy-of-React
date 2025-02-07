import React, { Suspense } from "react";
import { getNavLinks } from "@/helpers/web-base-helpers";
import Link from "next/link";

async function NavLinks({ amount, type }) {
  let navLinks = await getNavLinks();
  if (typeof amount === "number" && amount > 0) {
    navLinks = navLinks.slice(0, amount);
  }
  return (
    <nav>
      <ol className="header-nav-links">
        {navLinks.map(({ slug, label, href }) => (
          <li key={slug}>
            <Link className={`header-nav-link ${type}`} href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default NavLinks;
