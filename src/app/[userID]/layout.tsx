import { UserNavBar } from "@/components/NavBars"
import "../globals.css";
import UserDataProvider from "../providers/userdataprovider";


export const metadata = {
  title: 'IdeaForge',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="main-bg relative min-h-screen ">
      <UserDataProvider>
          <div className='flex flex-col justify-center items-center min-h-[90vh]'>
            {children}
          </div>
      </UserDataProvider>
    </div>
  )
}
