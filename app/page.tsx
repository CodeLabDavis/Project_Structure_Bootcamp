import Link from 'next/link';

export default function Home() {

  // Try changing this id for the dynamic slug in Demo Page 2
  const id = 4311;

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex-col text-center">
        <h1 className="text-5xl">Your First CodeLab Next.js Website!!</h1>
        <Link href="/demo">Go to Demo Page</Link>
        <Link href={`/demo2/${id}`}>Go to Demo Page 2</Link>
      </div>
    </div>
  )
}
