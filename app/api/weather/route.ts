import { NextResponse } from "next/server";

export async function GET() {
  try {
    if (!process.env.WEATHER_API_KEY) {
      return NextResponse.json(
        { error: "API key missing" },
        { status: 500 }
      );
    }

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${process.env.WEATHER_API_KEY}`
    );

    const data = await res.json();

    if (!res.ok || !data.main) {
      return NextResponse.json(
        { error: "Weather API failed", api: data },
        { status: 500 }
      );
    }

    return NextResponse.json({
      city: data.name,
      temp: data.main.temp,
      condition: data.weather?.[0]?.main ?? "Unknown",
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
