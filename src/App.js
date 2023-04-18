import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Services from './Components/Services'
import Team from './Components/Team'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
    return (
        <div>
            <Header />
            <Services />
            <Team />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
