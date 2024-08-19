import InfoBox from "../containers/InfoBox"
import Services from "../containers/Services"
import Testimonial from "../containers/Testimonial"
import AboutUs from "./AboutUs"
import Achievement from "./Achievement"
import Header from "./Header"

const page = () => {
  return (
    <main className="mt-20">
      <Header/>
      <AboutUs/>
      <Achievement/>
      <Services/>
      <InfoBox/>
      <Testimonial/>
    </main>
  )
}

export default page