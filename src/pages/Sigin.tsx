import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { useState } from "react";

export default function Signin () {
    const [formType, setFormType] = useState('signin');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (formType === 'signin') {
        const { email, password } = event.currentTarget.elements as typeof event.currentTarget.elements & {
          email: { value: string };
          password: { value: string };
        };
        console.log('Email:', email.value);
        console.log('Password:', password.value);
      } else if (formType === 'signup') {
        const { name, email, password, confirmPassword } = event.currentTarget.elements as typeof event.currentTarget.elements & {
          name: { value: string };
          email: { value: string };
          password: { value: string };
          confirmPassword: { value: string };
        };
        console.log('Name:', name.value);
        console.log('Email:', email.value);
        console.log('Password:', password.value);
        console.log('Confirm Password:', confirmPassword.value);
      }
      console.log('Form submitted!');
    };
  
    return (
        <Tabs className="w-full max-w-md mx-auto mt-10" defaultValue="signin">
          <TabsList className="flex justify-center gap-4 mb-8">
            <TabsTrigger value="signin" onClick={() => setFormType('signin')}>Sign In</TabsTrigger>
            <TabsTrigger value="signup" onClick={() => setFormType('signup')}>Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>Sign In</CardTitle>
                  <CardDescription>Enter your email and password to sign in.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="signin-email">Email</Label>
                    <Input id="signin-email" name="email" required type="email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="signin-password">Password</Label>
                    <Input id="signin-password" name="password" required type="password" />
                  </div>
                  <Link className="text-sm text-gray-600 hover:underline" to="#">
                    Forgot Password?
                  </Link>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit">
                    Submit
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
          <TabsContent value="signup">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>Sign Up</CardTitle>
                  <CardDescription>Enter your details to create a new account.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="signup-name">Name</Label>
                    <Input id="signup-name" name="name" required />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" name="email" required type="email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" name="password" required type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                    <Input id="signup-confirm-password" name="confirmPassword" required type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit">
                    Submit
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
        </Tabs>
      );
    }