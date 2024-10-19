/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'imo.phuocdev.click',
          port: '',
          pathname: '**',
        },
      ],

    },
  };
  
  export default nextConfig;
  