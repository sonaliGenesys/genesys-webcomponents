import { newSpecPage } from '@stencil/core/testing';
import MutationObserver from 'mutation-observer';

import { GuxFormFieldTextarea } from '../gux-form-field-textarea';

const components = [GuxFormFieldTextarea];
const language = 'en';

describe('gux-form-field-textarea', () => {
  beforeEach(async () => {
    (
      global as NodeJS.Global & {
        MutationObserver: any;
      }
    ).MutationObserver = MutationObserver;
  });

  it('should build', async () => {
    const html = `
      <gux-form-field-textarea>
        <textarea slot="input"></textarea>
        <label slot="label">Label</label>
        <span slot="error">Error message</span>
      </gux-form-field-textarea>
    `;
    const page = await newSpecPage({ components, html, language });

    expect(page.rootInstance).toBeInstanceOf(GuxFormFieldTextarea);
  });

  describe('#render', () => {
    describe('resize', () => {
      ['', 'resize="auto"', 'resize="manual"', 'resize="none"'].forEach(
        (componentAttribute, index) => {
          it(`should render component as expected (${index + 1})`, async () => {
            const html = `
            <gux-form-field-textarea ${componentAttribute}>
              <textarea slot="input"></textarea>
              <label slot="label">Label</label>
            </gux-form-field-textarea>
          `;
            const page = await newSpecPage({ components, html, language });

            expect(page.root).toMatchSnapshot();
          });
        }
      );
    });

    describe('label-position', () => {
      [
        '',
        'label-position="above"',
        'label-position="beside"',
        'label-position="screenreader"'
      ].forEach((componentAttribute, index) => {
        it(`should render component as expected (${index + 1})`, async () => {
          const html = `
            <gux-form-field-textarea ${componentAttribute}>
              <textarea slot="input"></textarea>
              <label slot="label">Label</label>
            </gux-form-field-textarea>
          `;
          const page = await newSpecPage({ components, html, language });

          expect(page.root).toMatchSnapshot();
        });
      });
    });

    describe('input attributes', () => {
      ['', 'disabled', 'required'].forEach((inputAttribute, index) => {
        it(`should render component as expected (${index + 1})`, async () => {
          const html = `
            <gux-form-field-textarea>
              <textarea slot="input" ${inputAttribute}></textarea>
              <label slot="label">Label</label>
            </gux-form-field-textarea>
          `;
          const page = await newSpecPage({ components, html, language });

          expect(page.root).toMatchSnapshot();
        });
      });
    });

    describe('help', () => {
      it('should render component as expected', async () => {
        const html = `
        <gux-form-field-textarea>
        <textarea slot="input" name="textarea"></textarea>
        <label slot="label">Default</label>
        <span slot="help">This is a help message</span>
      </gux-form-field-textarea>
        `;
        const page = await newSpecPage({ components, html, language });

        expect(page.root).toMatchSnapshot();
      });
    });
  });
});
