import { SearchContextFunction } from './context/cari'

export const metadata = {
    title: 'Rental Bahari',
    icons: {
      icon: [
        '/favicon.ico',
      ]
    },
  }
  
  export default function RootLayout({ children }) {
    return (
      <SearchContextFunction>
        <html lang="en">
          <body>{children}</body>
        </html>
      </SearchContextFunction>
    )
  }