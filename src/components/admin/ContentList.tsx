import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Edit, Trash2, Loader2, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContentListProps {
  contentType: string;
  onEdit: (content: any) => void;
  onRefresh: () => void;
}

const ContentList = ({ contentType, onEdit, onRefresh }: ContentListProps) => {
  const [content, setContent] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchContent = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("site_content")
      .select("*")
      .eq("content_type", contentType)
      .order("display_order", { ascending: true });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to load content",
        variant: "destructive",
      });
    } else {
      setContent(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchContent();
  }, [contentType]);

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("site_content").delete().eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete content",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Content deleted successfully",
      });
      onRefresh();
      fetchContent();
    }
  };

  const togglePublished = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from("site_content")
      .update({ is_published: !currentStatus })
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: `Content ${!currentStatus ? "published" : "unpublished"}`,
      });
      fetchContent();
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (content.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No content found. Click "Add New" to create your first item.
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Key</TableHead>
          <TableHead>Order</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {content.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.title || "Untitled"}</TableCell>
            <TableCell className="text-muted-foreground text-sm">
              {item.content_key}
            </TableCell>
            <TableCell>{item.display_order}</TableCell>
            <TableCell>
              <Badge variant={item.is_published ? "default" : "secondary"}>
                {item.is_published ? "Published" : "Draft"}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => togglePublished(item.id, item.is_published)}
                  title={item.is_published ? "Unpublish" : "Publish"}
                >
                  {item.is_published ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(item)}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Content</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete this content? This action
                        cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(item.id)}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ContentList;
