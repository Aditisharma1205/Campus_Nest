// Member 4: POST book ride
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const { rideId } = await req.json()

    const ride = await prisma.ride.findUnique({
      where: { id: rideId }
    })

    if (!ride || ride.seats <= 0) {
      return Response.json({
        success: false,
        remainingSeats: 0
      })
    }

    const updatedRide = await prisma.ride.update({
      where: { id: rideId },
      data: {
        seats: ride.seats - 1
      }
    })

    return Response.json({
      success: true,
      remainingSeats: updatedRide.seats
    })

  } catch (error) {
    return Response.json({
      success: false
    })
  }
}
