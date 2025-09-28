
import CreateCategoryModal from "./createCategoryModal"

const ManageCategories=()=>{

    return ( 
    <div className="flex items-center justify-between p-5">
        <h1 className="text-2xl font-bold">Manage Category</h1>
        <CreateCategoryModal/>
    </div>
    )

}

export default ManageCategories