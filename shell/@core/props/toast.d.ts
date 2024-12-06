/* eslint-disable @typescript-eslint/no-explicit-any */

export default interface ToastProps {
  /** An optional title */
  title?: string,
  /** The toast's icon */
  icon?: 'success' | 'error' | 'warning' | 'info',
  /** The toast's message */
  message: string,
  /** The amount of time in milliseconds after which the toast will disappear */
  autohideDelay?: number,
  absolutePosition?: boolean
  showToast?: boolean
};
