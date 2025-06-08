import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-container">
      <h2 className="text-large">{`Thank you for your purchase <3`}</h2>
      <Link href={"/"}>
        <button>Continue</button>
      </Link>
    </div>
  );
}
