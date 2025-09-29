import Link from "next/link";

export function AboutHero() {
  return (
    <section className="bg-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <div className="flex justify-center items-center space-x-2 text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <span>About Us</span>
        </div>
      </div>
    </section>
  );
}
