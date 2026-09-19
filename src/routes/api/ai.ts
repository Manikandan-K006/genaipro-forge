export async function POST(request: Request) {
  try {
    const { question } = (await request.json()) as { question?: string };
    if (!question) {
      return new Response(JSON.stringify({ error: "Missing 'question' in request" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

    if (!OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: "Server missing OPENAI_API_KEY" }), {
        status: 500,
        headers: { "content-type": "application/json" },
      });
    }

    const systemPrompt = `You are Manikandan K's portfolio assistant. Answer questions concisely and helpfully, referencing the portfolio contents when relevant. If you don't know the answer, say so and point the user to contact: manidvkit@gmail.com.`;

    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question },
        ],
        max_tokens: 600,
        temperature: 0.2,
      }),
    });

    const payload = await resp.json();
    if (!resp.ok) {
      return new Response(JSON.stringify({ error: payload }), {
        status: resp.status || 500,
        headers: { "content-type": "application/json" },
      });
    }

    const answer = payload.choices?.[0]?.message?.content ?? "";
    return new Response(JSON.stringify({ answer }), { headers: { "content-type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
