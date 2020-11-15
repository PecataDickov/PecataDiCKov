import Avatar from "../components/avatar";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href="https://anonfiles.com/He80V4pdpa/facebook-stelapetrova56232_1_1_zip">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
    </div>
  );
}
