'use server';

import { fal } from "@fal-ai/client";

interface FalImage {
  url: string;
}

interface FalResult {
  images: FalImage[];
}

export async function generateImage(prompt: string) {
  try {
    const result = (await fal.run("fal-ai/flux/dev", {
      input: {
        prompt: prompt,
      },
    })) as unknown as FalResult;
    return { imageUrl: result.images[0].url };
  } catch (error) {
    console.error("Error generating image:", error);
    throw new Error("Failed to generate image");
  }
}
