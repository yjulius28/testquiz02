import { getFrameMetadata } from '@coinbase/onchainkit/frame'
import type { Metadata } from 'next'

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Submit your answer',
    },
  ],
  image: {
      <div
        tw="relative flex flex-col items-center justify-center w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/BnlWyZq.jpg')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
    ></div>
  },
  input: {
    text: 'Your Answer',
  },
  postUrl: `/api/advanced`,
})

export const metadata: Metadata = {
  title: 'Riddle Frame',
  description: 'Riddle Frame Input Answer',
  openGraph: {
    title: 'Riddle Frame',
    description: 'Riddle Frame Input Answer',
    images: [`https://i.imgur.com/BnlWyZq.jpg`],
  },
  other: {
    ...frameMetadata,
  },
}

export default function Page() {
  return (
    <>
      <h1>Riddle Frame</h1>
    </>
  )
}
