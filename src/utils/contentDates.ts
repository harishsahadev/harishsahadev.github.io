export type ContentDatePrecision = "month" | "day";

export interface ContentDate {
  raw: string;
  value: Date;
  precision: ContentDatePrecision;
}

const MONTH_DATE_PATTERN = /^\d{4}-\d{2}$/;
const FULL_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function createUtcDate(year: number, month: number, day: number) {
  return new Date(Date.UTC(year, month - 1, day));
}

export function parseContentDate(input: string | Date): ContentDate {
  if (input instanceof Date) {
    if (Number.isNaN(input.getTime())) {
      throw new Error("Invalid date");
    }

    const raw = input.toISOString().slice(0, 10);
    return {
      raw,
      value: createUtcDate(
        input.getUTCFullYear(),
        input.getUTCMonth() + 1,
        input.getUTCDate(),
      ),
      precision: "day",
    };
  }

  const raw = input.trim();

  if (MONTH_DATE_PATTERN.test(raw)) {
    const [year, month] = raw.split("-").map(Number);
    return {
      raw,
      value: createUtcDate(year, month, 1),
      precision: "month",
    };
  }

  if (FULL_DATE_PATTERN.test(raw)) {
    const [year, month, day] = raw.split("-").map(Number);
    return {
      raw,
      value: createUtcDate(year, month, day),
      precision: "day",
    };
  }

  throw new Error("Expected date in yyyy-mm or yyyy-mm-dd format");
}

export function compareContentDatesDesc(a: ContentDate, b: ContentDate) {
  return b.value.getTime() - a.value.getTime();
}

export function formatContentDate(date: ContentDate, style: "month" | "long" = "month") {
  if (style === "long" && date.precision === "day") {
    return date.value.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
  }

  return date.value.toLocaleDateString("en-US", {
    month: date.precision === "day" && style === "long" ? "long" : "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function getContentDateTime(date: ContentDate) {
  return date.raw;
}
