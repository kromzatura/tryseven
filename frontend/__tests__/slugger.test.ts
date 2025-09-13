import { describe, it, expect } from 'vitest';
import { createUniqueSlugger, slugify } from '@/lib/slugger';

describe('slugify', () => {
  it('normalizes text to a URL-safe slug', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
    expect(slugify('  Trim  Me  ')).toBe('trim-me');
    expect(slugify('99.9% Perfection')).toBe('99-9-perfection');
  });
});

describe('createUniqueSlugger', () => {
  it('appends counters for duplicate slugs', () => {
    const unique = createUniqueSlugger();
    expect(unique('Intro')).toBe('intro');
    expect(unique('Intro')).toBe('intro-2');
    expect(unique('Intro')).toBe('intro-3');
  });

  it('treats different headings with same base slug as duplicates', () => {
    const unique = createUniqueSlugger();
    expect(unique('The Purity & Quality Advantage — 99.9% Perfection')).toBe('the-purity-quality-advantage-99-9-perfection');
    expect(unique('The Purity & Quality Advantage - 99.9% Perfection')).toBe('the-purity-quality-advantage-99-9-perfection-2');
  });
});
