import Image from "next/image";
import cn from "~/utils/twMerge";
import { type Post } from "~/types/Post.type";
import { urlForImage } from "../../sanity/lib/image";

type Props = {
  variant?: "horizontal" | "vertical";
  className?: string;
  post: Post;
};

export default function ArticleCard({
  variant = "vertical",
  className,
  post,
}: Props) {
  return (
    <article
      className={cn({ "gap-6 lg:flex": variant === "horizontal" }, className)}
    >
      <div className="relative h-56 flex-1 md:h-72">
        <Image
          src={urlForImage(post.mainImage)}
          alt="Imagem do post"
          fill
          className={cn("object-cover")}
        />
      </div>
      <div
        className={cn("mt-6 flex flex-1 flex-col", {
          "lg:mt-0": variant !== "vertical",
        })}
      >
        <span className="mb-3 block text-sm font-semibold text-accent">
          {post.author.name} - {new Date(post.publishedAt).toLocaleDateString()}
        </span>
        <h2 className="mb-3 text-xl font-semibold">{post.title}</h2>
        <p className="text-base text-secondary">{post.description}</p>
        <div className="mt-3 flex gap-[0.62rem] lg:mt-6">
          {post.categories.map((category) => (
            <span
              key={category._id}
              className="rounded-2xl bg-[#F9F5FF] px-[0.62rem] py-[0.12rem] text-sm font-medium leading-[1.25rem] text-[#6941C6]"
            >
              {category.title}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
