import { Component, Element, h, Host, JSX, Listen, Prop } from '@stencil/core';

import { randomHTMLId } from '../../../../utils/dom/random-html-id';

/**
 * @slot - text
 */

@Component({
  styleUrl: 'gux-option.less',
  tag: 'gux-option',
  shadow: false
})
export class GuxOption {
  @Element()
  root: HTMLElement;

  @Prop()
  value: string;

  @Prop()
  active: boolean = false;

  @Prop()
  selected: boolean = false;

  @Prop()
  disabled: boolean = false;

  @Prop()
  filtered: boolean = false;

  @Prop({ mutable: true })
  hovered: boolean = false;

  @Listen('mouseenter')
  onmouseenter() {
    this.hovered = true;
  }

  @Listen('mouseleave')
  onMouseleave() {
    this.hovered = false;
  }

  componentWillLoad(): void {
    this.root.id = this.root.id || randomHTMLId('gux-option');
  }

  private getAriaSelected(): boolean | string {
    if (this.disabled) {
      return false;
    }

    return this.selected ? 'true' : 'false';
  }

  render(): JSX.Element {
    return (
      <Host
        role="option"
        class={{
          'gux-active': this.active,
          'gux-disabled': this.disabled,
          'gux-filtered': this.filtered,
          'gux-hovered': this.hovered,
          'gux-selected': this.selected
        }}
        aria-selected={this.getAriaSelected()}
        aria-disabled={this.disabled.toString()}
      >
        <slot />
      </Host>
    ) as JSX.Element;
  }
}
