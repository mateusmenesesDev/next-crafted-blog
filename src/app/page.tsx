import ArticleCard from "~/components/ArticleCard";
import { sanityQueries } from "~/services/sanityQueries";
import { type Post } from "~/types/Post.type";

export default async function HomePage() {
  const posts: Post[] = await sanityQueries.allPosts();
  return (
    <main className="m-auto max-w-[110rem] px-5">
      <section>
        <span className="mb-2 block text-2xl font-semibold">
          Posts recentes
        </span>
        <div className="mb-14 flex flex-col gap-8 lg:gap-x-8 lg:gap-y-2 xl:grid xl:grid-cols-2">
          <ArticleCard post={posts[0]!} className="row-span-2" />
          {posts.map(
            (post, index) =>
              index > 0 &&
              index < 3 && (
                <ArticleCard post={post} key={post._id} variant="horizontal" />
              ),
          )}
        </div>
        {posts.length > 3 && (
          <ArticleCard post={posts[3]!} variant="horizontal" />
        )}
      </section>
      <section className="mt-16">
        <span className="mb-8 block text-2xl font-semibold">
          Todos os posts
        </span>
        <div className="grid gap-8 lg:grid-cols-3">
          {posts.map(
            (post, index) =>
              index > 3 && <ArticleCard post={post} key={post._id} />,
          )}
        </div>
      </section>
    </main>
  );
}
