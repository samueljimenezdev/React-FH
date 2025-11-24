import { createBrowserRouter } from "react-router";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { Search } from "lucide-react";
import { SearchPage } from "@/heroes/pages/search/SearchPage";
import { AdminPages } from "@/admin/pages/AdminPages";
export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/heroes/1',
        element: <HeroPage />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/admin',
        element: <AdminPages />
    }
])