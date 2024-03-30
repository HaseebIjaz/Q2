import Image from "next/image";
import Link from "next/link";

export default function RootPage() {
  return (
    <>
      <div>This is a Routing Assignment 1</div>
      <Link href="/home" className={"cursor-pointer bg-red-950"}>
        <div>Click here to to go to the Home Page !</div>
      </Link>
    </>
  );
}
