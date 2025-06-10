export async function POST(req: Request) {
  const body = await req.json();

  return Response.json({
    message: "Your order has recieved",
    order: body,
    createdAt: new Date(),
  });
}
