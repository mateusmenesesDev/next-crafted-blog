import Image from "next/image";
import postImg from "/public/dumb/dumb-1.jpeg";
import cn from "~/utils/twMerge";

type Props = {
  variant?: "horizontal" | "vertical";
  className?: string;
};

export default function ArticleCard({
  variant = "vertical",
  className,
}: Props) {
  return (
    <article
      className={cn({ "gap-6 lg:flex": variant === "horizontal" }, className)}
    >
      <div className="flex-1">
        <Image
          src={postImg}
          alt="Imagem do post"
          className={cn("h-full object-cover md:max-h-[14.25rem]", {
            // "max-w-[20rem]": variant === "horizontal",
          })}
        />
      </div>
      <div
        className={cn("mt-6 flex flex-1 flex-col", {
          "lg:mt-0": variant !== "vertical",
        })}
      >
        <span className="mb-3 block text-sm font-semibold text-accent">
          Mateus Meneses - 31/12/23
        </span>
        <h2 className="mb-3 text-xl font-semibold">UX review presentations</h2>
        <p className="text-base text-secondary">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </p>
        <div className="mt-3 flex gap-[0.62rem] lg:mt-6">
          <span className="bg-[#F9F5FF] px-[0.62rem] py-[0.12rem] text-sm font-medium leading-[1.25rem] text-[#6941C6]">
            Design
          </span>
          <span className="bg-[#EEF4FF] px-[0.62rem] py-[0.12rem] text-sm font-medium leading-[1.25rem] text-[#3538CD]">
            Research
          </span>
          <span className="bg-[#FDF2FA] px-[0.62rem] py-[0.12rem] text-sm font-medium leading-[1.25rem] text-[#C11574]">
            Presentation
          </span>
        </div>
      </div>
    </article>
  );
}
