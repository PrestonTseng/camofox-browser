import { describe, expect, test } from '@jest/globals';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync(new URL('../../package.json', import.meta.url), 'utf8'));

describe('runtime dependency compatibility', () => {
  test('pins camoufox-js to the browser-compatible release', () => {
    expect(packageJson.dependencies['camoufox-js']).toBe('0.10.2');
  });
});
