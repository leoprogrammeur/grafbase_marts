import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Morkin',
  description: 'ShowCase and discover, shared projects for any personnes is have designer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
         <main>
          {children}
         </main>
         <Footer />
      </body>
    </html>
  )
}
