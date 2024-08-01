import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
};
export default function Page() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Settings
      </h1>
    </div>
  );
}
