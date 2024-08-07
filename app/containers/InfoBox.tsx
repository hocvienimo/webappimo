import Image from 'next/image';
import Link from 'next/link';

const infoGet = {
    title: "Hire experts or be hired.",
    subtitle: "For any job, any time.",
    description: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation is on the runway towards.",
}

const InfoBox = () => {
  return (
    <section className="relative w-full h-[520px]">
      <Image
        src="/images/section-background.jpg"
        alt="Banner Image"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        className="z-[-1]"
      />
      <div className="absolute inset-0 flex flex-col justify-center bg-[#333] bg-opacity-65 text-white p-4">
        <div className="max-w-7xl w-full mx-auto">
            <h3 className="md:text-4xl text-3xl font-semibold mb-2">{infoGet.title}</h3>
            <h6 className="md:text-4xl text-3xl font-semibold mb-7">{infoGet.subtitle}</h6>
            <p className="text-lg font-light text-[#e7e7e7] md:w-1/2 w-full mb-8">{infoGet.description}</p>
            <Link href="/#" className="bg-primary hover:bg-[#f0f0f0] hover:text-gray-600 text-white py-3 px-10 rounded-full">
                Get Started
            </Link>
        </div>
      </div>
    </section>
  )
}

export default InfoBox