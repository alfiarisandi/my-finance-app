import {
  Button,
  ButtonGroup,
  Card,
  Typography,
} from "@/shared/component/materialUi";
import { StatusLabel } from "@/shared/component/ui/StatusLabel";
import { TableComponent } from "@/shared/component/ui/Table";
import { useMoneyFormatter } from "@/shared/utils/helper";
import moment from "moment";
import React from "react";

type props = {
  activeTab: number;
  values: any[];
  isLoading: boolean;
};

const AmountText = ({ value }: { value: number }) => {
  return (
    <Typography variant="small" className="font-semibold text-gray-800">
      {useMoneyFormatter({ value })}
    </Typography>
  );
};

const DateText = ({ value }: { value: string }) => {
  return (
    <div className="flex flex-col">
      <Typography variant="small" className="font-semibold text-gray-800">
        {moment(value).format("LL")}
      </Typography>
      <Typography variant="small">{moment(value).format("LT")}</Typography>
    </div>
  );
};

export default function Transactions({ activeTab, values, isLoading }: props) {
  return (
    <Card className="pt-4 px-4 h-[300px] flex flex-col overflow-hidden gap-2">
      <div className="flex justify-between items-center">
        <Typography variant="lead" className="font-semibold text-gray-800">
          Latest Transaction
        </Typography>
        <ButtonGroup variant="outlined" color="blue-gray">
          <Button
            className={`"px-3 py-2 text-xs font-semibold capitalize outline-none text-gray-800 ${
              activeTab === 1 && "bg-gray-300"
            }`}
          >
            Day
          </Button>
          <Button
            className={`"px-3 py-2 text-xs font-semibold capitalize outline-none text-gray-800 ${
              activeTab === 2 && "bg-gray-300"
            }`}
          >
            Week
          </Button>
          <Button
            className={`"px-3 py-2 text-xs font-semibold capitalize outline-none text-gray-800 ${
              activeTab === 3 && "bg-gray-300"
            }`}
          >
            Month
          </Button>
        </ButtonGroup>
      </div>
      <div className="overflow-auto my-2">
        <TableComponent
          isLoading={isLoading}
          header={["Nama", "Date", "Amount", "Status"]}
          data={values?.map((item, i) => {
            return {
              nama: (
                <div className="flex flex-col">
                  <Typography
                    variant="small"
                    className="font-semibold text-gray-800"
                  >
                    {item?.nama_transaksi}
                  </Typography>
                  <Typography variant="small">
                    {item?.detail_transaksi}
                  </Typography>
                </div>
              ),
              date: <DateText value={item?.timestamp} />,
              amount: <AmountText value={item?.nilai_transaksi} />,
              status: <StatusLabel type={item?.type_transaksi} />,
            };
          })}
        />
      </div>
    </Card>
  );
}
