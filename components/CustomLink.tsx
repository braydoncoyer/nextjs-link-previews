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
  let inImagePreview = false;
  let inLink = false;

  let handleMouseEnterImage = () => {};

  let handleMouseLeaveImage = () => {};

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
        {isHovering && (
          <Link href={href} passHref>
            <span
              className="w-56 h-44 absolute top-[-195px] left-1/2 transform -translate-x-[7rem] translate-y-8 flex items-start justify-center"
              onMouseEnter={handleMouseEnterImage}
              onFocus={handleMouseEnterImage}
              onMouseLeave={handleMouseLeaveImage}
              onBlur={handleMouseLeaveImage}
            >
              {imagePreview ? (
                <Image
                  fill
                  className="object-cover object-top w-56 h-40 bg-white rounded-md shadow-lg hover:ring-4 hover:ring-emerald-400"
                  src={imagePreview}
                  alt={children}
                />
              ) : (
                <span className="flex items-center justify-center w-56 h-40 bg-white rounded-md shadow-lg">
                  Loading...
                </span>
              )}
            </span>
          </Link>
        )}
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
