import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, LogOut } from "lucide-react";

const AdminBar = () => {
  const { isAdmin, signOut, user } = useAuth();

  if (!isAdmin) return null;

  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayoutDashboard className="w-4 h-4" />
          <span>Admin Mode</span>
          <span className="text-primary-foreground/70">|</span>
          <span className="text-primary-foreground/70">{user?.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" asChild>
            <Link to="/admin">
              <LayoutDashboard className="w-4 h-4 mr-2" />
              Dashboard
            </Link>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={signOut}
            className="text-primary-foreground hover:text-primary-foreground/80"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminBar;
