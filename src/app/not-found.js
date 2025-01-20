import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 className="mb-2">Not Found</h2>
      <p className="pb-4">Could not find requested resource</p>
      <Link href="/" className=" bg-black text-white text-2xl px-4 py-2">
        Return Home
      </Link>
    </div>
  );
}
