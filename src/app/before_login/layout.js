import { SearchContextFunction } from './context/search'
import { DateContextFunction } from "@/app/search-car/context/dateContext";

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
    <DateContextFunction>
      <SearchContextFunction>
        <html lang="en">
          <body>{children}</body>
        </html>
      </SearchContextFunction>
    </DateContextFunction>
  )
}