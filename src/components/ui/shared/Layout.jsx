/* eslint-disable react/prop-types */
import { useState } from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, Bell, ShoppingBag, MessageCircle, Wallet, UserCircle, Settings, Menu } from 'lucide-react'

const Sidebar = ({ className, onLoginClick, onSignupClick }) => {
  const menuItems = [
    { icon: Search, label: 'Home', active: true },
    { icon: Bell, label: 'Notifications' },
    { icon: ShoppingBag, label: 'Shop' },
    { icon: MessageCircle, label: 'Conversation' },
    { icon: Wallet, label: 'Wallet' },
    { icon: UserCircle, label: 'My Profile' },
    { icon: Settings, label: 'Settings' },
  ]

  return (
    <div className={cn("w-64 h-full bg-white border-r p-6", className)}>
      <div className="text-xl font-bold mb-10">LOGO</div>
      <nav className="space-y-1">
        {menuItems.map((Item) => (
          <Button
            key={Item.label}
            variant="ghost"
            className={cn(
              "w-full justify-start gap-3 h-12 font-normal",
              Item.active ? "text-black" : "text-gray-500"
            )}
          >
            <Item.icon className="w-5 h-5" />
            {Item.label}
          </Button>
        ))}
      </nav>
      <div className="absolute bottom-6 left-6 space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-500 hover:text-gray-600 hover:bg-gray-100 gap-3 font-normal"
          onClick={onLoginClick}
        >
          Login
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-500 hover:text-gray-600 hover:bg-gray-100 gap-3 font-normal"
          onClick={onSignupClick}
        >
          Sign Up
        </Button>
      </div>
    </div>
  )
}

const ArtistCard = ({ name, username, image }) => (
  <div className="relative h-24 rounded-lg overflow-hidden mb-3">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    <div className="absolute bottom-0 left-0 p-3 text-white">
      <div className="flex items-center gap-2">
        <img
          src="/assets/pexels-ekaterina-12203460@2x.png"
          alt={name}
          className="w-8 h-8 rounded-full border-2 border-white"
        />
        <div>
          <h3 className="font-medium text-sm">{name}</h3>
          <p className="text-xs text-gray-300">@{username}</p>
        </div>
      </div>
    </div>
  </div>
)

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b z-10 flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <Sidebar />
            </SheetContent>
          </Sheet>
          <div className="text-xl font-bold md:hidden">LOGO</div>
        </div>
        <div className="flex items-center flex-1 max-w-xl gap-4">
          <div className="relative flex-1 max-w-xs hidden md:block">
            <Input
              type="search"
              placeholder="Search here..."
              className="h-10 pl-10 bg-gray-50 border-0"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <Button variant="ghost" size="sm" className="text-gray-500 hidden md:inline-flex">
            Filters
          </Button>
        </div>
        <Button className="bg-teal-400 hover:bg-teal-500 text-white px-4 md:px-6">
          Become a Seller
        </Button>
      </header>

      {/* Sidebar - hidden on mobile, visible on desktop */}
      <Sidebar className="hidden md:block fixed top-16 bottom-0 left-0 w-64" />

      {/* Main Content */}
      <main className="pt-16 md:pl-64">
        <div className="h-[calc(100vh-4rem)]">
          <div className="grid h-full grid-cols-1 lg:grid-cols-[1fr,300px]">
            {/* Scrollable Feed Area */}
            <ScrollArea className="h-full p-4 md:p-6">
              <div className="max-w-3xl mx-auto space-y-6">
                {children}
              </div>
            </ScrollArea>

            {/* Right Sidebar - hidden on mobile and tablet, visible on desktop */}
            <aside className="hidden lg:block border-l bg-white p-6">
              <div className="space-y-6">
                <Tabs defaultValue="artists" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="artists" className="flex-1">Artists</TabsTrigger>
                    <TabsTrigger value="photographers" className="flex-1">Photographers</TabsTrigger>
                  </TabsList>
                </Tabs>

                <ScrollArea className="h-[calc(100vh-10rem)]">
                  <div className="space-y-3 pr-4">
                    <ArtistCard
                      name="James Edward"
                      username="jamesart"
                      image="/assets/pexels-ekaterina-12203460@2x.png"
                    />
                    <ArtistCard
                      name="Chris Pine"
                      username="chriscreative"
                      image="/assets/pexels-ekaterina-12203460@2x.png"
                    />
                    <ArtistCard
                      name="Emma Jones"
                      username="emmadesigns"
                      image="/assets/pexels-ekaterina-12203460@2x.png"
                    />
                    <ArtistCard
                      name="Jessica Williams"
                      username="jessicaart"
                      image="/assets/pexels-ekaterina-12203460@2x.png"
                    />
                    <ArtistCard
                      name="Michael Chen"
                      username="mchenart"
                      image="/assets/pexels-ekaterina-12203460@2x.png"
                    />
                    <ArtistCard
                      name="Sarah Parker"
                      username="sparkdesigns"
                      image="/assets/pexels-ekaterina-12203460@2x.png"
                    />
                  </div>
                </ScrollArea>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}

