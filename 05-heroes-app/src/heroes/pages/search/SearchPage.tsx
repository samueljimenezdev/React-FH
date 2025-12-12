import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { HeroStats } from '@/heroes/components/HeroStats'
import { SearchControls } from '../home/ui/SearchControls'
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs'


export const SearchPage = () => {
    return (
        <>
            <CustomJumbotron title="Search Superheroes" subtitle="Discover, explore, and manage your favorite superheroes and villains" />
            <CustomBreadcrumbs currentPage="Search" />
            <HeroStats />
            <SearchControls />
        </>
    )
}
