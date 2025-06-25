import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col p-8">
      <Link href="/island" className="block">
        Version 1 - Island
      </Link>
      <Link href="/full" className="block">
        Version 2 - Full
      </Link>
    </div>
  );
}
