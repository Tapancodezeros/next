import "../globals.css"
import Navigation from "@/components/Navigation"
import { Toaster } from 'react-hot-toast';

export default function RootLayout ({ children }){
  return(
    <html> 
      <body>
        <Navigation />
        {children}
               <Toaster position="bottom-right" />
      </body>
    </html>
  )
}

