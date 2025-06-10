export async function GET() {
  return Response.json([
    {
      id: "p1",
      name: "Programming book",
      price: 100,
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      id: "p2",
      name: "Next.js T-shirt",
      price: 200,
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
      id: "p3",
      name: "Wireless Mouse",
      price: 300,
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
  ]);
}
