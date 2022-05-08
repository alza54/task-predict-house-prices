export function flattenObject<T = Record<string, any>>(data: T, prefix: string = '') {
  const result: Record<string, string | number> = {};

  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      result[`${prefix}${key}`] = value.join(',');
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenObject(value, `${prefix}${key}.`));
    } else {
      result[`${prefix}${key}`] = value;
    }
  }

  return result;
};

export function fetchSequence<T>(items: Array<() => Promise<T>>): Promise<T[]> {
  return items
    .reduce(
      (promise: Promise<T[]>, func: () => Promise<T>) => promise
        .then(result => func().then(Array.prototype.concat.bind(result))), Promise.resolve([])
    );
}

export function sanitizeNumber(input: number, fallback: any = undefined): number | undefined {
  return Number.isNaN(input) ? fallback : input;
}
