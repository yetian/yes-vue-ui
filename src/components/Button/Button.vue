<template>
  <button
    :class="['yes-btn', `yes-btn--${variant}`, { 'yes-btn--disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineOptions({ name: 'YesButton' })

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'success' | 'warning' | 'danger'
  disabled?: boolean
}>(), {
  variant: 'primary'
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (e: MouseEvent) => {
  if (!props.disabled) emit('click', e)
}
</script>

<style scoped>
.yes-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;
  font-size: 14px;
}
.yes-btn--primary { background: #409eff; color: #fff; }
.yes-btn--success { background: #67c23a; color: #fff; }
.yes-btn--warning { background: #e6a23c; color: #fff; }
.yes-btn--danger { background: #f56c6c; color: #fff; }
.yes-btn--disabled { opacity: 0.6; cursor: not-allowed; }
</style>
