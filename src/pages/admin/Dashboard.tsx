import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  Image, 
  FileText, 
  Building2, 
  Megaphone, 
  LogOut,
  Plus,
  Loader2,
  Home,
  User,
  Video,
  BookOpen
} from "lucide-react";
import ContentEditor from "@/components/admin/ContentEditor";
import ContentList from "@/components/admin/ContentList";

const AdminDashboard = () => {
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("hero_slide");
  const [isEditing, setIsEditing] = useState(false);
  const [editingContent, setEditingContent] = useState<any>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [stats, setStats] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [user, isAdmin, isLoading, navigate]);

  useEffect(() => {
    const fetchStats = async () => {
      const { data } = await supabase
        .from("site_content")
        .select("content_type");
      
      if (data) {
        const counts: Record<string, number> = {};
        data.forEach((item) => {
          counts[item.content_type] = (counts[item.content_type] || 0) + 1;
        });
        setStats(counts);
      }
    };
    
    fetchStats();
  }, [refreshKey]);

  const handleLogout = async () => {
    await signOut();
    navigate("/admin/login");
  };

  const handleEdit = (content: any) => {
    setEditingContent(content);
    setIsEditing(true);
  };

  const handleCreate = () => {
    setEditingContent(null);
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    setEditingContent(null);
    setRefreshKey((k) => k + 1);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingContent(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  const contentTypes = [
    { value: "hero_slide", label: "Hero Slides", icon: Image, description: "Homepage hero carousel slides" },
    { value: "story", label: "Featured Stories", icon: FileText, description: "Featured stories section" },
    { value: "department", label: "Departments", icon: Building2, description: "Academic departments" },
    { value: "principal_message", label: "Principal Message", icon: User, description: "Principal's welcome message" },
    { value: "gallery", label: "Gallery", icon: Video, description: "Video gallery section" },
    { value: "announcement", label: "Announcements", icon: Megaphone, description: "Site announcements" },
    { value: "page_section", label: "Page Sections", icon: BookOpen, description: "Other page content" },
  ];

  return (
    <div className="min-h-screen bg-secondary/20">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <LayoutDashboard className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold">Content Management</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                View Site
              </Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {isEditing ? (
          <ContentEditor
            contentType={activeTab}
            content={editingContent}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Content Types</CardTitle>
                  <CardDescription>Select a category to manage</CardDescription>
                </CardHeader>
                <CardContent className="space-y-1 p-2">
                  {contentTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setActiveTab(type.value)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                        activeTab === type.value
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <type.icon className="w-4 h-4 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{type.label}</p>
                        <p className={`text-xs truncate ${
                          activeTab === type.value 
                            ? "text-primary-foreground/70" 
                            : "text-muted-foreground"
                        }`}>
                          {stats[type.value] || 0} items
                        </p>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {contentTypes.find(t => t.value === activeTab)?.icon && (
                          <span className="p-2 bg-primary/10 rounded-lg">
                            {(() => {
                              const Icon = contentTypes.find(t => t.value === activeTab)?.icon;
                              return Icon ? <Icon className="w-5 h-5 text-primary" /> : null;
                            })()}
                          </span>
                        )}
                        {contentTypes.find(t => t.value === activeTab)?.label}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {contentTypes.find(t => t.value === activeTab)?.description}
                      </CardDescription>
                    </div>
                    <Button onClick={handleCreate}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add New
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ContentList
                    key={`${activeTab}-${refreshKey}`}
                    contentType={activeTab}
                    onEdit={handleEdit}
                    onRefresh={() => setRefreshKey((k) => k + 1)}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
