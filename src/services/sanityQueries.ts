import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { env } from "~/env";
import { type Post } from "~/types/Post.type";

const makeSanityRequest = async <T>(
  query: string,
  slug?: string,
): Promise<T> => {
  try {
    let request: T;

    if (slug) {
      request = await client.fetch(query, { slug });
    } else {
      request = await client.fetch(query);
    }

    return request;
  } catch (err) {
    if (err instanceof Error && env.NODE_ENV === "development") {
      console.error(err.message);
      throw err;
    }
    throw new Error("Something went wrong");
  }
};

export const sanityQueries = {
  allPosts: async () => {
    const posts: Post[] = await makeSanityRequest(groq`
    *[_type == "post"] | order(publishedAt desc) {
      ...,
      "categories": categories[]->,
      "author": author->,
    }
  `);
    return posts;
  },
};
