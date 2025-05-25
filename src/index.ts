import { installDirective } from './directives/safe-html'
import type { App } from 'vue'

export * from './components/Button/Button.vue'
export { vSafeHtml } from './directives/safe-html'

export const install = (app: App) => {
  installDirective(app)
}
