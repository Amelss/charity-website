import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({children}) {
  return (
      <div className="layout">
          <Navbar />
          <div className="page-content">
              {children}
          </div>
          <Footer />
    </div>
  )
}
