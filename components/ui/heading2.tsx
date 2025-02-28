export default function Heading2({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="flex flex-col items-center text-[28px] font-bold">
            {children}
            <hr className="bg-foreground h-1 w-10 border-0 outline-none" />
        </h2>
    )
}
