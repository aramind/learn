import Link from "next/link";

export default function Home() {
  return (
    <div style={{}}>
      <h1>HOME PAGE</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/articles/breaking-news-123?lang=en"}>Read in English</Link>
      <Link href={"/articles/breaking-news-123?lang=fr"}>Read in French</Link>
    </div>
  );
}
