import NavBar from '../components/navbar/NavBar'
import './globals.css'
import Footer from "../components/footer/Footer"
import { ThemeProvider } from "../../context/ThemeContext"
import AuthProvider from "../components/AuthProvider/AuthProvider"
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <ThemeProvider>
          <AuthProvider>
          <div className="container">
            <NavBar />
            {children}
            <Footer />
          </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
