import Link from "next/link";
import React from "react";

const Links = () => {
  const links = [
    { page: "Homepage", path: "/" },
    { page: "About", path: "/about" },
    { page: "Contact", path: "/contact" },
    { page: "Blog", path: "/blog" },
  ];

  console.log(links,"links");
  return (
    <div>
      {links.map((link) => (
        <Link href={link.path}> {link.page}</Link>
      ))}
    </div>
  );
};

export default Links;
