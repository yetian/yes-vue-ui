import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { vSafeHtml } from '../safe-html'

const TestComponent = {
  template: `<div v-safe-html="content"></div>`,
  props: ['content']
}

describe('v-safe-html 指令', () => {
  it('应净化危险内容', () => {
    const wrapper = mount(TestComponent, {
      props: { content: '<script>alert(1)</script>' },
      global: {
        directives: { SafeHtml: vSafeHtml }
      }
    })
    expect(wrapper.html()).not.toContain('<script>')
  })

  it('应保留安全标签', () => {
    const wrapper = mount(TestComponent, {
      props: { content: '<b>加粗文本</b>' },
      global: {
        directives: { SafeHtml: vSafeHtml }
      }
    })
    expect(wrapper.find('b').exists()).toBe(true)
  })
})
