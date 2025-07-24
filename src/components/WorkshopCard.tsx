import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, IndianRupee, Download } from "lucide-react";
import { Link } from "react-router-dom";

interface WorkshopCardProps {
  id: string;
  title: string;
  instructor: string;
  instructorImage: string;
  posterImage: string;
  description: string;
  keywords: string[];
  date: string;
  fee: string;
  mode: string;
  day: string;
}

const WorkshopCard = ({
  id,
  title,
  instructor,
  instructorImage,
  posterImage,
  description,
  keywords,
  date,
  fee,
  mode,
  day,
}: WorkshopCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Workshop Poster */}
      <div className="relative overflow-hidden">
        <img
          src={posterImage}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold">
            {day}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <h3 className="font-semibold text-lg leading-tight mb-2">{title}</h3>
        
        {/* Instructor Info */}
        <div className="flex items-center space-x-3 mb-3">
          <img
            src={instructorImage}
            alt={instructor}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-foreground">{instructor}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="py-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2 mb-4">
          {keywords.map((keyword, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {keyword}
            </Badge>
          ))}
        </div>

        {/* Workshop Details */}
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <IndianRupee className="w-4 h-4" />
            <span>Fee: {fee}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{mode}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4 gap-2">
        <Link to={`/workshop/${id}`} className="flex-1">
          <Button variant="accent" className="w-full">
            Apply Now
          </Button>
        </Link>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorkshopCard;