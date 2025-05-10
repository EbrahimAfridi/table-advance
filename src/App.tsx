import mockData from "./payment/MOCK_DATA.json";
import "./App.css";
import { DataTable } from "./payment/DataTable";
import { columns, type Payment } from "./payment/columns";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

const data = mockData as Payment[];

function App() {
  return (
    <div>
      <div className="flex items-center justify-between py-4 px-2 font-medium text-2xl mb-2">
        <p>Payment Table</p>
        <Avatar className="bg-stone-100 size-10 hover:scale-150 transition-all duration-200 ease-in-out">
          <AvatarImage src="https://notion-avatar.app/api/svg/eyJmYWNlIjo1LCJub3NlIjo5LCJtb3V0aCI6MTAsImV5ZXMiOjIsImV5ZWJyb3dzIjo5LCJnbGFzc2VzIjoxMSwiaGFpciI6MCwiYWNjZXNzb3JpZXMiOjAsImRldGFpbHMiOjAsImJlYXJkIjowLCJmbGlwIjoxLCJjb2xvciI6InJnYmEoMjU1LCAwLCAwLCAwKSIsInNoYXBlIjoibm9uZSJ9" />
          <AvatarFallback>EA</AvatarFallback>
        </Avatar>
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default App;
