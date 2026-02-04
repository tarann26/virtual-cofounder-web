import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create your Virtual Co-founder account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Signup form coming soon...
          </p>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link to="/login">Back to login</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
