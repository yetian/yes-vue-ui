import type { Directive } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    vSafeHtml: Directive<HTMLElement, string>
  }
}
