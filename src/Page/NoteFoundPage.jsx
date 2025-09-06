import React from "react";
import { Button, Card } from "@heroui/react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center bg-[var(--brand-light)] h-screen">
      <Card className="p-10 shadow-2xl rounded-2xl max-w-lg text-center bg-[var(--brand-bg)] backdrop-blur-md border-2 border-[var(--brand-border)]">
        {/* 404 big text */}
        <h1 className="text-7xl font-extrabold  bg-clip-text text-gray-800">
          4<span className="text-[var(--brand-green)]">0</span>4
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-2">
          The page you are looking for doesn’t exist. It might have been moved
          or deleted.
        </p>

        {/* Back button */}
        <div className="mt-6">
          <Link to="/">
           
            <Button
              className=" border-2 border-[var(--brand-green)] text-[var(--brand-green)] hover:bg-green-400 hover:text-white transition-colors duration-300"
              variant="bordered"
              size="lg"
            >
              ⬅ Back to Home
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
