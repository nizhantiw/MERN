import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";

type Props = {};

const Row2=(props: Props) => {
    
    return (
    <>
         <DashboardBox  gridArea="d"></DashboardBox>
        <DashboardBox  gridArea="e"></DashboardBox>
        <DashboardBox  gridArea="f"></DashboardBox>
    </>
    )
}
export default Row2