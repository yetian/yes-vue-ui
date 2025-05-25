import { sanitizeHTML } from '../utils/security'
import type { App, Directive, DirectiveBinding } from 'vue'

const directive: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    updateContent(el, binding)
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    updateContent(el, binding)
  }
}

const updateContent = (el: HTMLElement, binding: DirectiveBinding) => {
  const content = binding.value
  const config = binding.arg ? JSON.parse(binding.arg) : {}
  
  if (typeof content !== 'string') {
    el.innerHTML = ''
    return
  }

  el.innerHTML = sanitizeHTML(content, config)
}

export const vSafeHtml = directive

export const installDirective = (app: App) => {
  app.directive('safe-html', directive)
}
