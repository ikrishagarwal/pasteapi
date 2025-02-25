// deno-lint-ignore no-explicit-any
export function log(...args: any[]): void {
  // console.log(`${localeDateString()}`, `ERROR`, ...args);

  // since deno deploy logs provide you with date and time
  console.log(`ERROR`, ...args);
}

// deno-lint-ignore no-unused-vars
function localeDateString(): string {
  const date = new Date();
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();
  return `${dateString} ${timeString}`;
}
