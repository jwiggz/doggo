import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllDogs, getDogBySlug, getRunsByDog, formatTag } from "@/data/helpers";
import VideoPlayer from "@/components/VideoPlayer";

export function generateStaticParams() {
  return getAllDogs().map((dog) => ({ slug: dog.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const dog = getDogBySlug(slug);
    if (!dog) return { title: "Dog Not Found" };
    return {
      title: `${dog.name} | DOGGO`,
      description: dog.bio.slice(0, 160),
    };
  });
}

export default async function DogProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dog = getDogBySlug(slug);
  if (!dog) notFound();

  const runs = getRunsByDog(slug);
  const isAvailable = dog.status === "available";

  return (
    <div className="min-h-screen">
      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/dogs" className="text-cream/50 hover:text-orange transition-colors text-sm font-medium">
          ← Back to All Dogs
        </Link>
      </div>

      {/* Hero section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Photo */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-charcoal-light">
            <div className="w-full h-full bg-gradient-to-br from-orange/20 to-teal/20 flex items-center justify-center text-[120px]">
              🐕
            </div>
            {/* Status badge */}
            <span
              className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider ${
                isAvailable
                  ? "bg-success text-white"
                  : "bg-adopted text-white"
              }`}
            >
              {isAvailable ? "Available for Adoption" : "Adopted!"}
            </span>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl sm:text-6xl font-black mb-2">{dog.name}</h1>
            {dog.tagline && (
              <p className="text-orange italic text-xl font-semibold mb-4">&ldquo;{dog.tagline}&rdquo;</p>
            )}

            <div className="flex flex-wrap gap-4 mb-6 text-cream/60">
              <span className="flex items-center gap-1.5">
                <span className="text-orange font-bold">Breed:</span> {dog.breed}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-orange font-bold">Age:</span> {dog.age}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-orange font-bold">Weight:</span> {dog.weight}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-orange font-bold">Gender:</span> {dog.gender}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {dog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-teal/15 text-teal text-sm font-medium rounded-full"
                >
                  {formatTag(tag)}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p className="text-cream/70 text-lg leading-relaxed mb-8">{dog.bio}</p>

            {/* CTA */}
            {isAvailable ? (
              <a
                href={dog.adoptionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange hover:bg-orange-dark text-white font-bold text-lg rounded-full transition-all hover:shadow-[0_0_30px_rgba(255,107,53,0.4)] hover:-translate-y-0.5 w-fit"
              >
                Adopt {dog.name} at {dog.shelterName} ↗
              </a>
            ) : (
              <div className="px-6 py-4 bg-adopted/20 border border-adopted/30 rounded-2xl text-center">
                <p className="text-adopted font-bold text-lg">
                  {dog.name} has been adopted! 🎉
                </p>
                <p className="text-cream/50 text-sm mt-1">
                  Happy trails, {dog.name}!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Run Videos */}
      {runs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-black mb-8">
            <span className="text-teal">Run Videos</span> with {dog.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {runs.map((run) => (
              <div key={run.id} className="space-y-3">
                <VideoPlayer src={run.video} className="aspect-video" />
                <div>
                  <h3 className="font-bold text-cream">{run.title}</h3>
                  <p className="text-cream/50 text-sm">
                    {run.location} · {run.distance} · {run.date}
                  </p>
                  <p className="text-cream/40 text-sm mt-1">{run.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Other dogs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="text-center">
          <h2 className="text-2xl font-black mb-4">Meet More Dogs</h2>
          <Link
            href="/dogs"
            className="text-orange font-bold hover:underline underline-offset-4"
          >
            View All Dogs →
          </Link>
        </div>
      </section>
    </div>
  );
}
