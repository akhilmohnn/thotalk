'use client';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <section className='sticky left-0 top-0 flex h-screen w-fit 
        flex-col justify-between p-6 text-white max-sm:hidden lg:w-[264px]'>
            <div className='h-screen w-64 bg-[#0B1220] text-white border-r border-[#1E293B] p-4 flex flex-col gap-6 rounded-2xl'>
                {sidebarLinks.map((link) => {
                    const isActive = pathname === link.route || pathname.startsWith(link.route);
                    return (
                        <Link
                            href={link.route}
                            key={link.Label}
                            className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {
                                'bg-blue-950': isActive,
                            })}
                        >
                            {link.Label}
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Sidebar;
