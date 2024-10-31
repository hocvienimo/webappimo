import VideoHero from "@/components/customs/VideoHero";
import Services from "@/components/customs/Services";
import InfoBox from "@/components/customs/InfoBox";
import FromBlog from "@/components/customs/FromBlog";
import Testimonial from "@/components/customs/Testimonial";

const page = () => {
  return (
    <main>
      <VideoHero />
      <Services />
      <InfoBox />
      <Testimonial />
      <FromBlog />
    </main>
  );
};

export default page;
