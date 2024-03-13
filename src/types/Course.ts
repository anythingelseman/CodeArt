export interface CourseType {
    _id: string;
    title: string;
    description: string;
    price: number;
    discount: number;
    image: string;
    creator: 
    {
        _id: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }
}