import { ChartBarDefault } from "@/components/dashboard/barChart";
import { ChartLineDotsColors } from "@/components/dashboard/lineChart";
import OrderData from "@/components/dashboard/orderData";
import { ChartPieLabelList } from "@/components/dashboard/pieChart";
import TodaysSalesAmount from "@/components/dashboard/todaysSalesAmount";
import TotalOrdersForUser from "@/components/dashboard/totalOrderForUser";
import TotalPayment from "@/components/dashboard/totalPayment";
import TotalRevenueForUser from "@/components/dashboard/totalRevenueForUser";
import { getMetaData } from "@/services/dashboard";

const DashboardPage =async() => {
    const metaData = await getMetaData() ;
   const {barChartData ,lineChartData,orderData,paymentData,pieChartData,todaysSalesAmount,totalOrdersForUser,totalRevenueForUser}=metaData?.data ;
    
    return (
         <div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted " ><ChartPieLabelList pieChartData={pieChartData}/></div>
        <div className="aspect-video rounded-xl bg-muted" ><ChartBarDefault barChartData={barChartData}/></div>
        <div className="aspect-video rounded-xl bg-muted" ><ChartLineDotsColors lineChartData={lineChartData}/></div>
      </div>
      <div className="min-h-[100vh] rounded-xl bg-muted mt-4 " >
        <div className="grid auto-rows-min gap-4 md:grid-cols-4 ">
        <div className="aspect-video rounded-xl bg-muted " ><TotalPayment paymentData={paymentData}/></div>
        <div className="aspect-video rounded-xl bg-muted " ><OrderData orderData={orderData}/></div>
        <div className="aspect-video rounded-xl bg-muted " ><TodaysSalesAmount todaysSalesAmount={todaysSalesAmount} /></div>
        <div className="aspect-video rounded-xl bg-muted " ><TotalOrdersForUser totalOrdersForUser={totalOrdersForUser}/></div>
        <div className="aspect-video rounded-xl bg-muted " ><TotalRevenueForUser totalRevenueForUser={totalRevenueForUser}/></div>
        </div>
        
      </div>
    </div>
    );
};

export default DashboardPage;