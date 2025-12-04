import { ChartBarDefault } from "@/components/dashboard/barChart";
import { ChartPieLabelList } from "@/components/dashboard/pieChart";
import { getMetaData } from "@/services/dashboard";

const DashboardPage =async() => {
    const metaData = await getMetaData() ;
   const {barChartData ,lineChartData,orderData,paymentData,pieChartData,todaysSalesAmount,totalOrdersForUser,totalRevenueForUser}=metaData?.data ;
    
    return (
         <div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted " ><ChartPieLabelList pieChartData={pieChartData}/></div>
        <div className="aspect-video rounded-xl bg-muted" ><ChartBarDefault barChartData={barChartData}/></div>
        <div className="aspect-video rounded-xl bg-muted" />
      </div>
      <div className="min-h-[100vh] rounded-xl bg-muted mt-4" />
    </div>
    );
};

export default DashboardPage;