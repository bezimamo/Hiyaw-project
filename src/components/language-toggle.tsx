"use client"

import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from 'lucide-react'

export function LanguageToggle() {
  const router = useRouter()
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    router.push(router.pathname, router.asPath, { locale: lng })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('en')}>
          <span className={i18n.language === 'en' ? 'font-bold' : ''}>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('am')}>
          <span className={`${i18n.language === 'am' ? 'font-bold' : ''} font-noto-sans-ethiopic`}>አማርኛ</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}