'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "../ui/textarea";

interface SignupModalProps {
    open: boolean;
    onClose: () => void;
    onSwitchToLogin: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({
    open,
    onClose,
    onSwitchToLogin
}) => {
    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleSignup = () => {
        // signup logic

        if (!userName || !fullName || !email || !password || !address || !phone) {
            alert("Please fill all required fields.");
            return;
        }

        const signupData = {
            user_name: userName,
            full_name: fullName,
            email,
            password,
            city,
            state,
            address,
            phone,
        };
        console.log("Signing up:", signupData);
        onClose();
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md rounded-2xl">
                <DialogHeader>
                    <DialogTitle className="text-lg text-center font-semilight m-2">Sign Up</DialogTitle>
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
                    type="text"
                    placeholder="Fullname"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
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
                    <div className="flex-1 flex flex-row items-center justify-between gap-2">
                        <Input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />
                        <Input
                        type="text"
                        placeholder="State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                    <Textarea
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                    />
                    <Input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                    <Button onClick={handleSignup} className="mt-4">Sign Up</Button>
                </div>
                
                <hr />

                <div className="text-neutral-500 text-center mt-4 font-light">
                    <div className="flex flex-row items-center justify-center gap-2">
                        <div className="text-sm">Already have an account?</div>
                        <div
                        onClick={onSwitchToLogin}
                        className="text-sm text-neutral-800 cursor-pointer hover:underline"
                        >
                            Log in
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
 
export default SignupModal;