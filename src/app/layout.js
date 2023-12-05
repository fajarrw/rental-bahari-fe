import './globals.css';
import { Providers } from './providers';
import { SearchContextFunction } from './context/search'
import { DateContextFunction } from "./search-car/context/dateContext";

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
    <html lang="en">
      <body>
        <DateContextFunction>
          <SearchContextFunction>
            <Providers>
              {children}
            </Providers>
          </SearchContextFunction>
        </DateContextFunction>
      </body>
    </html>
  )
}
