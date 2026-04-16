import Link from "next/link";
import DogCard from "@/components/DogCard";
import { getAvailableDogs, getAllRuns } from "@/data/helpers";

export default function Home() {
  const dogs = getAvailableDogs();
  const runs = getAllRuns().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Gradient background (replace with video later) */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,180,216,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="text-orange font-bold uppercase tracking-[0.3em] text-sm mb-6">
            Every Mile Matters
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] mb-6">
            RUN WITH
            <br />
            <span className="text-orange">RESCUE DOGS</span>
          </h1>
          <p className="text-cream/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We hit the streets with shelter dogs to show the world how amazing
            they are. Every run is a chance for a dog to find their forever home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dogs"
              className="px-8 py-4 bg-orange hover:bg-orange-dark text-white font-bold text-lg rounded-full transition-all hover:shadow-[0_0_30px_rgba(255,107,53,0.4)] hover:-translate-y-0.5"
            >
              Meet the Dogs
            </Link>
            <Link
              href="/runs"
              className="px-8 py-4 border-2 border-cream/20 hover:border-orange text-cream font-bold text-lg rounded-full transition-all hover:-translate-y-0.5"
            >
              Watch Runs
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cream/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Available Dogs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-orange font-bold uppercase tracking-[0.2em] text-sm mb-2">
              Looking for a Home
            </p>
            <h2 className="text-4xl sm:text-5xl font-black">
              Meet Our Dogs
            </h2>
          </div>
          <Link
            href="/dogs"
            className="hidden sm:block text-orange font-bold hover:underline underline-offset-4"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogs.map((dog) => (
            <DogCard key={dog.slug} dog={dog} />
          ))}
        </div>

        <Link
          href="/dogs"
          className="sm:hidden block text-center text-orange font-bold mt-8 hover:underline underline-offset-4"
        >
          View All Dogs →
        </Link>
      </section>

      {/* Latest Runs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-teal font-bold uppercase tracking-[0.2em] text-sm mb-2">
                Hit the Pavement
              </p>
              <h2 className="text-4xl sm:text-5xl font-black">
                Latest Runs
              </h2>
            </div>
            <Link
              href="/runs"
              className="hidden sm:block text-teal font-bold hover:underline underline-offset-4"
            >
              All Runs →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {runs.map((run) => (
              <div
                key={run.id}
                className="bg-charcoal rounded-2xl overflow-hidden border border-white/5 hover:border-teal/30 transition-all group"
              >
                <div className="aspect-video bg-gradient-to-br from-teal/20 to-orange/10 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-teal/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-cream text-lg mb-1">{run.title}</h3>
                  <p className="text-cream/50 text-sm mb-2">
                    {run.location} · {run.distance}
                  </p>
                  <p className="text-cream/40 text-sm line-clamp-2">{run.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Every Dog Deserves<br />
            <span className="text-orange">A Running Buddy</span>
          </h2>
          <p className="text-cream/60 text-lg mb-10 leading-relaxed">
            We partner with local shelters to take rescue dogs on runs around town.
            It gives them exercise, socialization, and a chance to show off their
            personality to potential adopters. No fees, no middlemen — just dogs
            and the open road.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-4 bg-orange hover:bg-orange-dark text-white font-bold text-lg rounded-full transition-all hover:shadow-[0_0_30px_rgba(255,107,53,0.4)]"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </>
  );
}
