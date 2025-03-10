// components/BookCard.tsx
interface Book {
    id: number
    title: string
    author: string
    description: string
    price: number
}

interface BookCardProps {
    book: Book
}

export function BookCard({ book }: BookCardProps) {
    return (
        <div className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p className="text-gray-700">Author: {book.author}</p>
            <p className="mt-2 text-gray-600">{book.description}</p>
            <p className="mt-2 font-semibold">Price: ${book.price}</p>
        </div>
    )
}
