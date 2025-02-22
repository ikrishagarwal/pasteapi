// deno-lint-ignore no-explicit-any
export function log(...args: any[]): void {
  console.log(`${localeDateString()}`, `ERROR`, ...args);
}

function localeDateString(): string {
  const date = new Date();
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();
  return `${dateString} ${timeString}`;
}
