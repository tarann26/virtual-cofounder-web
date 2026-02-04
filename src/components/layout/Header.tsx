import { Link } from 'react-router-dom'
import { useAuthContext } from '@/features/auth'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { supabase } from '@/lib/api/supabase'
import { LogOut, Settings, User } from 'lucide-react'

interface HeaderProps {
  projectName?: string
  currentPhase?: string
}

export function Header({ projectName, currentPhase }: HeaderProps) {
  const { user } = useAuthContext()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  const initials = user?.email?.slice(0, 2).toUpperCase() || 'U'

  return (
    <header className="h-14 border-b bg-background px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link to="/projects" className="font-semibold text-lg">
          Virtual Co-founder
        </Link>

        {projectName && (
          <>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">{projectName}</span>
          </>
        )}

        {currentPhase && (
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full capitalize">
            {currentPhase}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
