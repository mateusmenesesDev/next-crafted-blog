/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { urlForImage } from "../../sanity/lib/image";

const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative m-10 mx-auto h-96 w-full">
          <Image
            className="object-contain"
            src={urlForImage(value)}
            alt="Imagem da Publicação"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 list-disc space-y-5 px-3 py-5 md:px-6">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal px-3 md:px-4">{children}</ol>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <p className="mb-6 break-words">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="py-10 text-3xl font-bold md:text-5xl">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="py-10 text-2xl font-semibold md:text-4xl">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="py-10 text-xl font-semibold md:text-3xl">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="py-10 text-lg font-semibold md:text-2xl">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-5 border-l-4 border-l-accent py-5 pl-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="font-bold text-accent underline hover:text-secondary"
        >
          {children}
        </Link>
      );
    },
  },
};

export default PortableTextComponents;
