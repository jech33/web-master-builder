export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <h1 className="text-5xl font-bold tracking-tight text-gray-700 sm:text-[5rem]">
          Web Master Builder
        </h1>
        <p className="mt-3 text-2xl text-gray-500 sm:mt-5 sm:text-xl">
          Build your web presence with ease and confidence.
        </p>
      </main>
    </div>
  );
}
