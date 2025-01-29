import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { batches } from "@/data/batches";

const Archive = () => {
  const [selectedBatch, setSelectedBatch] = useState("kaal-vairab");
  const currentBatch = batches[selectedBatch];

  if (!currentBatch) {
    return <div>Batch not found</div>;
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto px-4 md:px-6">
      <div className="cyber-container">
        <h1 className="text-3xl font-bold text-gradient mb-6">
          Program Archives
        </h1>
        <Select value={selectedBatch} onValueChange={setSelectedBatch}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Select batch" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(batches).map(([id, batch]) => (
              <SelectItem key={id} value={id}>
                {batch.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="cyber-container">
        <h2 className="text-2xl font-bold text-gradient mb-4">Batch Overview</h2>
        <p className="text-cyber-text">{currentBatch.overview}</p>
      </div>

      <div className="cyber-container">
        <h2 className="text-2xl font-bold text-gradient mb-6">Testimonials</h2>
        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {currentBatch.testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <div className="cyber-container min-h-[300px] md:min-h-[250px] flex flex-col justify-start">
                    <h3 className="text-cyber-accent font-bold mb-4">
                      {testimonial.username}
                    </h3>
                    <ScrollArea className="h-[200px] md:h-[150px] w-full rounded-md">
                      <p className="text-cyber-text pr-4">{testimonial.text}</p>
                    </ScrollArea>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      <div className="cyber-container">
        <h2 className="text-2xl font-bold text-gradient mb-4">
          Start and End Date
        </h2>
        <p className="text-cyber-text">
          Duration: {currentBatch.startDate} - {currentBatch.endDate} (
          {Math.round(
            (new Date(currentBatch.endDate).getTime() -
              new Date(currentBatch.startDate).getTime()) /
              (1000 * 60 * 60 * 24 * 30.44)
          ).toFixed(1)}{" "}
          months or{" "}
          {Math.round(
            (new Date(currentBatch.endDate).getTime() -
              new Date(currentBatch.startDate).getTime()) /
              (1000 * 60 * 60 * 24)
          )}{" "}
          days)
        </p>
      </div>

      <div className="cyber-container">
        <h2 className="text-2xl font-bold text-gradient mb-4">
          Did It Meet NCA's Expectations?
        </h2>
        <p className="text-cyber-text">{currentBatch.expectations}</p>
      </div>
    </div>
  );
};

export default Archive;