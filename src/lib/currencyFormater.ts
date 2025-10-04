export const currencyFormater=(value:number)=>{
  return new Intl.NumberFormat('en-us',{
    style:'currency',
    currency:"BDT",    
  }).format(value)
}