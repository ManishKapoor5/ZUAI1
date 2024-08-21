export function formatDate(date) {
    return new Intl.DateTimeFormat('en-US').format(date);
  }
  
  export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // cn.js
/**
 * Combines class names based on the truthiness of the arguments.
 * @param {...(string|false|null|undefined)} args - Class names or conditions.
 * @returns {string} - Combined class names.
 */
export function cn(...args) {
    return args.filter(Boolean).join(' ');
  }
  