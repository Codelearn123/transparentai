'use client';

import { useState } from 'react';
import Image from 'next/image';
import { generateImage } from './actions';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;

    setIsLoading(true);
    try {
      const result = await generateImage(prompt);
      setImageUrl(result.imageUrl);
    } catch (error) {
      console.error(error);
      alert('Failed to generate image');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <main className="flex w-full max-w-3xl flex-col items-center gap-8 py-12 px-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl">
        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-zinc-50">
            Fal AI Preview
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Enter a prompt to generate an image using Fal AI
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A futuristic city at sunset..."
            className="w-full p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !prompt}
            className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isLoading ? 'Generating...' : 'Generate Image'}
          </button>
        </form>

        {imageUrl && (
          <div className="w-full mt-4 animate-in fade-in zoom-in duration-300">
            <Image
              src={imageUrl}
              alt={prompt}
              width={1024}
              height={1024}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}
      </main>
    </div>
  );
}
