import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility to merge tailwind classes with ease.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Common regex for phone numbers in Qatar
 */
export const QATAR_PHONE_REGEX = /^(?:\+974|00974)?(?:\d{8})$/;

/**
 * Formats a date for the blog
 */
export function formatDate(date: string | Date, locale: 'en' | 'ar' = 'en') {
  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-QA' : 'en-US', {
    dateStyle: 'long',
  }).format(new Date(date));
}
