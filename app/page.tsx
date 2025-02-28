import { Agbalumo } from "next/font/google"
import Link from "next/link"
import Image from "next/image"

import { Card } from "@/components/ui/card"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Heading2 from "@/components/ui/heading2"

const agbalumo = Agbalumo({
    weight: "400",
    subsets: ["latin"],
})

const stats = [
    {
        number: "300+",
        title: "Pets in shop",
        description: "You can choose any pet which you like.",
    },
    {
        number: "4500+",
        title: "Plants in shop",
        description: "You can choose any pet which you like.",
    },
    {
        number: "150+",
        title: "Pets in zoo",
        description: "You can choose any pet which you like.",
    },
    {
        number: "500",
        title: "Yards in kids park",
        description: "You can choose any pet which you like.",
    },
]

const plants = [
    {
        img: "/images/home/plant.png",
        name: "Sunflower",
        price: "15",
    },
    {
        img: "/images/home/plant.png",
        name: "Rose",
        price: "25",
    },
    {
        img: "/images/home/plant.png",
        name: "Tulip",
        price: "18",
    },
    {
        img: "/images/home/plant.png",
        name: "Lily",
        price: "22",
    },
    {
        img: "/images/home/plant.png",
        name: "Daisy",
        price: "12",
    },
    {
        img: "/images/home/plant.png",
        name: "Orchid",
        price: "30",
    },
]

export default function Home() {
    return (
        <main className="flex h-full w-full flex-col">
            {/* header container */}
            <header
                className={`flex min-h-screen flex-col items-center justify-center bg-[url('./../public/images/home/header_background.jpg')] bg-cover bg-fixed p-6`}
            >
                <div className="text-foreground flex h-full max-h-[1000px] w-full max-w-[1000px] flex-col items-center justify-center space-y-14 rounded-[34px] bg-white/90 py-20">
                    <h1
                        className={`text-center text-[60px] font-black md:text-[80px] ${agbalumo.className}`}
                    >
                        Pretty Wales Farm
                    </h1>
                    <h2 className="flex px-6 text-center text-[26px]">
                        Your Destination for Farm Fresh Delights and Family Fun
                    </h2>
                    <Link
                        href={"/#explore"}
                        className="border-foreground bg-foreground hover:text-primary hover:border-primary rounded-full border-2 px-8 py-2 text-[20px] font-medium text-white transition-all duration-200 ease-linear hover:bg-transparent"
                    >
                        Explore more
                    </Link>
                </div>
            </header>

            {/* ALL PAGES container */}
            <section
                className="flex w-full flex-col space-y-10 py-20"
                id="explore"
            >
                <Heading2>Visit other pages</Heading2>
                <div className="flex w-full flex-col items-center space-y-10 px-5">
                    <Card className="flex min-h-[250px] w-full max-w-[1200px] flex-col overflow-hidden md:flex-row">
                        <Image
                            src={"/images/home/pages-zoo.jpg"}
                            width={400}
                            height={250}
                            alt="Zoo page picture"
                            className="flex h-[250px] w-[400px] object-cover"
                            style={{ aspectRatio: "8/5" }}
                        />
                        <div className="flex w-full flex-col justify-center space-y-5 px-10 py-5">
                            <h3 className="text-2xl font-bold">Petting Zoo</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Magni exercitationem enim
                                fugit labore inventore officia saepe molestias
                                corrupti ab libero.
                            </p>
                            <Link
                                href={"/petting-zoo"}
                                className="border-foreground bg-foreground hover:text-primary hover:border-primary place-self-end self-center justify-self-end rounded-full border-2 px-5 py-2 text-[17px] font-medium text-white transition-all duration-200 ease-linear hover:bg-transparent md:self-end"
                            >
                                Explore more
                            </Link>
                        </div>
                    </Card>
                    <Card className="flex min-h-[250px] w-full max-w-[1200px] flex-col overflow-hidden md:flex-row-reverse">
                        <Image
                            src={"/images/home/pages-cafe.jpg"}
                            width={400}
                            height={250}
                            alt="Café page picture"
                            className="flex h-[250px] w-[400px] object-cover"
                            style={{ aspectRatio: "8/5" }}
                        />
                        <div className="flex w-full flex-col justify-center space-y-5 px-10 py-5">
                            <h3 className="text-2xl font-bold">Café</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Magni exercitationem enim
                                fugit labore inventore officia saepe molestias
                                corrupti ab libero.
                            </p>
                            <Link
                                href={"/cafe"}
                                className="border-foreground bg-foreground hover:text-primary hover:border-primary place-self-end self-center justify-self-end rounded-full border-2 px-5 py-2 text-[17px] font-medium text-white transition-all duration-200 ease-linear hover:bg-transparent md:self-end"
                            >
                                Explore more
                            </Link>
                        </div>
                    </Card>
                    <Card className="flex min-h-[250px] w-full max-w-[1200px] flex-col overflow-hidden md:flex-row">
                        <Image
                            src={"/images/home/pages-park.jpg"}
                            width={400}
                            height={250}
                            alt="Kids play park page picture"
                            className="flex h-[250px] w-[400px] object-cover"
                            style={{ aspectRatio: "8/5" }}
                        />
                        <div className="flex w-full flex-col justify-center space-y-5 px-10 py-5">
                            <h3 className="text-2xl font-bold">
                                Kids Play Park
                            </h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Magni exercitationem enim
                                fugit labore inventore officia saepe molestias
                                corrupti ab libero.
                            </p>
                            <Link
                                href={"/kids-play-park"}
                                className="border-foreground bg-foreground hover:text-primary hover:border-primary place-self-end self-center justify-self-end rounded-full border-2 px-5 py-2 text-[17px] font-medium text-white transition-all duration-200 ease-linear hover:bg-transparent md:self-end"
                            >
                                Explore more
                            </Link>
                        </div>
                    </Card>
                </div>
            </section>

            {/* STATS container */}
            <section className="flex w-full flex-col items-center space-y-10 bg-lime-400 py-20">
                <Heading2>What we have done</Heading2>
                <div className="flex w-full justify-center">
                    <div className="grid w-full max-w-[1300px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                        {stats.map((item) => (
                            <div
                                className="my-4 flex flex-col items-center md:my-0"
                                key={item.title}
                            >
                                <h3 className="text-center text-[50px] font-black">
                                    {item.number}
                                </h3>
                                <h4
                                    className={`text-center text-[30px] font-semibold ${agbalumo.className} mb-3`}
                                >
                                    {item.title}
                                </h4>
                                <p className="w-full max-w-[170px] text-center">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PLANTS shop */}
            <section className="flex w-full flex-col items-center space-y-10 px-5 py-20">
                <Heading2>Plants Shop</Heading2>
                <div className="container flex flex-wrap justify-center gap-5">
                    {plants.map((item) => (
                        <Card
                            className="w-[266px] p-2 transition-shadow hover:shadow-md"
                            key={item.name}
                        >
                            <Image
                                src={item.img}
                                width={250}
                                height={300}
                                alt={item.name}
                                className="flex h-[300px] w-[250px] object-cover"
                                style={{ aspectRatio: "5/6" }}
                            />
                            <div className="flex items-center justify-between px-5 py-4">
                                <div className="flex-col">
                                    <h4 className="text-[20px] font-bold">
                                        {item.name}
                                    </h4>
                                    <h5>{item.price}£</h5>
                                </div>
                                <div className="">
                                    <AlertDialog>
                                        <AlertDialogTrigger className="border-foreground bg-foreground hover:text-primary hover:border-primary place-self-end self-center justify-self-end rounded-full border-2 px-4 py-1 text-[15px] font-medium text-white transition-all duration-200 ease-linear hover:bg-transparent md:self-end">
                                            Buy
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>
                                                    Do you want to buy?
                                                </AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    If you want to order
                                                    something you should contact
                                                    us by phone.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>
                                                    OK
                                                </AlertDialogCancel>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    )
}
