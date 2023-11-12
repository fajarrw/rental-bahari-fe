import './globals.css';
import {Providers} from './providers';

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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
