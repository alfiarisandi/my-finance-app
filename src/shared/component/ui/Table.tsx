import { Spinner, Typography } from "@/shared/component/materialUi";

type props = {
  header: string[];
  data: any[];
  isLoading?: boolean;
};

export const TableComponent = ({ header, data, isLoading }: props) => (
  <table className="w-full relative border-separate border-spacing-0">
    <thead className="relative">
      <tr className="sticky top-0 bg-white z-40">
        {header.map((item, i) => (
          <td className="p-2 border-b border-b-gray-400 border-solid" key={i}>
            <Typography
              variant="small"
              className="font-semibold text-gray-800 capitalize"
            >
              {item}
            </Typography>
          </td>
        ))}
      </tr>
    </thead>
    <tbody className="overflow-y-auto h-full">
      {isLoading ? (
        <tr>
          <td colSpan={header.length} className="p-2">
            <div className="flex justify-center">
              <Spinner color="blue-gray" />
            </div>
          </td>
        </tr>
      ) : data?.length === 0 ? (
        <tr>
          <td colSpan={header.length} className="p-2 text-center">
            <Typography variant="small">Tidak ada data.</Typography>
          </td>
        </tr>
      ) : (
        data?.map((item, i) => (
          <tr key={i}>
            {Object.keys(item).map((key, i) => (
              <td className="p-2" key={i}>
                {item[key]}
              </td>
            ))}
          </tr>
        ))
      )}
    </tbody>
  </table>
);
