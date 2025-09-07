import "@testing-library/jest-dom";
// Polyfill structuredClone for Jest / Node < 17
if (typeof global.structuredClone !== "function") {
  global.structuredClone = (obj: any) => {
    try {
      return JSON.parse(JSON.stringify(obj));
    } catch {
      return obj; // fallback: shallow return if not serializable
    }
  };
}
