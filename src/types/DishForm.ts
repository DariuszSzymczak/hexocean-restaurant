export type DishFormType = {
    id: number;
    name: string;
    preparation_time: string;
    type: 'pizza' | 'soup' | 'sandwich';
    no_of_slices?: number;
    diameter?: number;
    spiciness_scale?: number;
    slices_of_bread?: number;
}