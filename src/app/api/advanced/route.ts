import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame'
import { NextRequest, NextResponse } from 'next/server'

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json()

  const { untrustedData } = body

  const isValidAnswer = untrustedData.inputText.match(
    /right/
  )

  if (!untrustedData.inputText || !isValidAnswer) {
    const searchParams = new URLSearchParams({
      title: 'Wrong Answer',
    })

    return new NextResponse(
      getFrameHtmlResponse({
        image: {
          src: `${process.env.NEXT_PUBLIC_SITE_URL}/wrong-answer2.jpg`,
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
        src: `${process.env.NEXT_PUBLIC_SITE_URL}/correct-answer2.jpg`,
      },
    })
  )
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req)
}

export const dynamic = 'force-dynamic'
