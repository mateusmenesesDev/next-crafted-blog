import { type Image, type Slug } from "sanity";
import { type Author } from "./Author.type";
import { type Block, type BaseSanityType } from "./BaseSanity.type";
import { type Category } from "./Category.type";

export type Post = {
  title: string;
  author: Author;
  slug: Slug;
  mainImage: Image;
  categories: Category[];
  publishedAt: Date;
  body: Block[];
} & BaseSanityType;
