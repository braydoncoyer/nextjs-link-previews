import React, { useCallback } from "react";

import Image from "next/image";
import Link from "next/link";

type Props = {
  children: any;
  href: string;
};

export default function CustomLink({ children, href }: Props) {
  let [imagePreview, setImagePreview] = React.useState("");
  let [isHovering, setIsHovering] = React.useState(false);

  let handleMouseEnterLink = () => {};

  let handleMouseLeaveLink = () => {};

  let handleFetchImage = useCallback(async (url: string) => {}, []);

  React.useEffect(() => {
    handleFetchImage(href);

    return () => setImagePreview("");
  }, [href, handleFetchImage]);

  return (
    <span>
      <span className="relative z-10 hidden md:inline-block">
        {/* Link itself */}
        <Link
          href={href}
          className={`${isHovering && "underline"}`}
          onMouseEnter={handleMouseEnterLink}
          onMouseLeave={handleMouseLeaveLink}
          onFocus={handleMouseEnterLink}
          onBlur={handleMouseLeaveLink}
        >
          {children}
        </Link>

        {/* Image Preview */}
      </span>

      {/* For mobile devices */}
      <a
        href={href}
        className={`${isHovering && "underline"} md:hidden`}
        onMouseEnter={handleMouseEnterLink}
        onFocus={handleMouseEnterLink}
        onMouseLeave={handleMouseLeaveLink}
        onBlur={handleMouseLeaveLink}
      >
        {children}
      </a>
    </span>
  );
}
