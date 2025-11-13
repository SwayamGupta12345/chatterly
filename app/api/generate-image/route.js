import axios from "axios";

const IMG_API_URL =
  "https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return new Response(
        JSON.stringify({ error: "No prompt provided" }),
        { status: 400 }
      );
    }

    const HF_API_KEY = process.env.HF_API_KEY;
    if (!HF_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing Hugging Face API key" }),
        { status: 500 }
      );
    }

    const response = await axios.post(
      IMG_API_URL,
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json",
          Accept: "image/png",
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = `data:image/png;base64,${Buffer.from(
      response.data
    ).toString("base64")}`;

    return new Response(JSON.stringify({ image: base64Image }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Image generation error:", error.message);
    return new Response(
      JSON.stringify({
        error: "Failed to generate image",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
