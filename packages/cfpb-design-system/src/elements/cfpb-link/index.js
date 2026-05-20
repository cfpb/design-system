import { LitElement } from 'lit';
import { defineComponent } from '../utilities/shared-config';
import { MixinLink } from './mixin-link';

/**
 * @element cfpb-link.
 * @slot - Slot for the link text.
 */
export class CfpbLink extends MixinLink(LitElement) {
  render() {
    return this.renderLink();
  }

  static init() {
    defineComponent('cfpb-link', CfpbLink);
  }
}
