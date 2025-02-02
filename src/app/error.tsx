"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <AlertTriangle className="size-16 text-red-500" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900">
          Something Went Wrong
        </h1>

        <p className="text-lg text-gray-600">
          {error?.message || "An unexpected error occurred."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="gap-2" variant="outline">
            <RefreshCw className="size-4" />
            Try Again
          </Button>

          <Link
            href="/"
            className="gap-2 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <Home className="size-4" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
