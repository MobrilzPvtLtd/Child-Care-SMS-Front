/**
 * Generates a random password of 8 characters,
 * including at least one letter, one number, and one special character.
 */
export function generatePassword(): string {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const special = "!@#$&?";
  const all = letters + numbers + special;

  function getRandomChar(charSet: string): string {
    return charSet[Math.floor(Math.random() * charSet.length)];
  }

  // Ensure at least one of each required type
  let password = [
    getRandomChar(letters),
    getRandomChar(numbers),
    getRandomChar(special),
  ];

  // Fill the rest with random chars from all sets
  for (let i = password.length; i < 8; i++) {
    password.push(getRandomChar(all));
  }

  // Shuffle the password array to ensure randomness
  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  return password.join("");
}
