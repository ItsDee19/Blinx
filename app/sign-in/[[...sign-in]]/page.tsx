import { SignIn } from "@clerk/nextjs";
import AuthGradient from "@/components/auth/auth-gradient";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <AuthGradient />
      <div className="relative z-10 w-full max-w-md p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl">
        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-transparent shadow-none",
              headerTitle: "text-2xl font-bold text-gray-900",
              headerSubtitle: "text-gray-600",
              socialButtonsBlockButton: "bg-white border-gray-300 hover:bg-gray-50",
              formButtonPrimary: "bg-gradient-to-r from-slate-700 to-rose-600 hover:from-slate-800 hover:to-rose-700",
            }
          }}
        />
      </div>
    </div>
  );
}