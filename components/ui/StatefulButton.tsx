"use client";

import React, { useState } from "react";
import { cn } from "@/app/libs/utils";

export type Status = "idle" | "loading" | "success" | "error";

interface StatefulButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status?: Status;
  loadingText?: string;
  successText?: string;
  errorText?: string;
  className?: string;
  children: React.ReactNode;
}

export const StatefulButton = ({
  status = "idle",
  loadingText = "Loading...",
  successText = "Success!",
  errorText = "Error!",
  className,
  children,
  ...props
}: StatefulButtonProps) => {
  const getStatusClasses = () => {
    switch (status) {
      case "loading":
        return "bg-blue-600 cursor-not-allowed";
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-blue-600 hover:bg-blue-700";
    }
  };

  const getContent = () => {
    switch (status) {
      case "loading":
        return (
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            {loadingText}
          </span>
        );
      case "success":
        return (
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {successText}
          </span>
        );
      case "error":
        return (
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            {errorText}
          </span>
        );
      default:
        return children;
    }
  };

  return (
    <button
      className={cn(
        "w-full text-white py-3 rounded-md text-lg font-semibold transition-all flex items-center justify-center",
        getStatusClasses(),
        className
      )}
      disabled={status === "loading"}
      {...props}
    >
      {getContent()}
    </button>
  );
};
