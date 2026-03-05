// Member 4: GET rides, POST create ride
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { source, destination, date, seats } = body

    if (!source || !destination || !date || !seats) {
      return NextResponse.json({
        success: false,
        message: "Missing required fields"
      })
    }

    await prisma.ride.create({
      data: {
        source,
        destination,
        date: new Date(date),
        seats
      }
    })

    return NextResponse.json({
      success: true
    })

  } catch (error) {
    return NextResponse.json({
      success: false
    })
  }
}

export async function GET() {

  const rides = await prisma.ride.findMany({
    select: {
      id: true,
      source: true,
      destination: true,
      date: true,
      seats: true
    }
  })

  return NextResponse.json(rides)
}
