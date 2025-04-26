'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Car, Globe, Instagram, Mail, MapPin, Phone, Store, Tent } from "lucide-react";

const Footer = () => {
    const router = useRouter();
    return (
        <motion.footer
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-neutral-50 border-t py-12"
        >
            <div className="container mx-auto px-4">
                <motion.div 
                className="mb-6 pb-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                >
                    <Link href="/" className="text-xl font-bold">
                        <Image
                        onClick={() => router.push('/')}
                        className="block mx-auto cursor-pointer"
                        src="/assets/logo-hy.png"
                        width="80"
                        height="80"
                        alt="Logo"
                        />
                    </Link>
                </motion.div>

                <motion.div 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-4 gap-8"
                >
                    <div>
                        <h3 className="text-xl font-bold mb-4">Himalayan Yield</h3>
                        <p className="text-gray-600">
                            Your all-in-one place for shops, treks, and cabs.
                        </p>
                        <br />
                        <ul className="flex gap-2 text-gray-600">
                            <li>
                                <Link href="#about" className="font-semibold hover:underline">About</Link>
                            </li>
                            <li>
                                <Link href="/" className="font-semibold hover:underline">Blogs</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <motion.li
                            whileHover={{ x: 5 }}
                            >
                                <Link href="/" className="flex items-center gap-2 text-gray-600">
                                    <Store className="h-5 w-5" />
                                    Shops
                                </Link>
                            </motion.li>
                            <motion.li
                            whileHover={{ x: 5 }}
                            >
                                <Link href="/" className="flex items-center gap-2 text-gray-600">
                                    <Tent className="h-5 w-5" />
                                    Treks
                                </Link>
                            </motion.li>  
                            <motion.li
                            whileHover={{ x: 5 }}
                            >
                                <Link href="/" className="flex items-center gap-2 text-gray-600">
                                    <Car className="h-5 w-5" />
                                    Cabs
                                </Link>
                            </motion.li>  
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <motion.li
                            whileHover={{ x: 5 }}
                            >
                                <a href="https://wa.me/917601806178" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600">
                                    <Phone className="h-5 w-5" />
                                    +91 7601806178
                                </a> 
                            </motion.li>
                            <motion.li
                            whileHover={{ x: 5 }}
                            >
                                <a href="mailto:himalayanyield100@gmail.com" className="flex items-center gap-2 text-gray-600">
                                    <Mail className="h-5 w-5" />
                                    himalayanyield100@gmail.com
                                </a> 
                            </motion.li>
                            <motion.li
                            whileHover={{ x: 5 }}
                            >
                                <div className="flex items-center gap-2 text-gray-600">
                                    <MapPin className="h-5 w-5" />
                                    Sikkim, India
                                </div>
                            </motion.li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <motion.div
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            >
                                <a href="https://www.instagram.com/himalayan_yield" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-500">
                                    <Instagram className="h-5 w-5" />
                                </a>
                            </motion.div>
                            <motion.div
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            >
                                <a href="https://www.himalayanyields.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-500">
                                    <Globe className="h-5 w-5" />
                                </a>    
                            </motion.div>
                            <motion.div
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            >
                                <a href="mailto:himalayanyield100@gmail.com" className="text-gray-600 hover:text-blue-500">
                                    <Mail className="h-5 w-5" />
                                </a>    
                            </motion.div>
                            <motion.div
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            >
                                <a href="https://wa.me/917601806178" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 hover:text-green-500">
                                    <Phone className="h-5 w-5" />
                                </a> 
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                className="border-t border-gray-800 mt-8 pt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                >
                    &copy; {new Date().getFullYear()} Himalayan Yield. All rights reserved.
                </motion.div>
            </div>
        </motion.footer>
    );
}
 
export default Footer;