'use client';

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface LoginModalProps {
    open: boolean;
    onClose: () => void;
    onSwitchToSignup: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
    open,
    onClose,
    onSwitchToSignup
}) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // login logic

        const loginData = {
            user_name: userName,
            email,
            password,
        };
        console.log("Logging in:",loginData);
        onClose();
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md rounded-2xl">
                <DialogHeader>
                    <DialogTitle className="text-lg text-center font-semilight m-2">Log In</DialogTitle>
                    <hr />
                </DialogHeader>
                <div className="flex flex-col gap-4 mt-2">
                <Input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                    <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleLogin} className="mt-4">Log In</Button>
                </div>
                    
                <hr />

                <div className="text-neutral-500 text-center mt-4 font-light">
                    <div className="flex flex-row items-center justify-center gap-2">
                        <div className="text-sm">Don&apos;t have an account?</div>
                        <div
                        onClick={onSwitchToSignup}
                        className="text-sm text-neutral-800 cursor-pointer hover:underline"
                        >
                            Create an account
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
 
export default LoginModal;