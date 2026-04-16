import Link from "next/link";

export const metadata = {
  title: "About | DOGGO",
  description: "Learn about our mission to help rescue dogs find forever homes through running.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-orange font-bold uppercase tracking-[0.2em] text-sm mb-2">
          The Mission
        </p>
        <h1 className="text-5xl sm:text-6xl font-black mb-8">
          Dogs Deserve<br />
          <span className="text-orange">Better</span>
        </h1>

        <div className="space-y-6 text-cream/70 text-lg leading-relaxed">
          <p>
            Every year, millions of dogs end up in shelters waiting for someone
            to give them a chance. Many of them are incredible companions —
            loyal, loving, full of energy — but they never get the spotlight
            they deserve sitting behind kennel walls.
          </p>
          <p>
            That&apos;s where DOGGO comes in. We partner with local shelters to
            take rescue dogs out on runs around town. We film the adventures,
            share them online, and link directly to each dog&apos;s adoption
            page. No fees, no middlemen, no monetization — just a runner, a
            dog, and the open road.
          </p>
          <p>
            Running shows a side of dogs that shelter photos can&apos;t capture.
            You see their excitement, their personality, their joy. You see
            what life with them could actually look like. And that makes all
            the difference for potential adopters.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-charcoal-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-10 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "We Pick Up",
                desc: "We coordinate with local shelters to take adoptable dogs out for a run.",
                color: "text-orange",
              },
              {
                step: "02",
                title: "We Run",
                desc: "We hit the streets, trails, and parks — filming the whole adventure.",
                color: "text-teal",
              },
              {
                step: "03",
                title: "You Adopt",
                desc: "Watch the videos, fall in love, and adopt directly through the shelter.",
                color: "text-success",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className={`text-5xl font-black ${item.color} opacity-40`}>
                  {item.step}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Our Shelter Partners</h2>
          <p className="text-cream/60 mb-10">
            We work with these amazing organizations. Visit them directly to adopt.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "Wisconsin Humane Society",
                url: "https://www.wihumane.org/",
                desc: "Milwaukee's largest shelter, helping animals since 1879.",
              },
              {
                name: "Fetch Wisconsin",
                url: "https://fetchwi.org/",
                desc: "Rescue organization focused on finding homes for dogs in need.",
              },
              {
                name: "Rescue Me",
                url: "https://www.rescueme.org/",
                desc: "National pet adoption network connecting shelters with adopters.",
              },
            ].map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-charcoal-light rounded-2xl border border-white/5 hover:border-orange/30 transition-all group"
              >
                <h3 className="font-bold text-cream group-hover:text-orange transition-colors mb-2">
                  {partner.name}
                </h3>
                <p className="text-cream/50 text-sm mb-3">{partner.desc}</p>
                <span className="text-orange text-sm font-bold">Visit Site ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-charcoal-light">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-4">
            Want to <span className="text-orange">Help?</span>
          </h2>
          <p className="text-cream/60 text-lg mb-8">
            The best thing you can do is adopt, foster, or spread the word.
            Share our dog profiles with anyone who might be looking for a
            furry companion.
          </p>
          <Link
            href="/dogs"
            className="inline-block px-8 py-4 bg-orange hover:bg-orange-dark text-white font-bold text-lg rounded-full transition-all hover:shadow-[0_0_30px_rgba(255,107,53,0.4)]"
          >
            Meet the Dogs
          </Link>
        </div>
      </section>
    </div>
  );
}
