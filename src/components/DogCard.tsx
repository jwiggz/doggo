import Link from "next/link";
import { Dog, formatTag } from "@/data/helpers";

function StatusBadge({ status }: { status: Dog["status"] }) {
  const styles = {
    available: "bg-success text-white",
    adopted: "bg-adopted text-white",
    foster: "bg-teal text-white",
  };

  const labels = {
    available: "Available",
    adopted: "Adopted!",
    foster: "In Foster",
  };

  return (
    <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

export default function DogCard({ dog }: { dog: Dog }) {
  return (
    <Link href={`/dogs/${dog.slug}`} className="group block">
      <div className="relative bg-charcoal-light rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 group-hover:border-orange/30 group-hover:shadow-[0_0_30px_rgba(255,107,53,0.15)] group-hover:-translate-y-1">
        {/* Photo */}
        <div className="relative aspect-[4/3] bg-charcoal overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-orange/20 to-teal/20 flex items-center justify-center text-6xl">
            🐕
          </div>
          <StatusBadge status={dog.status} />
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-black text-cream group-hover:text-orange transition-colors">
              {dog.name}
            </h3>
            <span className="text-cream/50 text-sm">{dog.age}</span>
          </div>
          <p className="text-cream/60 text-sm mb-3">{dog.breed}</p>
          <div className="flex flex-wrap gap-1.5">
            {dog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-teal/15 text-teal text-xs font-medium rounded-full"
              >
                {formatTag(tag)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
