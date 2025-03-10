// app/page.tsx
export const revalidate = 60 // Re-generate the page every 60 seconds

import { BookCard } from '../components/BookCard'

interface Book {
  id: number
  title: string
  author: string
  description: string
  price: number
}

// Simulate fetching data from the catalog service
async function getBooks(): Promise<Book[]> {
  // In a real project, use fetch to call your backend API
  return [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A classic novel depicting American society in the 1920s.',
      price: 10.99,
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel depicting a totalitarian society and the struggle of human nature.',
      price: 8.99,
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A novel about racial injustice and the fight for justice in the American South.',
      price: 12.99,
    },
  ]
}

export default async function Home() {
  const books = await getBooks()

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Book List</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  )
}
