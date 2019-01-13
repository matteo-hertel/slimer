import { storiesOf } from '@storybook/html';

storiesOf('Git Edit', module)
  .add(
    'Default',
    () => `
  <git-edit file-path='posts/2018-12-31-a-new-hope.md'></git>
    `,
  )
  .add(
    'Large',
    () => `
  <git-edit large file-path='posts/2018-12-31-a-new-hope.md'></git>
    `,
  )
  .add(
    'Custom Repo and File Path',
    () => `
  <git-edit repo='http://github.com/matteo-hertel/slimer/blob/master' file-path='src/components/components/git-edit/stories.js'></git>
    `,
  );
