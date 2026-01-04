"use client";

import { useState } from "react";
import Image from "next/image";
import { fal } from "@fal-ai/client";

// Configure fal to use our proxy route
fal.config({
  proxyUrl: "/api/fal/proxy",
});

type ModelType = "image" | "video";

interface Model {
  id: string;
  name: string;
  type: ModelType;
}

const MODELS: Model[] = [
  { id: "fal-ai/flux/schnell", name: "Flux Schnell (Image)", type: "image" },
  { id: "fal-ai/flux/dev", name: "Flux Dev (Image)", type: "image" },
  { id: "fal-ai/flux-pro", name: "Flux Pro (Image)", type: "image" },
  { id: "fal-ai/flux-realism", name: "Flux Realism (Image)", type: "image" },
  { id: "fal-ai/hunyuan-video", name: "Hunyuan Video", type: "video" },
  { id: "fal-ai/luma-dream-machine", name: "Luma Dream Machine", type: "video" },
  { id: "fal-ai/kling-video/v1-5/standard", name: "Kling Video v1.5", type: "video" },
];

interface FalImage {
  url: string;
}

interface FalResult {
  images?: FalImage[];
  image?: FalImage;
  video?: {
    url: string;
  };
}

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FalResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fal.subscribe(selectedModel.id, {
        input: {
          prompt: prompt,
        },
        logs: true,
        onQueueUpdate: (update) => {
          console.log("Queue update:", update);
        },
      });
      setResult(response.data as FalResult);
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : "An error occurred during generation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 p-8 font-sans dark:bg-black dark:text-white">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Transparent AI</h1>
        <p className="mt-2 text-zinc-500">Image and Video Generation powered by Fal AI</p>
      </header>

      <main className="w-full max-w-2xl space-y-8">
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Select Model
              </label>
              <select
                value={selectedModel.id}
                onChange={(e) => {
                  const model = MODELS.find((m) => m.id === e.target.value);
                  if (model) setSelectedModel(model);
                }}
                className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800"
              >
                {MODELS.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Prompt
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe what you want to generate..."
                className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800"
                rows={4}
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading || !prompt}
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-4 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </div>
        )}

        {result && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Result</h2>
              <a
                href={selectedModel.type === "image" ? (result.images?.[0]?.url || result.image?.url || "#") : (result.video?.url || "#")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                Open original
              </a>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              {selectedModel.type === "image" ? (
                <Image
                  src={result.images?.[0]?.url || result.image?.url || ""}
                  alt="Generated content"
                  width={1024}
                  height={1024}
                  unoptimized
                  className="h-auto w-full"
                />
              ) : (
                <video
                  src={result.video?.url}
                  controls
                  autoPlay
                  loop
                  className="h-auto w-full"
                />
              )}
            </div>
            <details className="mt-4">
              <summary className="cursor-pointer text-xs text-zinc-500 hover:text-zinc-700">
                View Raw JSON
              </summary>
              <pre className="mt-2 overflow-auto rounded bg-zinc-100 p-2 text-xs dark:bg-zinc-800">
                {JSON.stringify(result, null, 2)}
              </pre>
            </details>
          </div>
        )}
      </main>
    </div>
  );
}
