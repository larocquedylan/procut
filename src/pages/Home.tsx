import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Link, NavLink } from 'react-router-dom';
import logo from "@/assets/company-logo.png"
import React from "react";

export function Header(): React.ReactElement {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow">
      <Link to="#">
        <img alt="Crunchyroll" className="h-8" src={logo} />
        <span className="sr-only">Procut</span>
      </Link>
      <nav className="space-x-4">
        <Link className="text-lg font-medium hover:underline" to="#">
          Home
        </Link>
        <Link className="text-lg font-medium hover:underline" to="#">
          Trending
        </Link>
        <Link className="text-lg font-medium hover:underline" to="#">
          Popular
        </Link>
        <Link className="text-lg font-medium hover:underline" to="#">
          Latest
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link to='/signin'>
          <Button variant="outline">Sigin</Button>
        </Link>
        <Link to='/sigin'>
          <Button>Signout</Button> 
        </Link>
      </div>
    </header>
  )

}

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-4">
        <section className="p-4">
          <h2 className="text-xl font-bold">Latest Releases</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <Card>
              <CardHeader>
                <img
                  alt="Product Card"
                  className="w-full h-40 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent className="p-2">
                <h3 className="text-lg font-semibold">Product Card</h3>
              </CardContent>
            </Card>
          </div>
          <Button className="mt-4" variant="link">
            View All
          </Button>
        </section>
        <section className="p-4">
          <h2 className="text-xl font-bold">Popular Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <Card>
              <CardHeader>
                <img
                  alt="Product Card"
                  className="w-full h-40 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent className="p-2">
                <h3 className="text-lg font-semibold">Product Card</h3>
              </CardContent>
            </Card>
          </div>
          <Button className="mt-4" variant="link">
            View All
          </Button>
        </section>
      </main>
      <footer className="mt-8 p-4 bg-gray-100">
        <nav className="flex flex-wrap justify-center space-x-4">
          <Link className="text-sm hover:underline" to="#">
            About Us
          </Link>
          <Link className="text-sm hover:underline" to="#">
            FAQ
          </Link>
          <Link className="text-sm hover:underline" to="#">
            Terms of Service
          </Link>
          <Link className="text-sm hover:underline" to="#">
            Contact Us
          </Link>
        </nav>
      </footer>
    </>
  )
}

// function CitrusIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" />
//       <path d="M19.65 15.66A8 8 0 0 1 8.35 4.34" />
//       <path d="m14 10-5.5 5.5" />
//       <path d="M14 17.85V10H6.15" />
//     </svg>
//   )
// }