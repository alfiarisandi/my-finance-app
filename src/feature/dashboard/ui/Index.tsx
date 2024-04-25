"use client";
import React, { useEffect } from "react";
import { Cards } from "./Cards";
import CardsBalance from "./CardsBalance";
import Transactions from "./Transactions";
import { Analytics } from "./Analytics";
import { Activities } from "./Activities";
import useDashboard from "../hooks/useDashboard";

export default function DashboardPages() {
  const {
    dataApi,
    fetchQuery,
    indexSaving,
    isLoadHandleSaving,
    handlerToogler,
  } = useDashboard();
  const { refetch }: any = fetchQuery;

  const { isLoading } = fetchQuery;

  useEffect(() => {
    async function fetch() {
      await refetch();
    }
    fetch();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <CardsBalance
        label={
          dataApi?.savings[indexSaving]?.TypeTabungan?.nama_tabungan || "None"
        }
        value={dataApi?.savings[indexSaving]?.nilai_tabungan || 0}
        cardNumber={1111111111111111}
        exp="-/-"
        img={dataApi?.savings[indexSaving]?.TypeTabungan?.icon || ""}
        isLoading={isLoading || isLoadHandleSaving}
        handlerToogle={handlerToogler}
      />
      <Cards
        label="Total Income"
        value={0}
        status={true}
        percentage={1}
        isLoading={false}
      />
      <Cards label="Total Income" value={0} status={false} percentage={-1} />
      <div className="lg:col-span-2">
        <Transactions
          activeTab={1}
          values={dataApi?.transaksi}
          isLoading={isLoading}
        />
      </div>
      <Analytics
        label="Buget Plan"
        datasets={dataApi?.buget_plan?.map((item: any) =>
          Number(item?.nilai_anggaran)
        )}
        valuesLabel={dataApi?.buget_plan?.map((item: any) =>
          item?.nama_anggaran?.toString()
        )}
      />
      {/* <div className="lg:col-span-3">
        <Activities label="Activities" datasets={[]} chartsLabel={[]} />
      </div> */}
    </div>
  );
}
