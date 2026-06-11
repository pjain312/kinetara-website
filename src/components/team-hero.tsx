import Link from "next/link";

export function TeamHero() {
  return (
    <section className="bg-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
          Meet the certified physiotherapists behind Kinetara — experts in spine,
          pelvic floor, dry needling, and personalised rehabilitation in CR Park,
          South Delhi.
        </p>
        <div className="flex justify-center items-center space-x-2 text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <span>Our Team</span>
        </div>
      </div>
    </section>
  );
}
