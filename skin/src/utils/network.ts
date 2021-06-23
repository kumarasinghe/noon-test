async function GET(url: string): Promise<JSON> {
  const result = await fetch(url);
  const json = await result.json();
  return json;
}

async function POST(url: string, params: any): Promise<string> {
  const result = await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
  return result.text();
}

async function DELETE(url: string, params: any): Promise<string> {
  const result = await fetch(url, {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
  return result.text();
}

export { GET, POST, DELETE };
