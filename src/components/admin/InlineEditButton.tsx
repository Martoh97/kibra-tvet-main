import { useState, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Edit, Loader2, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface InlineEditButtonProps {
  contentKey: string;
  contentType: string;
  currentTitle?: string;
  currentDescription?: string;
  currentSubtitle?: string;
  currentImageUrl?: string;
  currentLink?: string;
  onUpdate?: () => void;
}

const InlineEditButton = ({
  contentKey,
  contentType,
  currentTitle = "",
  currentDescription = "",
  currentSubtitle = "",
  currentImageUrl = "",
  currentLink = "",
  onUpdate,
}: InlineEditButtonProps) => {
  const { isAdmin } = useAuth();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    title: currentTitle,
    description: currentDescription,
    subtitle: currentSubtitle,
    image_url: currentImageUrl,
    link: currentLink,
  });

  if (!isAdmin) return null;

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${contentType}/${fileName}`;
    const { error: uploadError } = await supabase.storage
      .from("content-images")
      .upload(filePath, file);
    if (uploadError) {
      toast({ title: "Upload failed", description: uploadError.message, variant: "destructive" });
      setIsUploading(false);
      return;
    }
    const { data: { publicUrl } } = supabase.storage.from("content-images").getPublicUrl(filePath);
    handleChange("image_url", publicUrl);
    setIsUploading(false);
    toast({ title: "Image uploaded", description: "Image uploaded successfully." });
  };

  const handleSave = async () => {
    setIsLoading(true);

    // First try to update existing content
    const { data: existing } = await supabase
      .from("site_content")
      .select("id")
      .eq("content_key", contentKey)
      .maybeSingle();

    let error;

    if (existing) {
      const result = await supabase
        .from("site_content")
        .update(formData)
        .eq("content_key", contentKey);
      error = result.error;
    } else {
      // Create new content if it doesn't exist
      const result = await supabase.from("site_content").insert({
        content_key: contentKey,
        content_type: contentType,
        ...formData,
        is_published: true,
      });
      error = result.error;
    }

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Content updated successfully",
      });
      setIsOpen(false);
      onUpdate?.();
    }

    setIsLoading(false);
  };

  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <Edit className="w-4 h-4" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit Content</DialogTitle>
            <DialogDescription>
              Make changes to this content section. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Enter title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subtitle">Subtitle</Label>
              <Input
                id="subtitle"
                value={formData.subtitle}
                onChange={(e) => handleChange("subtitle", e.target.value)}
                placeholder="Enter subtitle"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Enter description"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Image</Label>
              <div className="flex items-center gap-3">
                {formData.image_url && (
                  <div className="relative">
                    <img src={formData.image_url} alt="Preview" className="w-24 h-16 object-cover rounded" />
                    <Button type="button" variant="destructive" size="icon" className="absolute -top-2 -right-2 w-5 h-5" onClick={() => handleChange("image_url", "")}>
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                )}
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                <Button type="button" variant="outline" size="sm" onClick={() => fileInputRef.current?.click()} disabled={isUploading}>
                  {isUploading ? <><Loader2 className="w-4 h-4 mr-1 animate-spin" />Uploading...</> : <><Upload className="w-4 h-4 mr-1" />Upload</>}
                </Button>
              </div>
              <Input
                value={formData.image_url}
                onChange={(e) => handleChange("image_url", e.target.value)}
                placeholder="Or paste image URL"
                className="mt-1"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="link">Link</Label>
              <Input
                id="link"
                value={formData.link}
                onChange={(e) => handleChange("link", e.target.value)}
                placeholder="Enter link"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InlineEditButton;
