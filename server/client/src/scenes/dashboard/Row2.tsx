import BoxHeader from "@/components/BoxHeader";
import { Typography, useTheme } from "@mui/material";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
import {useMemo} from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ZAxis} from 'recharts';
import {Line, LineChart, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from 'recharts';
import FlexBetween from "@/components/FlexBetween";
import {Box} from '@mui/material'


type Props = {};
const pieData=[
    {
        name:"Group A", value:600
    },
    {
        name:"Group B", value:400
    }
]

const Row2=(props: Props) => {
    const {palette}= useTheme();
    const pieColor=[palette.primary[800], palette.primary[300]];
    const {data: operationalData }= useGetKpisQuery();
    const { data: productData } = useGetProductsQuery();
    // console.log(data);
    const operationalExpenses= useMemo(()=>{
        return (
            operationalData &&
            operationalData[0].monthlyData.map(({month, operationalExpenses, nonOperationalExpenses})=>{
                return{
                name: month.substring(0,3),
                "Operational Expenses": operationalExpenses,
                "Non Operational Expenses": nonOperationalExpenses,
            };

            })
        );
    }, [operationalData]);

    const productExpensesData= useMemo(()=>{
        return (
            productData &&
            productData.map(({_id, price, expense})=>{
                return{
                    id: _id,
                    price: price,
                    expense: expense,
               
            };

            })
        );
    }, [productData]);
    
    return (
    <>
         <DashboardBox  gridArea="d">
         <BoxHeader
          title="Operation vs Non-Operational Expenses "
        //   subtitle="Top line represents revenue, Bottom line represents expenses"
          sideText="+4.5%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            // width={500}
            // height={400}
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            {/* <Legend
              height={20}
              wrapperStyle={{
                margin: "0 0 10px 0",
              }}
            /> */}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Non Operational Expenses"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Operational Expenses"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
         </DashboardBox>
        <DashboardBox  gridArea="e">
            <BoxHeader title="Campaigns and Targets" sideText="4.5%"/>
            <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
        <PieChart 
        width={110} 
        height={100}
        margin={{
            top: 0,
            right: -10,
            left: 10,
            bottom: 0,
          }} 
        >
        <Pie
          data={pieData}
          stroke="none"
          innerRadius={18}
          outerRadius={38}
        //   fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} 
            fill={pieColor[index]} />
          ))}
        </Pie>
        {/* <Pie
          data={pieData}
          startAngle={360}
          endAngle={0}
          innerRadius={13}
          outerRadius={18}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        > */}
          {/* {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pieColor[index]} />
          ))}
        </Pie> */}
      </PieChart>
      <Box ml="-0.7rem" flexBasis="40%" textAlign="center"> 
      <Typography variant="h5">Target Sales</Typography>
      <Typography m="0.3rem" variant="h3" color={palette.primary[300]}>
        84
        </Typography>
        <Typography variant="h6">
            Finance goals of the campaign that is desired
        </Typography>


      </Box>
      <Box  flexBasis="40%" > 
      <Typography variant="h5">Losses Occured in Revenue</Typography>
      <Typography variant="h6" >
        Losses are down 20%.
        </Typography>
        <Typography mt="0.4rem" variant="h5">
            Profit Margins
        </Typography>
        <Typography variant="h6">
            Margins are by 32% from last month. 
        </Typography>


      </Box>
      </FlexBetween>
        </DashboardBox>
        <DashboardBox  gridArea="f">
        <BoxHeader title="Product Prices vs Expanses" sideText="+4.5%"/>

        <ResponsiveContainer width="100%" height="100%">
        
        <ScatterChart
          margin={{
            top: 20,
            right: 25,
            bottom: 40,
            left: -10,
          }}
        >
          <CartesianGrid stroke={palette.grey[800]}/>
          <XAxis 
          type="number" 
          dataKey="price" 
          name="price"
          axisLine={false}
          tickLine={false}
          style={{fontSize: "10px"}}
          tickFormatter={(v) => `$${v}`}
            />
          <YAxis 
          type="number" 
          dataKey="expense" 
          name="expense"
          axisLine={false}
          tickLine={false}
          style={{fontSize: "10px"}}
          tickFormatter={(v) => `$${v}`}
          />
          <ZAxis type="number" range={[20]} />
          <Tooltip formatter={(v) => `$${v}`} />
          <Scatter name="Product Expense Ratio"
           data={productExpensesData} 
           fill={palette.tertiary[500]} />
        </ScatterChart>
      </ResponsiveContainer>
    </DashboardBox>
    </>
    )
}
export default Row2