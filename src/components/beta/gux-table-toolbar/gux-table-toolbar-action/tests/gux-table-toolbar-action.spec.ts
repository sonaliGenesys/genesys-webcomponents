import { newSpecPage } from '@stencil/core/testing';
import { GuxTableToolbarAction } from '../gux-table-toolbar-action';

const components = [GuxTableToolbarAction];
const language = 'en';

describe('click', () => {
  it('should fire a click event when the toolbar action is clicked', async () => {
    const html =
      '<gux-table-toolbar-action action="export"></gux-table-toolbar-action>';
    const page = await newSpecPage({ components, html, language });
    const element = page.root as HTMLElement;
    const clickSpy = jest.fn();

    element.addEventListener('click', clickSpy);

    element.click();
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalled();
  });
});
