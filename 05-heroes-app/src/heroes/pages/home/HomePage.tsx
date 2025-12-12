import {
    Heart,
    ChevronLeft,
    ChevronRight,
    MoreHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"


import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomMenu } from "@/components/custom/CustomMenu"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"

type activeTabType = "all" | "favorites" | "heroes" | "villains";

export const HomePage = () => {

    const [activeTab, setActiveTab] = useState<activeTabType>("all")
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
                    <HeroGrid />
                </TabsContent>

                <TabsContent value="favorites">
                    {/* Hero Grid with favorite heroes */}
                    <HeroGrid />
                </TabsContent>

                <TabsContent value="heroes">
                    {/* Hero Grid with heroes */}
                    <HeroGrid />
                </TabsContent>

                <TabsContent value="villains">
                    {/* Hero Grid with villains */}
                    <HeroGrid />
                </TabsContent>
            </Tabs>



            {/* Pagination */}
            <CustomPagination totalPages={8} />
        </>
    )
}  