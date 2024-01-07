import { type Image, type Slug } from "sanity";
import { type Block, type BaseSanityType } from "./BaseSanity.type";

export type Author = {
  name: string;
  image: Image;
  bio: Block[];
  slug: Slug;
} & BaseSanityType;
