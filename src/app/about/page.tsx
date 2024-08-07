import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};
export default function Page() {
  return (
    <div className="h-full w-full flex justify-center pt-48">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        About
      </h1>
    </div>
  );
}
