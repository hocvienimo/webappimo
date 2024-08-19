import VideoHero from './containers/VideoHero';
import Services from './containers/Services';
import InfoBox from './containers/InfoBox';
import FromBlog from './containers/FromBlog';
import Testimonial from './containers/Testimonial';

const page = () => {
  return (
    <main>
        <VideoHero/>
        <Services/>
        <InfoBox/>
        <Testimonial/>
        <FromBlog/>
    </main>
  )
}

export default page