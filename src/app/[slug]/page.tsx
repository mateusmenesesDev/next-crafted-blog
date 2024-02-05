import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import PortableTextComponents from "~/components/PortableTextComponents";
import { sanityQueries } from "~/services/sanityQueries";

export async function generateStaticParams() {
  const posts = await sanityQueries.allPosts();

  return posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
}

export default async function page({ params }: { params: { slug: string } }) {
  const post = await sanityQueries.getBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="m-auto px-5 lg:max-w-[50%]">
      <span className="text-sm font-semibold text-accent">
        {` ${new Date(post.publishedAt).toLocaleDateString()} - ${post?.author
          .name}`}
      </span>
      <article>
        <PortableText value={post.body} components={PortableTextComponents} />
      </article>
    </main>
  );
}
