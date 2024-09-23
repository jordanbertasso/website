import Socials from '@/components/socials';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel='icon' href='/images/favicon.ico' />
        <meta name='description' content="Jordan Bertasso's website" />
        <meta property='og:image' content='/images/profile.jpg' />
        <meta name='og:title' content='Jordan Bertasso' />
        <meta name='twitter:card' content='summary_large_image' />
        <title>Jordan Bertasso</title>
      </Head>

      <div className='max-w-[36rem] px-4 mx-auto h-full'>
        <header className='flex flex-col items-center justify-center h-full'>
          <video
            aria-label={`Jordan Bertasso avatar`}
            className={`w-48 h-48 rounded-full`}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src='/images/avatar.webm' type='video/webm' />
            <source src='/images/avatar.gif' type='video/gif' />
          </video>

          <h1 className='leading-tight font-extrabold tracking-tighter my-6 text-white text-4xl'>
            Jordan Bertasso
          </h1>
          <Socials />
        </header>
      </div>
    </>
  );
}
