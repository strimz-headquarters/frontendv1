import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from "react"


const Logo = ({ classname, image, href }: { classname: string, image: StaticImageData, href: string }) => {
    return (
        <Link href={href} className={classname}>
            <Image src={image} alt="Logo" className='w-full' width={407} height={128} priority quality={100} />
        </Link>
    )
}

export default Logo