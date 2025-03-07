"use client"

import Image from "next/image"
import { useMemo, useState } from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Heading2 from "@/components/ui/heading2"
import menuData from "@/assets/menu.json"

export default function Cafe() {
    const [menuCategory, setMenuCategory] = useState("")

    // Filter products based on menuCategory
    const filterProducts = (menuCategory: string | null) => {
        console.log(menuCategory)
        return menuCategory != ""
            ? menuData.filter((product) => product.category === menuCategory)
            : menuData
    }
    const visibleProducts = useMemo(
        () => filterProducts(menuCategory),
        [menuCategory],
    )

    const categories = [
        { title: "All", url: "" },
        { title: "Ice creams", url: "ice-creams" },
        { title: "Salads", url: "salads" },
        { title: "Drinks", url: "drinks" },
    ]

    return (
        <main className="flex w-full flex-col items-center p-5 py-20">
            <Heading2>Menu</Heading2>
            <div className="flex w-full max-w-[1200px] flex-col items-center space-y-5 pt-10">
                {/* Menu categories */}
                <div className="flex flex-wrap justify-center space-x-5">
                    {/* Categories: All, Icecreams, Salads, Drinks */}
                    {categories.map((e) => (
                        <Button
                            key={e.url}
                            className={
                                `text-foreground hover:bg-primary/90 mb-5 flex cursor-pointer items-center rounded-full px-4 py-2 shadow transition duration-200 last:mb-0 sm:mb-0 ` +
                                (menuCategory === e.url
                                    ? `bg-primary`
                                    : `bg-background`)
                            }
                            onClick={() => setMenuCategory(e.url)}
                        >
                            {e.title}
                        </Button>
                    ))}
                </div>
                {/* Products */}
                <div className="container flex flex-wrap justify-center gap-5">
                    {/* Products - is a data file with structure: {"name", "price", "category", "img"} */}
                    {visibleProducts.map((product) => (
                        <Card
                            className="w-[266px] p-2 opacity-100 transition-all transition-discrete hover:shadow-md starting:opacity-0"
                            key={product.name}
                        >
                            <Image
                                src={product.img}
                                width={250}
                                height={300}
                                alt={product.name}
                                className="flex h-[200px] w-[250px] object-cover"
                                style={{ aspectRatio: "5/4" }}
                            />
                            <div className="flex items-center justify-between px-5 py-4">
                                <div className="flex-col">
                                    <h4 className="text-[20px] font-bold">
                                        {product.name}
                                    </h4>
                                    <h5>{product.price}£</h5>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    )
}
