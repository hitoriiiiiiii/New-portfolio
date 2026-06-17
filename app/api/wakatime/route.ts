export async function GET() {
  const response = await fetch(
    "https://wakatime.com/api/v1/users/current/summaries?range=today",
    {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.WAKATIME_API_KEY + ":").toString("base64")}`,
      },
    }
  );

  const data = await response.json();

  return Response.json(data);
}