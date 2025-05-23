import  Link from 'next/link'
import React, { ReactNode } from 'react'
import { Toaster } from 'sonner'
import Image from 'next/image'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'
const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const userAuthenticated = await isAuthenticated();
  if (!userAuthenticated) {
    redirect('/sign-in');
  }

  return (
    <div className='root-layout' >
      
     <nav>
      <Link href="/" className="flex items-center gap-2" >
      <Image src="/logo.svg" alt="logo" width={38} height={32}/>
      <h2  className='text-primary-100'>Mahant Prep</h2>
      </Link>
     </nav>
     {children}
    </div>
  )
}

export default RootLayout
