import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame'
import { NextRequest, NextResponse } from 'next/server'

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
        },
      })
    )
  }

  const searchParams = new URLSearchParams({
    title: 'Signup Successful',
    description: untrustedData.inputText,
  })

  return new NextResponse(
    getFrameHtmlResponse({
      image: {
        src: `https://i.imgur.com/FTFr2RG.jpg`,
      },
    })
  )
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req)
}

export const dynamic = 'force-dynamic'
