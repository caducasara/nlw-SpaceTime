import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { Signin } from '@/components/Signin'
import { cookies } from 'next/headers'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid h-screen grid-cols-2">
      {/* Left Section */}
      <section className="itens-start relative flex flex-col justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes pr-2" />

        {/* User Signin */}
        {isAuthenticated ? <Profile /> : <Signin />}

        {/* Hero */}
        <Hero />

        {/* Copyright */}
        <Copyright />
      </section>

      {/* Right Section */}
      <section className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </section>
    </main>
  )
}
