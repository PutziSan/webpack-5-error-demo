let sideEffect = 0;

export function test(a, b) {
  sideEffect++;
  return sideEffect + a + b;
}
