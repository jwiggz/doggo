import dogsData from "./dogs.json";
import runsData from "./runs.json";

export interface Dog {
  slug: string;
  name: string;
  breed: string;
  age: string;
  weight: string;
  gender: string;
  status: "available" | "adopted" | "foster";
  bio: string;
  photo: string;
  photos: string[];
  videos: string[];
  tags: string[];
  adoptionUrl: string;
  shelterName: string;
}

export interface Run {
  id: string;
  title: string;
  dog: string;
  dogName: string;
  location: string;
  date: string;
  distance: string;
  video: string;
  thumbnail: string;
  description: string;
}

export function getAllDogs(): Dog[] {
  return dogsData as Dog[];
}

export function getAvailableDogs(): Dog[] {
  return getAllDogs().filter((dog) => dog.status === "available");
}

export function getAdoptedDogs(): Dog[] {
  return getAllDogs().filter((dog) => dog.status === "adopted");
}

export function getDogBySlug(slug: string): Dog | undefined {
  return getAllDogs().find((dog) => dog.slug === slug);
}

export function getAllRuns(): Run[] {
  return runsData as Run[];
}

export function getRunsByDog(dogSlug: string): Run[] {
  return getAllRuns().filter((run) => run.dog === dogSlug);
}

export function formatTag(tag: string): string {
  return tag
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
