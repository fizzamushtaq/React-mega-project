import { useState } from "react";
import React from 'react';
import { Button, Logo, Input } from "../components/index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/Auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";

function SigninUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm(); // Handle form validation
    const [error, setError] = useState("");
  
    const create = async (data) => {
      setError(""); // Clear previous errors
      try {
        const userData = await authService.createAccount(data); // Create account
        if (userData) {
          const currentUser = await authService.getCurrentUser(); // Fetch current user
          dispatch(login(currentUser)); // Save user data to Redux store
          navigate("/"); // Redirect to home page
        }
      } catch (error) {
        console.error("Error creating account:", error); // Log detailed error
        setError(error.message || "Failed to create account. Please try again."); // Set user-friendly error
      }
    };
  
  
  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", { required: "Full Name is required" })}
            />
            {error.name && <p className="text-red-600">{errors.name.message}</p>}

            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email address must be a valid address",
                },
              })}
            />
            {error.email && <p className="text-red-600">{errors.email.message}</p>}

            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {error.password && <p className="text-red-600">{errors.password.message}</p>}

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigninUp;
