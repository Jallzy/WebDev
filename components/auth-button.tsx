import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { useState } from "react"

export function AuthButton() {
    const [isAuth, setAuth] = useState(false)

    const handleAuth = async (formData: FormData) => {
        // extract fields from form data
        const email = formData.get("email")
        const password = formData.get("password")

        // Possible checking user password here...
        if (email != password) {
            alert("Email or password incorrect.")
            return
        }

        // Accepting all auth request where email and password are same
        setAuth(true)
    }

    return (
        !isAuth && (
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className="cursor-pointer">
                        Login
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Login</DialogTitle>
                    </DialogHeader>
                    <form className="grid gap-4 py-4" action={handleAuth}>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Email
                            </Label>
                            <Input
                                name="email"
                                type="email"
                                placeholder="example@web.com"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Password
                            </Label>
                            <Input
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="col-span-3"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-min cursor-pointer place-self-center px-12"
                        >
                            Login
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        )
    )
}
