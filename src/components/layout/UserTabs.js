"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserTabs({ isAdmin }) {
    const path = usePathname();

    // const links = [
    //     { href: '/profile', label: 'Profile' },
    //     { href: '/categories', label: 'Categories', admin: true },
    //     { href: '/menu-items', label: 'Menu Items', admin: true },
    //     { href: '/users', label: 'Users', admin: true },
    // ];

    return (
        <div className="flex mx-auto gap-2 tabs justify-center mb-3">
            {/* {links.map(link => {
                if (!link.admin || isAdmin) {
                    return ( */}
                        <Link
                            // key={link.href}
                            href={'/profile'}
                            className={path === '/profile' ? 'active' : ''}
                        >
                            Profile
                        </Link>
                        {isAdmin && (
                            <>
                            <Link href={'/categories'}  className={path === '/categories' ? 'active' : ''}>Categories</Link>
                            <Link href={'/menu-items'}  className={path.includes('menu-items')  ? 'active' : ''}>Menu Items</Link>
                            <Link href={'/users'}  className={path === '/users' ? 'active' : ''}>Users</Link>
                            </>
                        )}
                    {/* );
                }
                return null;
            })} */}
        </div>
    );
}
