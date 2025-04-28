"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative h-[80dvh] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center bg-base-100 text-base-content">
      <h1 className="text-8xl md:text-9xl font-bold">404</h1>

      <p className="text-xl md:text-2xl text-base-content/80">
        THIS PAGE COULD NOT BE FOUND.
      </p>

      <div className="mt-12">
        <Link
          href="/"
          className="px-6 py-3 bg-secondary text-primary rounded-full border border-secondary/20 text-lg font-medium hover:shadow-lg transition-shadow focus-ring"
        >
          Back to Home
        </Link>
      </div>

      <div className="absolute bottom-8 left-8 flex flex-col gap-4">
        <Link
          href="/"
          className="text-base-content/60 hover:text-secondary"
        ></Link>
      </div>
    </section>
  );
}
