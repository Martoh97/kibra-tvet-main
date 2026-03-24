import { useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Loader2, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContentEditorProps {
  contentType: string;
  content: any | null;
  onSave: () => void;
  onCancel: () => void;
}

const ContentEditor = ({ contentType, content, onSave, onCancel }: ContentEditorProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    content_key: content?.content_key || "",
    title: content?.title || "",
    subtitle: content?.subtitle || "",
    description: content?.description || "",
    content: content?.content || {},
    image_url: content?.image_url || "",
    link: content?.link || "",
    display_order: content?.display_order || 0,
    is_published: content?.is_published ?? true,
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${contentType}/${fileName}`;

    const { error: uploadError, data } = await supabase.storage
      .from("content-images")
      .upload(filePath, file);

    if (uploadError) {
      toast({
        title: "Upload failed",
        description: uploadError.message,
        variant: "destructive",
      });
      setIsUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage
      .from("content-images")
      .getPublicUrl(filePath);

    handleChange("image_url", publicUrl);
    setIsUploading(false);
    
    toast({
      title: "Image uploaded",
      description: "Your image has been uploaded successfully.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      ...formData,
      content_type: contentType,
      updated_by: user?.id,
      ...(content ? {} : { created_by: user?.id }),
    };

    let error;

    if (content) {
      const result = await supabase
        .from("site_content")
        .update(payload)
        .eq("id", content.id);
      error = result.error;
    } else {
      const result = await supabase.from("site_content").insert(payload);
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
        description: content ? "Content updated successfully" : "Content created successfully",
      });
      onSave();
    }
    setIsLoading(false);
  };

  const getContentTypeLabel = () => {
    const labels: Record<string, string> = {
      hero_slide: "Hero Slide",
      story: "Featured Story",
      department: "Department",
      announcement: "Announcement",
      page_section: "Page Section",
      principal_message: "Principal Message",
      gallery: "Gallery",
    };
    return labels[contentType] || contentType;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onCancel}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <CardTitle>
            {content ? "Edit" : "Create"} {getContentTypeLabel()}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="content_key">Content Key (unique identifier)</Label>
              <Input
                id="content_key"
                value={formData.content_key}
                onChange={(e) => handleChange("content_key", e.target.value)}
                placeholder="e.g., hero-slide-1"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="display_order">Display Order</Label>
              <Input
                id="display_order"
                type="number"
                value={formData.display_order}
                onChange={(e) => handleChange("display_order", parseInt(e.target.value) || 0)}
              />
            </div>
          </div>

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
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="link">Link (optional)</Label>
            <Input
              id="link"
              value={formData.link}
              onChange={(e) => handleChange("link", e.target.value)}
              placeholder="e.g., /our-programmes"
            />
          </div>

          <div className="space-y-2">
            <Label>Image</Label>
            <div className="flex items-center gap-4">
              {formData.image_url && (
                <div className="relative">
                  <img
                    src={formData.image_url}
                    alt="Preview"
                    className="w-32 h-20 object-cover rounded-lg"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2 w-6 h-6"
                    onClick={() => handleChange("image_url", "")}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              )}
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Image
                    </>
                  )}
                </Button>
              </div>
            </div>
            <Input
              value={formData.image_url}
              onChange={(e) => handleChange("image_url", e.target.value)}
              placeholder="Or paste image URL"
              className="mt-2"
            />
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="is_published"
              checked={formData.is_published}
              onCheckedChange={(checked) => handleChange("is_published", checked)}
            />
            <Label htmlFor="is_published">Published</Label>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Content"
              )}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContentEditor;
