import { newE2EPage } from '@stencil/core/testing';

describe('git-edit', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<git-edit></git-edit>');
    const element = await page.find('git-edit');
    expect(element).toHaveClass('hydrated');
  });
});
