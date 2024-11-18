import Link from "next/link";

export default function  NavBar()
{
    return (


        <nav>
            <li><Link href={{
                pathname: '/home',
                query: {
                    q: 13,
                }
            }}


            >Home</Link></li>
            <li><Link href="/about">about</Link></li>
            <li><Link href="/blog/10">B 10</Link></li>
            <li><Link href="/blog/85">B 85</Link></li>
        </nav>

        )
}