import { storiesOf } from '@storybook/html';

storiesOf('Floating Header', module)
  .add(
    'default',
    () => `
  <div style="height: 1890px">
   1890px high div!
  <div>
  <floating-header>
 <p slot='logo'>Simple Example</p> 
  </floating-heder>
  `,
  )
  .add(
    'bigger-treshold',
    () => `
  <div style="height: 1890px">
   1890px high div!
  <div>
  <floating-header trigger-treshold='400'>
 <p slot='logo'>Simple Example 400px teshold</p> 
  </floating-heder>
  `,
  );
