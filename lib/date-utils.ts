/**
 * Utility functions for dynamic date calculations
 * Ensures the site never needs manual date updates
 */

export interface DateRange {
  start: Date;
  end?: Date; // undefined means "Present"
}

/**
 * Format a date as "MMM YYYY" (e.g., "Jan 2024")
 */
export function formatMonthYear(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
}

/**
 * Format a date range as "MMM YYYY - MMM YYYY" or "MMM YYYY - Present"
 */
export function formatDateRange(range: DateRange): string {
  const start = formatMonthYear(range.start);
  const end = range.end ? formatMonthYear(range.end) : 'Present';
  return `${start} - ${end}`;
}

/**
 * Calculate years between two dates (or from date to now if no end date)
 * Returns fractional years (e.g., 2.5 years)
 */
export function calculateYears(range: DateRange): number {
  const endDate = range.end || new Date();
  const diffMs = endDate.getTime() - range.start.getTime();
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  return diffYears;
}

/**
 * Format duration as "X years" or "X+ years" for ongoing periods
 */
export function formatDuration(range: DateRange): string {
  const years = calculateYears(range);
  const roundedYears = Math.floor(years);

  if (!range.end) {
    // Ongoing - show as "X+ years"
    return `${roundedYears}+ years`;
  }

  // Completed - show exact years
  if (roundedYears < 1) {
    const months = Math.round(years * 12);
    return months === 1 ? '1 month' : `${months} months`;
  }

  return roundedYears === 1 ? '1 year' : `${roundedYears} years`;
}

/**
 * Calculate total years of professional experience from career start year to now
 */
export function calculateCareerYears(careerStartYear: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - careerStartYear;
}

/**
 * Create a DateRange from a start date string
 * Supports formats: "YYYY-MM", "YYYY-MM-DD"
 */
export function createDateRange(
  startStr: string,
  endStr?: string
): DateRange {
  const parseDate = (str: string): Date => {
    const parts = str.split('-');
    if (parts.length === 2) {
      // "YYYY-MM" format
      return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, 1);
    }
    // "YYYY-MM-DD" format or ISO string
    return new Date(str);
  };

  return {
    start: parseDate(startStr),
    end: endStr ? parseDate(endStr) : undefined,
  };
}
