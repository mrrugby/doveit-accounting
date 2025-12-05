import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Construction } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-6">
      <div
        className="text-center animate-fadeIn"
        style={{ animation: "fadeIn 0.6s ease-out" }}
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center animate-bounce-slow">
            <Construction className="w-10 h-10 text-primary" />
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-2 text-foreground">
          This page is under construction
        </h1>

        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
          We're currently building this part of the website.  
          Check back soon for updates!
        </p>

        <Button asChild size="lg" className="mt-2">
          <Link to="/" className="gap-2">
            Return Home
          </Link>
        </Button>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes bounceSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }

          .animate-bounce-slow {
            animation: bounceSlow 2s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;
