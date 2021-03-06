import cn from "classnames";
import Link from "next/link";

export default function CoverImage({ title, src, slug }) {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  //anonfiles.com/He80V4pdpa/facebook-stelapetrova56232_1_1_zip
  const isHero = slug === "dynamic-routing";
  const isPreview = slug === "preview";
  const isHelloWorld = slug === "hello-world";
  return (
    <div className="sm:mx-0">
      {!isHero ? (
        <Link
          href={
            isHelloWorld
              ? "https://anonfiles.com/p5A7Vfp7p4/PeturDICKov._zip"
              : "https://anonfiles.com/He80V4pdpa/facebook-stelapetrova56232_1_1_zip"
          }>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      )}
    </div>
  );
}
