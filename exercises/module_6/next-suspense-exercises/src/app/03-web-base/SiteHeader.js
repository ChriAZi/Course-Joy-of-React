import React, { Suspense } from "react";
import Link from "next/link";

import { getNavLinks } from "@/helpers/web-base-helpers";
import NavLinks from "@/components/NavLinks/NavLinks";

async function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>
      <Suspense>
        <NavLinks amount={4} />
      </Suspense>
    </header>
  );
}

export default SiteHeader;
