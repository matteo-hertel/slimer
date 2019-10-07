import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'slimer',
  srcDir: 'src/components',
  outputTargets: [
    { type: 'dist', dir: 'build/components' },
    { type: 'docs-readme' },
  ],
};
