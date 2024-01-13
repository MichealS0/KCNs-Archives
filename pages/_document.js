import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html lang="en">
      <title>KCN's archive of pwned Hack The Box Machines</title>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.ico"></link>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='title' content="KCN's archive of pwned Hack The Box Machines"/>
      <meta name='description' content='This is the website to document that amazing work of KCN!' />
      <meta name="google-adsense-account" content="ca-pub-1158196551348875"></meta>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-GXZ5FKGZ2K"></script>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1158196551348875"
     crossorigin="anonymous"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-GXZ5FKGZ2K');
        `}
        
      </script>
    <Head />
      <body className='background flex flex-col gap-96 md:gap-12 lg:gap-4'>
        <Main />
        <NextScript />
        <footer className="flex text-center text-black textBackground border-t-2 border-b-2 border-black py-1 text-xs text-bold md:text-base md:justify-center mt-5">
          أَمْ حَسِبْتُمْ أَن تَدْخُلُوا۟ ٱلْجَنَّةَ وَلَمَّا يَأْتِكُم مَّثَلُ ٱلَّذِينَ خَلَوْا۟ مِن قَبْلِكُم ۖ مَّسَّتْهُمُ ٱلْبَأْسَآءُ وَٱلضَّرَّآءُ وَزُلْزِلُوا۟ حَتَّىٰ يَقُولَ ٱلرَّسُولُ وَٱلَّذِينَ ءَامَنُوا۟ مَعَهُۥ مَتَىٰ نَصْرُ ٱللَّهِ ۗ أَلَآ إِنَّ نَصْرَ ٱللَّهِ قَرِيبٌۭ 
        </footer>
      </body>
    </Html>
  )
}
