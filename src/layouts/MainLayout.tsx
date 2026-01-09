import type { ReactNode } from "react"
import { Header } from "../components/Header"

interface Props {
  children: ReactNode
}

export function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <Header />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}
