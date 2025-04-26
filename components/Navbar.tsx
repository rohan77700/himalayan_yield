'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useMediaQuery from "@/app/hooks/useMediaQuery";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { User, Menu, X } from "lucide-react";

import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";

const Navbar = () => {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const switchToSignup = () => {
        setShowLogin(false);
        setShowSignup(true);
    };

    const switchToLogin = () => {
        setShowSignup(false);
        setShowLogin(true);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b"
        >
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link href="/" className="text-xl font-bold">
                        <Image
                        onClick={() => router.push('/')}
                        className="block cursor-pointer"
                        src="/assets/logo.png"
                        width="40"
                        height="40"
                        alt="Logo"
                        />
                    </Link>        
                </motion.div>

                <div className="hidden md:flex items-center justify-center font-extralight gap-6 absolute left-1/2 transform -translate-x-1/2">
                    <Button variant="ghost" className="hidden text-sm md:flex rounded-full">
                        <Link href="/shop" className="text-sm font-medium hover:font-bold">
                            Shops
                        </Link>
                    </Button>
                    <Button variant="ghost" className="hidden text-sm md:flex rounded-full">
                        <Link href="/trek" className="text-sm font-medium hover:font-bold">
                            Treks
                        </Link>
                    </Button>
                    <Button variant="ghost" className="hidden text-sm md:flex rounded-full">
                        <Link href="/cab" className="text-sm font-medium hover:font-bold">
                            Cabs
                        </Link>
                    </Button>
                    <div className="text-netural-300 cursor-default">|</div>
                    <Button variant="ghost" asChild className="hidden text-sm md:flex rounded-full">
                        <Link href="/#blog" className="text-sm font-medium hover:font-bold">
                            Blog
                        </Link>
                    </Button>
                    <Button variant="ghost" asChild className="hidden text-sm md:flex rounded-full">
                        <Link href="/#about" className="text-sm font-medium hover:font-bold">
                            About
                        </Link>
                    </Button>
                    <Button variant="ghost" asChild className="hidden text-sm md:flex rounded-full">
                        <Link href="/#contact" className="text-sm font-medium hover:font-bold">
                            Contact
                        </Link>
                    </Button>
                </div>

                {isMobileMenuOpen && isMobile && (
                    <div className="absolute top-14 left-0 w-full bg-white shadow-md z-50 flex flex-col items-center space-y-4 py-4">
                        <Button variant="ghost" className="text-sm md:hidden rounded-full">
                            <Link href="/shop" className="text-sm font-medium hover:font-bold">
                                Shops
                            </Link>
                        </Button>
                        <Button variant="ghost" className="text-sm md:hidden rounded-full">
                            <Link href="/trek" className="text-sm font-medium hover:font-bold">
                                Treks
                            </Link>
                        </Button>
                        <Button variant="ghost" className="text-sm md:hidden rounded-full">
                            <Link href="/cab" className="text-sm font-medium hover:font-bold">
                                Cabs
                            </Link>
                        </Button>
                        <Button variant="ghost" asChild className="text-sm md:hidden rounded-full">
                            <Link href="/#blog" className="text-sm font-medium hover:font-bold">
                                Blog
                            </Link>
                        </Button>
                        <Button variant="ghost" asChild className="text-sm md:hidden rounded-full">
                            <Link href="/#about" className="text-sm font-medium hover:font-bold">
                                About
                            </Link>
                        </Button>
                        <Button variant="ghost" asChild className="text-sm md:hidden rounded-full">
                            <Link href="/#contact" className="text-sm font-medium hover:font-bold">
                                Contact
                            </Link>
                        </Button>
                    </div>
                )}

                <div className="flex items-center gap-2">
                    {isMobile && (
                        <Button
                        onClick={toggleMobileMenu}
                        variant="ghost"
                        className="p-2 rounded-full"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    )}

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                            variant="ghost"
                            className="flex items-center gap-2 rounded-full p-2"
                            >
                                <User className="h-6 w-6" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem className="font-medium" onClick={() => setShowSignup(true)}>Sign up</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setShowLogin(true)}>Log in</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <SignupModal 
                    open={showSignup} 
                    onClose={() => setShowSignup(false)} 
                    onSwitchToLogin={switchToLogin}
                    />
                <LoginModal 
                    open={showLogin} 
                    onClose={() => setShowLogin(false)} 
                    onSwitchToSignup={switchToSignup}
                />
            </nav>
        </motion.header>
    );
}
 
export default Navbar;