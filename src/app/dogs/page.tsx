"use client";

import { useState } from "react";
import DogCard from "@/components/DogCard";
import { getAllDogs, type Dog } from "@/data/helpers";

type FilterStatus = "all" | "available" | "adopted";

export default function DogsPage() {
  const allDogs = getAllDogs();
  const [filter, setFilter] = useState<FilterStatus>("all");

  const filteredDogs =
    filter === "all" ? allDogs : allDogs.filter((dog) => dog.status === filter);

  const filters: { value: FilterStatus; label: string; count: number }[] = [
    { value: "all", label: "All Dogs", count: allDogs.length },
    { value: "available", label: "Available", count: allDogs.filter((d) => d.status === "available").length },
    { value: "adopted", label: "Adopted", count: allDogs.filter((d) => d.status === "adopted").length },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="text-orange font-bold uppercase tracking-[0.2em] text-sm mb-2">
          Find Your Match
        </p>
        <h1 className="text-5xl sm:text-6xl font-black mb-4">Our Dogs</h1>
        <p className="text-cream/60 text-lg max-w-2xl">
          Each of these dogs has been on a run with us and is looking for a
          forever home. Click on any dog to learn more and find out how to adopt.
        </p>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
        <div className="flex gap-3">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                filter === f.value
                  ? "bg-orange text-white"
                  : "bg-charcoal-light text-cream/60 hover:text-cream border border-white/10"
              }`}
            >
              {f.label}
              <span className="ml-2 opacity-60">{f.count}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Dog Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        {filteredDogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDogs.map((dog) => (
              <DogCard key={dog.slug} dog={dog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-cream/40 text-lg">No dogs found with that filter.</p>
          </div>
        )}
      </section>
    </div>
  );
}
