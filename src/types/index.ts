import { type ReactNode } from 'react';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}


export interface Stream {
    id: number;
    title: string;
    viewerCount: number;
    category: string;
}

export interface User {
    username: string;
    isLoggedIn: boolean;
}

export interface ProductCardProps {
    title: string;
    price: number;
    image: string;
    children?: ReactNode;
}

export interface PrivateRouteProps {
    children: ReactNode;
}
// Context types
export interface PrivateRouteProps {
    children: React.ReactNode;
}
