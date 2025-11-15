import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { ErrorBoundary } from "react-error-boundary";

import { Button } from "@/components/ui/button";
import PokemonDetailsCard from "@/components/PokemonDetailsCard";
import { SkeletonCard } from "@/components/SkeletonCard";

const PokemonDetailsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-fuchsia-100 p-6">
      <Button
        variant={"outline"}
        className="cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <ArrowLeftIcon />
        Back to list
      </Button>

      <Suspense fallback={<SkeletonCard className="max-w-3xl mx-auto" />}>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <PokemonDetailsCard />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

export default PokemonDetailsPage;
