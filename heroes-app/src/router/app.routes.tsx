import { createBrowserRouter } from "react-router";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { lazy } from "react";

/**
 * App Router
 * Defines the main routes for the application, including layouts and nested routes.
 * Nested routes are used to render specific pages within their respective layouts.
 */

/**
 * Lazy loaded components 
 */
const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage').then(module => ({ default: module.SearchPage })));
const AdminLayout = lazy(() => import('@/admin/layouts/AdminLayout').then(module => ({ default: module.AdminLayout })));
const AdminPages = lazy(() => import('@/admin/pages/AdminPages').then(module => ({ default: module.AdminPages })));
const HeroPage = lazy(() => import('@/heroes/pages/hero/HeroPage').then(module => ({ default: module.HeroPage })));

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