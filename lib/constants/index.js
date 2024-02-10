export function capitalizeFirstLetter(string) {
  if (!string) {
    return string; // Mengembalikan string asli jika string kosong atau null
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
