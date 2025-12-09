import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { HeroStats } from '@/heroes/components/HeroStats'
import { SearchControls } from '../home/ui/SearchControls'


export const SearchPage = () => {
    return (
        <>
            <CustomJumbotron title="Search Superheroes" subtitle="Discover, explore, and manage your favorite superheroes and villains" />
            <HeroStats />
            <SearchControls />
        </>
    )
}
