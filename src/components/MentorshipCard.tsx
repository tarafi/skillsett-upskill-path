import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, IndianRupee, Download } from "lucide-react";
import { Link } from "react-router-dom";

interface MentorshipCardProps {
  id: string;
  title: string;
  posterImage: string;
  description: string;
  keywords: string[];
  duration: string;
  fee: string;
  target: string;
}

const MentorshipCard = ({
  id,
  title,
  posterImage,
  description,
  keywords,
  duration,
  fee,
  target,
}: MentorshipCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Program Poster */}
      <div className="relative overflow-hidden">
        <img
          src={posterImage}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold">
            {duration}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <h3 className="font-semibold text-lg leading-tight mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{target}</p>
      </CardHeader>

      <CardContent className="py-0">
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
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

        {/* Program Details */}
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <IndianRupee className="w-4 h-4" />
            <span>{fee}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4 gap-2">
        <Link to={`/mentorship/${id}`} className="flex-1">
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

export default MentorshipCard;