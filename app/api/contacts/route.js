export async function GET(request) {
  const contactMediums = [
    {
      medium: "github",
      username: "kavinvalli",
      link: "https://github.com/ahmadh1231",
    },
    {
      medium: "email",
      username: "ahmadhhassan05@gmail.com",
      link: "mailto:ahmadhhassan05@gmail.com",
    },
    {
      medium: "linkedin",
      username: "ahmadhhassan",
      link: "https://www.linkedin.com/in/ahmadhhassan/",
    },
  ];

  return Response.json(contactMediums, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
