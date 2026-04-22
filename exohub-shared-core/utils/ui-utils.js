import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Tailwind 클래스 합치기 유틸리티 (Shadcn UI 핵심 로직)
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
