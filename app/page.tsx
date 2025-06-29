export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to TaxBox.AI</h1>
      <p className="text-lg mb-6">Your AI-powered tax preparation platform.</p>
      <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Get Started</a>
    </main>
  )
}
