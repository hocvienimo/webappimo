import VideoHero from './containers/VideoHero';
import RecentJobs from './containers/RecentJobs';
import InfoBox from './containers/InfoBox';
import FromBlog from './containers/FromBlog';

const page = () => {
  return (
    <main>
        <VideoHero/>
        <RecentJobs/>
        <InfoBox/>
        <FromBlog/>
    </main>
  )
}

export default page