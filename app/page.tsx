import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href="/chat_home?tag=1">知识库问答</Link>
      <Link href="/chat_home?tag=2">数据库问答</Link>
    </main>
  );
}