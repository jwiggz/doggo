import Link from "next/link";
import { getAllRuns } from "@/data/helpers";
import VideoPlayer from "@/components/VideoPlayer";

export const metadata = {
  title: "Run Videos | DOGGO",
  description: "Watch videos of us running with rescue dogs around town.",
};

export default function RunsPage() {
  const runs = getAllRuns();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="text-teal font-bold uppercase tracking-[0.2em] text-sm mb-2">
          Hit the Pavement
        </p>
        <h1 className="text-5xl sm:text-6xl font-black mb-4">Run Videos</h1>
        <p className="text-cream/60 text-lg max-w-2xl">
          Every run is a chance for a rescue dog to show off their personality.
          Check out our latest adventures.
        </p>
      </section>

      {/* Video Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {runs.map((run) => (
            <div
              key={run.id}
              className="bg-charcoal-light rounded-2xl overflow-hidden border border-white/5 hover:border-teal/30 transition-all"
            >
              <VideoPlayer src={run.video} className="aspect-video" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-xl font-bold text-cream">{run.title}</h2>
                  <span className="text-cream/40 text-sm whitespace-nowrap ml-4">
                    {run.date}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3 text-sm text-cream/50">
                  <span>{run.location}</span>
                  <span>·</span>
                  <span>{run.distance}</span>
                </div>
                <p className="text-cream/60 text-sm leading-relaxed mb-4">
                  {run.description}
                </p>
                <Link
                  href={`/dogs/${run.dog}`}
                  className="text-orange font-bold text-sm hover:underline underline-offset-4"
                >
                  Meet {run.dogName} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
