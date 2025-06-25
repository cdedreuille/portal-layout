import Link from "next/link";

export const Links = () => {
  return (
    <div className="flex flex-col">
      <Link href="/island" className="block">
        Version 1 - Island
      </Link>
      <Link href="/semi-island" className="block">
        Version 2 - Semi island
      </Link>
      <Link href="/no-gaps" className="block">
        Version 3 - No gaps
      </Link>
    </div>
  );
};
