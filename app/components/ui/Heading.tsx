export default function Heading ({children}: {children: React.ReactNode}) {
    return (
        <h1 className="text-2xl font-bold text-center text-white">
            {children}
        </h1>
    )
}