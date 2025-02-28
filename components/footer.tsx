import Heading2 from "./ui/heading2"

export default function Footer() {
    return (
        <footer className="mt-auto flex w-full flex-col items-center gap-y-10 bg-lime-600 py-10">
            <Heading2>Visit us</Heading2>
            <div className="flex flex-col md:flex-row md:gap-x-20">
                <div className="flex flex-col items-center">
                    <h3 className="mb-2.5 font-bold">Opening Hours</h3>
                    <div className="w-[250px] flex-col">
                        <div className="flex justify-between">
                            <span>Mon - Fri</span>
                            <span>8:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Sat</span>
                            <span>9:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Sun</span>
                            <span>Closed</span>
                        </div>
                    </div>
                </div>
                <div className="flex w-[250px] flex-col items-center">
                    <h3 className="mb-2.5 font-bold">Contacts</h3>
                    <div className="flex flex-col">
                        <span>+44 747474 7474</span>
                        <span>+44 444444 4444</span>
                    </div>
                </div>
            </div>
            <div className="text-center">©️ Made by Ihor Krasnopolskyi</div>
        </footer>
    )
}
