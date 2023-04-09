export interface ExpensesByCategory{
    salaries: number;
    supplies: number;
    servies:number;
}
export interface Month{
    id: string;
    month: string;
    expenses:number;

    revenue: string;
    nonOperationalExpenses:number;
    operationalExpenses: number
}

export interface Day{
    id: string;
    date: string;
    expenses: number;
    revenue: string;
    nonOperationalExpenses:number;
    operationalExpenses: number
}

export interface GetKpisResponse{
    id: string;
    _id: string;
    __v:number;
    totalProfit:number;
    totalRevenue:number;
    tptalExpanses:number;
    expensesByCategory:ExpensesByCategory;
    monthlyData: Array<Month>;
    dailyData: Array<Day>;
}