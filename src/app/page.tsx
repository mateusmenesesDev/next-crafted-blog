import ArticleCard from "~/components/ArticleCard";

export default function HomePage() {
  return (
    <main className="m-auto max-w-[110rem] px-5">
      <section>
        <span className="mb-2 block text-2xl font-semibold">
          Posts recentes
        </span>
        <div className="mb-14 flex flex-col gap-8 lg:gap-x-8 lg:gap-y-2 xl:grid xl:grid-cols-2">
          <ArticleCard className="row-span-2" />
          <ArticleCard variant="horizontal" />
          <ArticleCard variant="horizontal" />
        </div>
        <ArticleCard variant="horizontal" />
      </section>
      <section className="mt-16">
        <span className="mb-8 block text-2xl font-semibold">
          Todos os posts
        </span>
        <div className="grid gap-8 lg:grid-cols-3">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </section>
    </main>
  );
}
