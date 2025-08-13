import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Images, Download, Trash2, Clock } from "lucide-react";

const Gallery = () => {
  // Placeholder data - will be replaced with real data from Supabase
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
      prompt: "Modern smartphone with colorful light trails",
      createdAt: "2 hours ago"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      prompt: "Luxury watch product photography",
      createdAt: "1 day ago"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      prompt: "Running shoes with dynamic background",
      createdAt: "3 days ago"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-ai-gradient bg-clip-text text-transparent">
            Your Gallery
          </h1>
          <p className="text-muted-foreground mt-1">
            All your AI-generated images in one place
          </p>
        </div>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          {images.length} {images.length === 1 ? 'image' : 'images'}
        </Badge>
      </div>

      {/* Gallery Grid */}
      {images.length === 0 ? (
        <Card className="border-0 shadow-ai-glow bg-card/80 backdrop-blur-sm">
          <CardContent className="py-24">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 mx-auto rounded-full bg-muted flex items-center justify-center">
                <Images className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold">No images yet</h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                Start creating amazing AI-generated images to see them here
              </p>
              <Button className="bg-ai-gradient hover:shadow-ai-glow-strong transition-all duration-300">
                Generate Your First Image
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <Card key={image.id} className="group border-0 shadow-lg hover:shadow-ai-glow transition-all duration-300 bg-card/80 backdrop-blur-sm overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.prompt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="destructive" className="bg-destructive/90 hover:bg-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 space-y-2">
                <p className="text-sm font-medium line-clamp-2">
                  {image.prompt}
                </p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {image.createdAt}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;