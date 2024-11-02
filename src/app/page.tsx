import { getFrameMetadata } from '@coinbase/onchainkit/frame'
import type { Metadata } from 'next'

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Submit your answer',
    },
  ],
  image: {
    src: `${process.env.NEXT_PUBLIC_SITE_URL}/riddle.png`,
  },
  input: {
    text: 'Your Answer',
  },
  postUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/advanced`,
})

export const metadata: Metadata = {
  title: 'Riddle Frame',
  description: 'Riddle Frame Input Answer',
  openGraph: {
    title: 'Riddle Fram',
    description: 'Riddle Frame Input Answer',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/riddle.png`],
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
