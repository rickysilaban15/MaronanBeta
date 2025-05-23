"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export function NewsletterForm() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Email diperlukan",
        description: "Silakan masukkan alamat email Anda",
        variant: "destructive",
      })
      return
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast({
        title: "Email tidak valid",
        description: "Silakan masukkan alamat email yang valid",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubscribed(true)
      setEmail("")
      toast({
        title: "Berlangganan berhasil!",
        description: "Terima kasih telah berlangganan newsletter kami.",
      })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <Input
        placeholder="Email Anda"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading || isSubscribed}
      />
      <Button type="submit" disabled={isLoading || isSubscribed}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Mendaftar...
          </>
        ) : isSubscribed ? (
          "Terdaftar"
        ) : (
          "Daftar"
        )}
      </Button>
    </form>
  )
}
