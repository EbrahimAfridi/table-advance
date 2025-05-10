import mockData from "./payment/MOCK_DATA.json";
import "./App.css";
import { DataTable } from "./payment/DataTable";
import { columns, type Payment } from "./payment/columns";

const data = mockData as Payment[];

function App() {
  return (
    <div>
      <h1>Payments</h1>
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default App;
