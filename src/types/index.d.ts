export interface Product {
    id: string;
    title: string;
    currency_id: string;
    permaLink: string;
    category_id: string;
    thumbnail: string;
    price: number;
    
}

export interface Category {
    id: string;
    name: string;
    parentId: string | null;
}