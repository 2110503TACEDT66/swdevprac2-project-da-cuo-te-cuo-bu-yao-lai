'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './banner.module.css'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

export default function Banner() {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg']
    const [index, setindex] = useState(0)
    const router = useRouter()

    const { data: session } = useSession()
    console.log(session?.user.token)

    return (
        <div className={styles.banner} onClick={() => { setindex(index + 1) }}>
            <Image src={covers[index % 3]} alt='cover' fill={true} priority className='object-cover' />
            <div className={styles.bannerText}>
                <h1 className='text-3xl font-medium'>Your travel partner</h1>
                <h3 className='text-xl font-serif'>Explore Your World with Us</h3>
            </div>
            {
                session ? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'> Hello {session.user?.name}</div> : null
            }
            <button className='bg-white text-cyan-600 border border-cyan-600 
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 
            hover:bg-cyan-600 hover:text-white hover:border-transparent'
                onClick={(e) => { e.stopPropagation(); router.push('/car') }}>
                Select Your Travel Partner NOW</button>
        </div>
    )
}