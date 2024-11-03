import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame'
import { NextRequest, NextResponse } from 'next/server'
import { frames } from "./api/advanced";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json()

  const { untrustedData } = body

  const isValidAnswer = untrustedData.inputText.match(
    'right'
  )

  if (!untrustedData.inputText || !isValidAnswer) {
    const searchParams = new URLSearchParams({
      title: 'Wrong Answer',
    })

    return new NextResponse(
      getFrameHtmlResponse({
        image: {
          src: `https://i.imgur.com/BnJ8a1t.jpg`,
          aspectRatio: "1:1",
        },
      })
    )
  }

  const searchParams = new URLSearchParams({
    title: 'Correct Answer',
    description: untrustedData.inputText,
  })

  return new NextResponse(
    getFrameHtmlResponse({
      image: {
        src: `https://i.imgur.com/FTFr2RG.jpg`,
        aspectRatio: "1:1",
      },
    })
  )
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req)
}

export const dynamic = 'force-dynamic'
