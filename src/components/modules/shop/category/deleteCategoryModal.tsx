
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";




const DeleteCategoryModal =({isOpen,onOpenChange,categoryName,onConfirm,isLoading}) => {
   
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure to delete?</DialogTitle>
      <DialogDescription>
        {`if you want to delete Category ${categoryName} permanently , click delete button .`}
      </DialogDescription>
      <DialogFooter>
        <Button onClick={()=>onOpenChange(false)}>cancel</Button>
         <Button
         disabled={isLoading}
          onClick={()=>{
          onConfirm();
          onOpenChange(false)
         } 
         
        }> {isLoading? (
                <div className="flex items-center justify-center min-h-screen">
                  <div className="w-8 h-8 border-8 border-white border-dotted rounded-full animate-spin"></div>
                </div>
              ) : (
                "Delete Confirm"
              )}</Button>

      </DialogFooter>
    </DialogHeader>
  </DialogContent>
</Dialog>
    );
};

export default DeleteCategoryModal;