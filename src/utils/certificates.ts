import type { CollectionEntry } from "astro:content";
import { compareContentDatesDesc } from "./contentDates";

type CertificationEntry = CollectionEntry<"certifications">;

export const sortCertificates = (certificates: CertificationEntry[]) =>
  [...certificates].sort((a, b) => {
    if (a.data.order != null && b.data.order != null) {
      return a.data.order - b.data.order;
    }

    if (a.data.order != null) return -1;
    if (b.data.order != null) return 1;

    return compareContentDatesDesc(a.data.date, b.data.date);
  });

export const getCertificateTags = (certificates: CertificationEntry[], initialVisibleTags = 6) => {
  const tagFrequency = new Map<string, number>();

  for (const certificate of certificates) {
    for (const tag of certificate.data.tags ?? []) {
      tagFrequency.set(tag, (tagFrequency.get(tag) ?? 0) + 1);
    }
  }

  const sortedTags = Array.from(tagFrequency.entries())
    .sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return a[0].localeCompare(b[0]);
    })
    .map(([tag]) => tag);

  return {
    sortedTags,
    featuredTags: sortedTags.slice(0, initialVisibleTags),
    extraTags: sortedTags.slice(initialVisibleTags),
  };
};
