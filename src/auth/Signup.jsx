import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Signup() {
  const navigate = useNavigate()

  const handleSignup = () => {
    // Navigate directly to the main page
    navigate("/feed")
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">LOGO</CardTitle>
          <p className="text-center text-gray-500">Create your account</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Input type="text" placeholder="Full Name" className="h-11" />
            </div>
            <div className="space-y-2">
              <Input type="email" placeholder="Email" className="h-11" />
            </div>
            <div className="space-y-2">
              <Input type="password" placeholder="Password" className="h-11" />
            </div>
            <Button className="w-full h-11 bg-teal-400 hover:bg-teal-500" onClick={handleSignup}>
              Create Account
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <span className="text-gray-500">Already have an account?</span>{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-teal-500 hover:text-teal-600"
            >
              Sign in
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
