"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import * as crypto from 'crypto';
import { Badge, IconButton } from "@radix-ui/themes";
import { 
    DotsHorizontalIcon,
    ArrowRightIcon,
    PlusIcon
} from "@radix-ui/react-icons";

const categories = [
    {count: 3, color: 'red', label: 'Tech', id: "1"},
    {count: 5, color: 'green', label: 'Business', id: "2"},
    {count: 8, color: 'yellow', label: 'Reminders', id: "3"},
    {count: 132, color: 'blue', label: 'Voice', id: "4"},
    {count: 33, color: 'orange', label: 'Study', id: "5"},
    {count: 6, color: 'purple', label: 'Work', id: "6"},
    {count: 9, color: 'pink', label: 'School', id: "7"},
    {count: 2, color: 'indigo', label: 'Errands', id: "8"},
]

const generateRandomUUID = () => {
    return crypto.randomBytes(16).toString("hex");
}


function Dashboard() {

    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            // width of the entire carousel
            const carouselWidth = carouselRef.current.scrollWidth;
            
            // width of what's on the screen
            const carouselViewportSegmentWidth = carouselRef.current.offsetWidth;
            
            setWidth(carouselWidth - (carouselViewportSegmentWidth));
        }
    }, []);

    return (
        <div className="p-4 bg-gray-100">
            <section className="mt-16 mb-6">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="uppercase text-sm font-semibold">Categories</h2>
                    <Link href="/" className="text-sm text-blue-500 hover:text-blue-600">
                        <p className="flex items-center">
                            <span className="mr-1">See all</span>
                            <ArrowRightIcon /> 
                        </p>
                    </Link >
                </div>

                <motion.div 
                    className="cursor-grabbing overflow-hidden" 
                    ref={carouselRef} 
                    whileTap={{ cursor: "grabbing"}}
                >
                    <motion.div 
                        className="flex"
                        drag="x"
                        dragConstraints={{ 
                            right: 0,
                            left: -width,
                        }}
                    >
                    {categories.map((item: { count: number; label: string; id: string, color: string;}) => (
                        <motion.div 
                            key={item.id} 
                            // className={`flex shrink-0 mr-2 rounded-md text-gray-500 bg-indigo-500`}
                            className={`flex shrink-0 mr-2 rounded-md text-gray-500 bg-${item.color}-500`}
                        >
                            <div className={`flex px-4 py-2 space-x-2 items-center justify-center`}>
                                <p className="text-white text-sm font-semibold">
                                    {item.label}
                                </p>

                                <span className={`text-xs text-${item.color}-500`}>
                                    <p className="text-sm text-white/60 font-semibold">
                                        {item.count}
                                    </p>
                                </span>
                            </div>
                        </motion.div>
                    ))}
                    </motion.div>
                </motion.div>
            </section>


            <section className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="uppercase text-sm font-semibold">Pinned</h2>
                    <Link href="/" className="text-sm text-blue-500 hover:text-blue-600">
                        See all
                    </Link >
                </div>

                
                <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    {[...Array(6)].map((item: any, i: number) => (
                        <div key={i} className={`flex flex-col h-36 rounded-lg text-gray-500 bg-white p-2`}>
                            <div className="mb-1 flex justify-between items-center">
                                <div className="text-xs">Nov 23</div>
                                <DotsHorizontalIcon className="hover:cursor-pointer" />
                            </div>
                            <div className="text-md font-semibold text-gray-600">New Design Ideas</div>
                            <div className="text-sm text-gray-400">Sustainable Design: One of the most significant trends</div>
                            <div className="mt-auto">
                                <Badge color="red">Design</Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="uppercase text-sm font-semibold">Recent</h2>
                    <Link href="/" className="text-sm text-blue-500 hover:text-blue-600">
                        See all
                    </Link >
                </div>

                
                <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    {[...Array(4)].map((item: any, i: number) => (
                        <div key={i} className={`flex flex-col h-36 rounded-lg text-gray-500 bg-white p-2`}>
                            <div className="mb-1 flex justify-between items-center">
                                <div className="text-xs">Nov 23</div>
                                <DotsHorizontalIcon className="hover:cursor-pointer" />
                            </div>
                            <div className="text-md font-semibold text-gray-600">New Design Ideas</div>
                            <div className="text-sm text-gray-400">Sustainable Design: One of the most significant trends</div>
                            <div className="mt-auto">
                                <Badge color="red">Design</Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <section className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="uppercase text-sm font-semibold">Reminders</h2>
                    <Link href="/" className="text-sm text-blue-500 hover:text-blue-600">
                        See all
                    </Link >
                </div>

                
                <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    {[...Array(4)].map((item: any, i: number) => (
                        <div key={i} className={`flex flex-col h-36 rounded-lg text-gray-500 bg-white p-2`}>
                            <div className="mb-1 flex justify-between items-center">
                                <div className="text-xs">Nov 23</div>
                                <DotsHorizontalIcon className="hover:cursor-pointer" />
                            </div>
                            <div className="text-md font-semibold text-gray-600">New Design Ideas</div>
                            <div className="text-sm text-gray-400">Sustainable Design: One of the most significant trends</div>
                            <div className="mt-auto">
                                <Badge color="red">Design</Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <div className="relative">
                <IconButton 
                    className="fixed bottom-4 right-4 rounded-full shadow-lg hover:cursor-pointer"
                    size="4"
                    radius="full"
                >
                    <PlusIcon />
                </IconButton>
            </div>

            
        </div>
    );
}

export default Dashboard;
