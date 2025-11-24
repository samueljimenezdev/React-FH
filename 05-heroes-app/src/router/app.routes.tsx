import { createBrowserRouter } from "react-router";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { SearchPage } from "@/heroes/pages/search/SearchPage";
import { AdminPages } from "@/admin/pages/AdminPages";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/layouts/AdminLayout";

/**
 * App Router
 * Defines the main routes for the application, including layouts and nested routes.
 * Nested routes are used to render specific pages within their respective layouts.
 */
export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <HeroesLayout />,
        children: [
            {
                index: true, // This route corresponds to the path '/'
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
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminPages />
            }
        ]
    }
]); 