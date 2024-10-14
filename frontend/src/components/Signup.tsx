import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    // Here you would typically call your API to handle the sign-up process
    console.log("Sign up with:", { name, email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div
        className={`w-full max-w-md p-8 space-y-8 transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-800">Create an Account</h2>
          <p className="mt-4 text-sm text-slate-600">
            Already have an account?{" "}
            <Link to="/signin" className="text-slate-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-slate-700">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Ekaspreet Singh Atwal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-slate-300 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-slate-600"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="ekas@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-slate-300 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-slate-600"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-slate-700"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-slate-300 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-slate-600"
            />
          </div>
          {error && (
            <div className="flex items-center space-x-2 text-red-600 animate-shake">
              <AlertCircle size={20} />
              <span className="transition-transform duration-500">{error}</span>
            </div>
          )}
          <Button
            type="submit"
            className="w-full bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-md transition duration-200 transform hover:scale-105"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
