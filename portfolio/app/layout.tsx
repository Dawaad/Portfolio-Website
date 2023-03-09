import '../styles/globals.css'
export default function RootLayout({ children } : { children: React.ReactNode }) {

    return (
      <html className='w-full h-full dark:bg-zinc-900' lang="en">
        <body>{children}</body>
      </html>
    );
  }