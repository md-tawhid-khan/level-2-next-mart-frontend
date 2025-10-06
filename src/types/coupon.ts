export type  TCoupon = {
  code: string ;
  discountType: 'Flat'|'Percentage';
  discountValue: number ; 
  minOrderAmount: number ;
  maxDiscountAmount: number ;
  startDate: string ;
  endDate: string
}