import type { FC, ReactNode } from "react";
import { Image } from "@chakra-ui/react";

export interface IPicture {
  src: string;
  srcset: string;
  alt: string;
  height: string;
}

const Picture: FC<IPicture> = ({ src, srcset, alt, height }: IPicture) => {
  return (
    <>
      <picture>
        <source srcSet={`/assets/${srcset}`} type="image/webp" />
        <source srcSet={`/assets/${srcset}`} type="image/svg" />
        <source srcSet={`/assets/${srcset}`} type="image/jpg" />
        <source srcSet={`/assets/${srcset}`} type="image/png" />
        <Image src={`/assets/${src}`} alt={alt} height={height} />
      </picture>
    </>
  );
};

export default Picture;
