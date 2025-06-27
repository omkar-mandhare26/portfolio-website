import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    const saved = await prisma.contact.create({
        data: { name, email, message },
    });

    return NextResponse.json({
        success: true,
        data: saved,
        message: "Got your message, Will response soon!",
    });
}
