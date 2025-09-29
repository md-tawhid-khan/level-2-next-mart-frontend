import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const DeleteBrandModal=({isOpen,onOpenChange,categoryName,onConfirm,isLoading})=>{


    return (
          <Dialog open={isOpen} onOpenChange={onOpenChange}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure to delete?</DialogTitle>
      <DialogDescription>
        {`if you want to delete brand ${categoryName} permanently , click delete confirm button .`}
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
    )
}