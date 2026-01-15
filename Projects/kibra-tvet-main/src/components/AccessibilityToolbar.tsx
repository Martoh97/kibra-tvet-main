import { useState, useEffect } from "react";
import { FaWheelchair } from "react-icons/fa";
import { Type, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

export const AccessibilityToolbar = () => {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedFontSize = localStorage.getItem("accessibility-font-size");
    const savedHighContrast = localStorage.getItem(
      "accessibility-high-contrast"
    );

    if (savedFontSize) {
      const size = parseInt(savedFontSize);
      setFontSize(size);
      document.documentElement.style.fontSize = `${size}%`;
    }

    if (savedHighContrast === "true") {
      setHighContrast(true);
      document.documentElement.classList.add("high-contrast");
    }
  }, []);

  const updateFontSize = (newSize: number) => {
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
    localStorage.setItem("accessibility-font-size", newSize.toString());

    toast.success(`Font size set to ${newSize}%`, {
      description: "Your preference has been saved",
    });
  };

  const toggleHighContrast = (enabled: boolean) => {
    setHighContrast(enabled);

    if (enabled) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }

    localStorage.setItem("accessibility-high-contrast", enabled.toString());

    toast.success(
      enabled ? "High contrast enabled" : "High contrast disabled",
      {
        description: "Your preference has been saved",
      }
    );
  };

  const resetSettings = () => {
    updateFontSize(100);
    toggleHighContrast(false);
    toast.success("Accessibility settings reset to default");
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            aria-label="Accessibility options"
            className="rounded-full shadow-lg border bg-background hover:bg-accent"
          >
            <FaWheelchair className="h-12 w-12" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-80 shadow-xl border rounded-xl"
          align="end"
          side="top"
        >
          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="font-semibold text-sm">Accessibility Options</h4>
              <p className="text-xs text-muted-foreground">
                Customize your viewing experience
              </p>
            </div>

            {/* Font Size Controls */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2 text-sm">
                <Type className="h-4 w-4" />
                Font Size: {fontSize}%
              </Label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateFontSize(Math.max(80, fontSize - 10))}
                  disabled={fontSize <= 80}
                  aria-label="Decrease font size"
                >
                  A-
                </Button>
                <div className="flex-1 text-center text-xs text-muted-foreground">
                  {fontSize === 100
                    ? "Default"
                    : fontSize < 100
                    ? "Smaller"
                    : "Larger"}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateFontSize(Math.min(150, fontSize + 10))}
                  disabled={fontSize >= 150}
                  aria-label="Increase font size"
                >
                  A+
                </Button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between space-x-2">
              <Label
                htmlFor="high-contrast"
                className="flex items-center gap-2 text-sm cursor-pointer"
              >
                <FaWheelchair className="h-6 w-6" />
                High Contrast Mode
              </Label>
              <Switch
                id="high-contrast"
                checked={highContrast}
                onCheckedChange={toggleHighContrast}
                aria-label="Toggle high contrast mode"
              />
            </div>

            {/* Reset Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={resetSettings}
              className="w-full"
              aria-label="Reset accessibility settings"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset to Default
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
