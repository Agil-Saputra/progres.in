export const metadata = {
  title: 'Progress.in',
  description: 'Buat Website Anda Sendiri dengan Mudah Hanya 5 Menit di Progress.in',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
