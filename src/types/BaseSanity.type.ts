/* eslint-disable @typescript-eslint/no-explicit-any */
import { type SanitySchemas } from "./SanitySchemas.type";

export type BaseSanityType = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: SanitySchemas;
  _updatedAt: string;
};

export type Block = {
  _key: string;
  _type: "block";
  children: any[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
};
