import { AiOutlineDelete } from "react-icons/ai";

const Table = ({ list, total, handleDeleteItem }) => {
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[640px]">
        <thead>
          <tr>
            <th className="border-b-2 p-2">Description</th>
            <th className="border-b-2 p-2">Quantity</th>
            <th className="border-b-2 p-2">Price</th>
            <th className="border-b-2 p-2">Amount</th>
            <th className="border-b-2 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td className="border-b p-2 whitespace-nowrap">{item.description}</td>
              <td className="border-b p-2 whitespace-nowrap">{item.quantity}</td>
              <td className="border-b p-2 whitespace-nowrap">{item.price}</td>
              <td className="border-b p-2 whitespace-nowrap">&#x20A6;{item.amount.toLocaleString()}</td>
              <td className="border-b p-2 whitespace-nowrap">
                <button onClick={() => handleDeleteItem(item.id)}>
                  <AiOutlineDelete className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="border-b p-2 text-right whitespace-nowrap">Total:</td>
            <td colSpan="2" className="border-b p-2 whitespace-nowrap">&#x20A6;{total.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
