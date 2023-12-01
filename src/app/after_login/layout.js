import { SearchContextFunctionx } from './context/cari'
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
      <SearchContextFunctionx>
        <html lang="en">
          <body>{children}</body>
        </html>
      </SearchContextFunctionx>
    </DateContextFunction >
  )
}