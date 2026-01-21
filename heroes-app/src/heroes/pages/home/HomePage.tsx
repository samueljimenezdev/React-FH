import {
    Heart
} from "lucide-react"


import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"
import { useQuery } from "@tanstack/react-query"

type activeTabType = "all" | "favorites" | "heroes" | "villains";

export const HomePage = () => {

    const [activeTab, setActiveTab] = useState<activeTabType>("all")

    const { data: heroesResponse } = useQuery({
        queryKey: ['heroes'], // Unique key for the query to save in cache
        queryFn: () => getHeroesByPageAction(), // Function that returns a promise with the data
        staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
    })

    return (
        <>
            {/* Header */}
            <CustomJumbotron title="Superhero Universe" subtitle="Discover, explore, and manage your favorite superheroes and villains" />

            <CustomBreadcrumbs
                currentPage="Home"
                breadcrumbs={[
                    { label: 'Home', to: '/home' }
                ]}
            />
            {/* Stats Dashboard */}
            <HeroStats />

            {/* Filter and Search Controls */}
            <SearchControls />


            {/* Tabs */}
            <Tabs value={activeTab} className="mb-8">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all" onClick={() => setActiveTab('all')}>All Characters (16)</TabsTrigger>
                    <TabsTrigger value="favorites" className="flex items-center gap-2" onClick={() => setActiveTab('favorites')}>
                        <Heart className="h-4 w-4" />
                        Favorites (3)
                    </TabsTrigger>
                    <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
                    <TabsTrigger value="villains" onClick={() => setActiveTab('villains')}>Villains (2)</TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                    {/* Hero Grid with all heroes */}
                    <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                </TabsContent>

                <TabsContent value="favorites">
                    {/* Hero Grid with favorite heroes */}
                    <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                </TabsContent>

                <TabsContent value="heroes">
                    {/* Hero Grid with heroes */}
                    <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                </TabsContent>

                <TabsContent value="villains">
                    {/* Hero Grid with villains */}
                    <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                </TabsContent>
            </Tabs>



            {/* Pagination */}
            <CustomPagination totalPages={8} />
        </>
    )
}  