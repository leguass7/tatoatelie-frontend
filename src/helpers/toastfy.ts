import { toast, ToastOptions } from 'react-toastify'

export function tostifyErros(message: string | string[], options: ToastOptions = {}) {
  if (message) {
    if (Array.isArray(message)) {
      message.forEach((m, i) => {
        const time = (i + 2) * 100
        const close = options.autoClose || 4000
        tostifyErros(m, { ...options, autoClose: close + time })
      })
    } else {
      toast.error(message, options)
    }
  }
}
