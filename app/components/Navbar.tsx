import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "./constants"
import Button from "./Button"


const Navbar = () => {
    return (
        <nav className="flexBetween max-container pasdding container relative z-30 py-5">
            <Link href="/">
                <Image src="/evertrail-logo.svg" alt="logo" width={130} height={50} /></Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>
            <Image
                src="menu.svg"
                alt="menu"
                width={25}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
            />


        </nav>
    )
}

export default Navbar
