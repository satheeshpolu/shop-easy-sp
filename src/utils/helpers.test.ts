// formatText.test.ts
import { formatText } from './helpers';

describe('formatText', () => {
  it('should replace dashes with spaces', () => {
    expect(formatText('hello-world')).toBe('Hello World');
  });

  it('should capitalize the first letter of each word', () => {
    expect(formatText('lorem ipsum dolor')).toBe('Lorem Ipsum Dolor');
  });

  it('should handle strings with multiple dashes', () => {
    expect(formatText('make-ecommerce-app-fast')).toBe('Make Ecommerce App Fast');
  });

  it('should return empty string when input is empty', () => {
    expect(formatText('')).toBe('');
  });

  it('should not alter text that is already formatted', () => {
    expect(formatText('Already Formatted Text')).toBe('Already Formatted Text');
  });

  it('should handle single word', () => {
    expect(formatText('hello')).toBe('Hello');
  });

  it('should capitalize a single word and lowercase the rest', () => {
    expect(formatText('HELLO')).toBe('Hello');
  });
});
