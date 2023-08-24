'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'

export default function Navigation() {
	const navLinks = [
		{
			'href': '/',
			'name': 'Home',
		},
		{
			'href': '/players',
			'name': 'Players',
		},
	]
	const pathname = usePathname()

	return (
		<>
			<nav className="flex w-full justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
				<div className="flex space-x-12">
					{
						
						navLinks.map((link) => {
							const isActive = pathname === link.href
					
							return (
								<Link
									className={isActive ? 'text-blue-600' : 'text-black'}
									href={link.href}
									key={link.name}
								>
									{link.name}
								</Link>
							)
					})}
				</div>
				<a
					className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
				By{' '}
				<Image
					src="/vercel.svg"
					alt="Vercel Logo"
					className="dark:invert"
					width={100}
					height={24}
					priority
				/>
				</a>
			</nav>
		</>
	)
}