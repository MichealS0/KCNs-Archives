import { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Document() {
  return (
    <Html lang="en">
      <title>KCN's archive of pwned Hack The Box Machines</title>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.ico"></link>
    <Head />
      <body>
        <Main />
        <NextScript />
        <Analytics />
        <SpeedInsights />
      </body>
      <fooer className=" flex justify-center bg-[#1e1e1e] py-1 text-blue-200">أَمْ حَسِبْتُمْ أَن تَدْخُلُوا۟ ٱلْجَنَّةَ وَلَمَّا يَأْتِكُم مَّثَلُ ٱلَّذِينَ خَلَوْا۟ مِن قَبْلِكُم ۖ مَّسَّتْهُمُ ٱلْبَأْسَآءُ وَٱلضَّرَّآءُ وَزُلْزِلُوا۟ حَتَّىٰ يَقُولَ ٱلرَّسُولُ وَٱلَّذِينَ ءَامَنُوا۟ مَعَهُۥ مَتَىٰ نَصْرُ ٱللَّهِ ۗ أَلَآ إِنَّ نَصْرَ ٱللَّهِ قَرِيبٌۭ </fooer>
    </Html>
  )
}
