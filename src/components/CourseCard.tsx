import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  posterImage: string;
  keywords: string[];
}

const CourseCard = ({
  id,
  title,
  posterImage,
  keywords,
}: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
      {/* Course Poster */}
      <div className="relative overflow-hidden">
        <img
          src={posterImage}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Play className="w-12 h-12 text-white" />
        </div>
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold">
            <Clock className="w-3 h-3 mr-1" />
            Self-paced
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="font-semibold text-lg leading-tight mb-4">{title}</h3>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {keyword}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Link to={`/course/${id}`} className="w-full">
          <Button variant="accent" className="w-full">
            Enroll Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;