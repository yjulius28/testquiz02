import { getFrameMetadata } from '@coinbase/onchainkit/frame'
import type { Metadata } from 'next'

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Submit your answer',
    },
  ],
  image: {
      src: `https://i.imgur.com/BnlWyZq.jpg`,
  },
  input: {
    text: 'Your Answer',
  },
  postUrl: `https://testquiz02.vercel.app/api/advanced`,
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
