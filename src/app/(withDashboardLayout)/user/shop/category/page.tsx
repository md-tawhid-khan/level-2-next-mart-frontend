import ManageCategories from "@/components/modules/shop/category";
import { getAllCategories } from "@/services/category";

const CategoryPage = async() => {
    const {data:categories,meta}= await getAllCategories()

    
    return (
        <div>
            <ManageCategories categories={categories} />
        </div>
    );
};

export default CategoryPage;