import DOMPurify from 'dompurify'

export const DEFAULT_CONFIG: DOMPurify.Config = {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'span'],
  ALLOWED_ATTR: ['style'],
  FORBID_ATTR: ['style', 'onclick', 'onerror']
}

export const sanitizeHTML = (dirty: string, config?: DOMPurify.Config) => {
  return DOMPurify.sanitize(dirty, { ...DEFAULT_CONFIG, ...config })
}
