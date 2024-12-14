/**
 * ValidationUtils.ts
 * A utility class for common validation operations.
 */

export class ValidationUtils {
  /**
   * Validates if a string is a valid email address.
   * @param email - The email address to validate.
   * @returns True if the email is valid, false otherwise.
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validates if a string meets a strong password policy.
   * @param password - The password to validate.
   * @returns True if the password is strong, false otherwise.
   */
  static isStrongPassword(password: string): boolean {
    // Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  /**
   * Checks if a given value is a valid integer.
   * @param value - The value to check.
   * @returns True if the value is an integer, false otherwise.
   */
  static isInteger(value: any): boolean {
    return Number.isInteger(value);
  }

  /**
   * Validates if a string is a valid ISO date (e.g., 2024-12-14).
   * @param date - The date string to validate.
   * @returns True if the date is valid, false otherwise.
   */
  static isValidISODate(date: string): boolean {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date) && !isNaN(new Date(date).getTime());
  }

  /**
   * Validates if a string is a valid phone number (basic example).
   * @param phone - The phone number to validate.
   * @returns True if the phone number is valid, false otherwise.
   */
  static isValidPhoneNumber(phone: string): boolean {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
    return phoneRegex.test(phone);
  }

  /**
   * Checks if a string exceeds a maximum length.
   * @param str - The string to check.
   * @param maxLength - The maximum allowed length.
   * @returns True if the string is within the limit, false otherwise.
   */
  static hasMaxLength(str: string, maxLength: number): boolean {
    return str.length <= maxLength;
  }

  /**
   * Checks if a string is not empty.
   * @param str - The string to check.
   * @returns True if the string is not empty, false otherwise.
   */
  static isNotEmpty(str: string): boolean {
    return str.trim().length > 0;
  }

  /**
   * Validates if a value is within a specific range.
   * @param value - The value to check.
   * @param min - The minimum allowed value.
   * @param max - The maximum allowed value.
   * @returns True if the value is within range, false otherwise.
   */
  static isInRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
  }

  /**
   * Checks if a string contains only alphabetic characters.
   * @param str - The string to check.
   * @returns True if the string contains only alphabetic characters, false otherwise.
   */
  static isAlphabetic(str: string): boolean {
    const alphaRegex = /^[A-Za-z]+$/;
    return alphaRegex.test(str);
  }

  /**
   * Checks if a string contains only alphanumeric characters.
   * @param str - The string to check.
   * @returns True if the string contains only alphanumeric characters, false otherwise.
   */
  static isAlphanumeric(str: string): boolean {
    const alphanumericRegex = /^[A-Za-z0-9]+$/;
    return alphanumericRegex.test(str);
  }
}
