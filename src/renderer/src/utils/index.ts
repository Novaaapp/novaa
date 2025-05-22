import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'


export const cn = (...args: ClassValue[]) : unknown  => {
  return twMerge(clsx(...args))
}
