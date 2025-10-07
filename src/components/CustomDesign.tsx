import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Palette, Package, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Palette,
    title: "Choose Scent",
    description: "Select from our signature fragrances",
  },
  {
    icon: Upload,
    title: "Add Personal Touch",
    description: "Upload your custom design or label",
  },
  {
    icon: Package,
    title: "Order Size",
    description: "Single candle or bulk orders",
  },
];

const CustomDesign = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const allowedFormats = ["image/png", "image/jpeg", "image/svg+xml", "application/pdf"];
  const maxSizeMB = 10;
  const maxSizeBytes = maxSizeMB * 1024 * 1024;

  const handleFileChange = (file: File) => {
    // Validate file type
    if (!allowedFormats.includes(file.type)) {
      setError("Invalid file format. Please upload PNG, JPG, SVG, or PDF.");
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = ""; // Reset input
      return;
    }

    // Validate file size
    if (file.size > maxSizeBytes) {
      setError(`File size exceeds ${maxSizeMB}MB limit.`);
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = ""; // Reset input
      return;
    }

    setError("");
    setSelectedFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileChange(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileChange(file);
    }
  };

  const handleOrderSubmit = () => {
    if (!selectedFile) {
      setError("Please upload a design before submitting your order.");
      return;
    }
    // Placeholder for form submission logic (e.g., send file to server)
    console.log("Order submitted with file:", selectedFile);
    // Example: Send file to an API
    // const formData = new FormData();
    // formData.append("design", selectedFile);
    // fetch("/api/custom-candle", { method: "POST", body: formData });
    alert("Order submitted! (This is a placeholder action.)");
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Vision, Your Candle
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Upload your design, choose your scent, and let us craft a one-of-a-kind candle just for you.
            Perfect for special events, corporate gifts, or personal collections.
          </p>
        </div>

        {/* Upload Area */}
        <div
          className="max-w-2xl mx-auto mb-16"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          role="region"
          aria-describedby="upload-instructions"
        >
          <div className="border-2 border-dashed border-indigo-300 rounded-2xl p-12 text-center hover:border-indigo-500 transition-colors duration-300 bg-white/50 backdrop-blur-sm">
            <Upload className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
            <h3 className="font-ui text-xl font-semibold text-gray-900 mb-4">
              Drop your design here
            </h3>
            <p id="upload-instructions" className="font-body text-gray-600 mb-6">
              Drag and drop your artwork, or click to browse files
            </p>
            <input
              type="file"
              ref={fileInputRef}
              accept=".png,.jpg,.jpeg,.svg,.pdf"
              onChange={handleInputChange}
              className="hidden"
              aria-label="Upload custom candle design"
            />
            <Button
              variant="outline" // Replaced outline_gold with standard variant
              size="lg"
              onClick={handleButtonClick}
            >
              Choose File
            </Button>
            <p className="font-body text-sm text-gray-600 mt-4">
              Accepted formats: PNG, JPG, SVG, PDF (max 10MB)
            </p>
            {selectedFile && (
              <p className="font-body text-sm text-gray-900 mt-4">
                Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
              </p>
            )}
            {error && (
              <p className="font-body text-sm text-red-600 mt-4">
                {error}
              </p>
            )}
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-ui font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="font-body text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
        <Button
  asChild
  variant="default"
  size="lg"
  className="group"
>
  <a
    href="https://www.instagram.com/anuracandles.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    target="_blank"
    rel="noopener noreferrer"
  >
    <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
    Order Custom Candle In DM
  </a>
</Button>

        </div>
      </div>
    </section>
  );
};

export default CustomDesign;