import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// importing font
const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
})

// metadata of webpage
export const metadata: Metadata = {
    title: "Pretty Wales Farm",
    description: "Pretty Wales Farm",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${poppins.className} flex h-full min-h-screen flex-col`}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
