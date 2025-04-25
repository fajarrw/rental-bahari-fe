import './globals.css';
import { Providers } from './providers';
import { SearchContextFunction } from './context/search';
import { DateContextFunction } from "./search-car/context/dateContext";
import { SearchContextFunctionx } from './after_login/context/cari';

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
            <SearchContextFunctionx>
              <Providers>
                {children}
              </Providers>
            </SearchContextFunctionx>
          </SearchContextFunction>
        </DateContextFunction>
      </body>
    </html>
  )
}
