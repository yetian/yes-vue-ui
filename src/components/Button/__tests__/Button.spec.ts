import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Button from '../Button.vue'

describe('YesButton', () => {
  it('renders slot content', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Test Button' }
    })
    expect(wrapper.text()).toContain('Test Button')
  })

  it('applies correct variant class', () => {
    const wrapper = mount(Button, { props: { variant: 'success' } })
    expect(wrapper.classes()).toContain('yes-btn--success')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(Button)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(Button, { props: { disabled: true } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })
})
