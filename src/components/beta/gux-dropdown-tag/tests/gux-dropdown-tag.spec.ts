import { newSpecPage } from '@stencil/core/testing';
import MutationObserver from 'mutation-observer';

import { GuxDropdownTag } from '../gux-dropdown-tag';
import { GuxListboxMulti } from '../../../stable/gux-listbox-multi/gux-listbox-multi';
import { GuxOptionMulti } from '../../../stable/gux-listbox-multi/gux-option-multi/gux-option-multi';

const components = [GuxDropdownTag, GuxListboxMulti, GuxOptionMulti];
const html = `
<gux-dropdown-tag-beta>
  <gux-listbox-multi aria-label="Animals">
    <gux-option-multi value="a" disabled>Ant</gux-option-multi>
    <gux-option-multi value="b">Bat</gux-option-multi>
    <gux-option-multi value="c">Cat</gux-option-multi>
  </gux-listbox-multi>
</gux-dropdown-tag-beta>
`;
const language = 'en';

describe('gux-dropdown', () => {
  beforeEach(() => {
    (
      global as NodeJS.Global & {
        MutationObserver: any;
      }
    ).MutationObserver = MutationObserver;
  });

  describe('#render', () => {
    it(`should render as expected`, async () => {
      const page = await newSpecPage({ components, html, language });

      expect(page.rootInstance).toBeInstanceOf(GuxDropdownTag);
      expect(page.root).toMatchSnapshot();
    });
  });
});
