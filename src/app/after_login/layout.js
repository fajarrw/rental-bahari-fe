import { SearchContextFunctionx } from './context/cari'

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
      <SearchContextFunctionx>
        <html lang="en">
          <body>{children}</body>
        </html>
      </SearchContextFunctionx>
    )
  }