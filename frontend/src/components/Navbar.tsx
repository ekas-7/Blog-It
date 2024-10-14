import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, MoreHorizontal, Edit, User, Settings, LogOut } from 'lucide-react'

interface NavbarProps {
  authorName?: string
}

export default function Navbar({ authorName = 'John Doe' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate() // Initialize useNavigate

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleLogout = () => {
    // Remove the token from localStorage (or sessionStorage)
    localStorage.removeItem('token') // Adjust this based on your implementation
    console.log("User logged out")
    navigate('/') // Navigate to home page
  }

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto px-4 sm:px-6 lg:px-">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/blogs" className="text-xl font-bold text-gray-800">
                Blog it
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link to="/publish">
              <Button variant="ghost" className="flex items-center">
                <Edit className="mr-2 h-4 w-4" />
                Publish
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="ml-3 relative flex items-center">
                  <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200">
                    <MoreHorizontal className="h-4 w-4 text-gray-600" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <Link to="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/publish"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Publish
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200">
                  <MoreHorizontal className="h-5 w-5 text-gray-600" />
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">{authorName}</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                to="/profile"
                className="flex items-center  px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
              <Link
                to="/settings"
                className="flex items-center  px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
              <Button
                variant="ghost"
                className="flex items-center w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
