export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div style={{
          backgroundColor: 'red',
          width: '100%',
          height: '70px'
        }}>dash colorido</div>
        {children}
      </body>
    </html>
  )
}