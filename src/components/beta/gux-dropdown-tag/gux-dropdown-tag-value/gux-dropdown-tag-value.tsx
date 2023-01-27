import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  JSX,
  Listen,
  Prop,
  State
} from '@stencil/core';

import { buildI18nForComponent, GetI18nValue } from '../../../../i18n';
import translationResources from './i18n/en.json';

@Component({
  styleUrl: 'gux-dropdown-tag-value.less',
  tag: 'gux-dropdown-tag-value',
  shadow: true
})
export class GuxDropdownMultiTag {
  private i18n: GetI18nValue;

  @Element()
  root: HTMLElement;

  /**
   * Triggered when click on remove button
   */
  @Event()
  internalclearselected: EventEmitter<string>;

  // @Event()
  // tagCloseClicked: EventEmitter<string>;

  /**
   * Tag is removable.
   */
  @Prop()
  disabled: boolean = false;

  @Prop()
  numberSelected: number = 0;

  @Prop()
  value: string = '';

  @Prop()
  optionSelected: string = '';

  @State()
  label: string = '';

  /**
   * Fired when tag is clicked.
   */
  @Event()
  tagClicked: EventEmitter<string>;

  /**
   * Fired when tag close button is clicked.
   */
  @Event()
  tagCloseClicked: EventEmitter<string>;

  @Listen('keydown')
  onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Backspace':
      case 'Delete':
        this.removeTag();
    }
  }

  private removeTag(): void {
    if (this.disabled) {
      return;
    }
    this.tagCloseClicked.emit(this.value);
  }

  private renderRemoveButton(): JSX.Element {
    return (
      <button
        class="gux-tag-remove-button"
        onClick={this.removeTag.bind(this)}
        type="button"
        disabled={this.disabled}
      >
        <gux-icon
          class="gux-tag-remove-icon"
          icon-name="close"
          screenreader-text={this.i18n('clearSelection', {
            numberSelected: this.numberSelected.toString()
          })}
        />
      </button>
    ) as JSX.Element;
  }

  async componentWillRender(): Promise<void> {
    this.i18n = await buildI18nForComponent(this.root, translationResources);
  }

  render(): JSX.Element {
    return (
      <div
        class={{
          'gux-tag': true,
          'gux-disabled': this.disabled
        }}
        aria-disabled={this.disabled.toString()}
      >
        {this.optionSelected}
        {this.renderRemoveButton()}
      </div>
    ) as JSX.Element;
  }
}
