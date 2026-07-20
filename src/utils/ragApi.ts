export async function fetchRagAnswer(question: string): Promise<string> {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/chat`);
    url.searchParams.append('input', question);

    const response = await fetch(url.toString(), {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    console.error("Error fetching RAG answer:", error);
    return "Sorry, I am currently unable to reach the server. Please again later :(";
  }
}
