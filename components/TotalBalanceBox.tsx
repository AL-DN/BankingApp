import React from "react";
import AnimatedCounter from './AnimatedCounter';
import CountUp from 'react-countup'
import { formatAmount } from "@/lib/utils";
import { Doughnut } from "react-chartjs-2";
import DoughnutChart from "./DoughnutChart";

// by default every component is a server component
// we cannont useRef in server components
// specify use client; if you want to useRef

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts}/>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>

          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
