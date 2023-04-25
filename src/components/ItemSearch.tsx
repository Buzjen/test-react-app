import { useEffect, useState } from "react";
import { useInput } from "../hooks/input";
import { useDebounce } from "../hooks/debounce";
import axios from "axios";
import { Item } from "../models/Models";
import { Navigate, useNavigate } from "react-router-dom";

export const ItemSearch = () => {
  const navigate = useNavigate();
  const input = useInput("");
  const debounced = useDebounce(input.value);
  const [items, setItems] = useState<Item[]>([]);
  const [dropDown, setDropDown] = useState(false);

  async function searchItems() {
    const response = await axios.get<Item[]>(
      "https://64113b971a5dca342586d356.mockapi.io/items"
    );
    setItems(response.data);
  }

  useEffect(() => {
    if (debounced.length > 3) {
      searchItems();
      console.log(input.value);
    }
  }, [debounced]);

  const showDropdown = () => {
    setDropDown(!dropDown);
  };

  const filtered: Item[] = items.filter((item) =>
    item.title.toLowerCase().includes(input.value.toLowerCase())
  );

  return (
    <div className=" mb-4">
      <input
        onClick={showDropdown}
        type="text"
        placeholder="Search ..."
        className="border py-2 px-4 outline-0 w-full "
        {...input}
      />

      {dropDown && (
        <ul className="list-none absolute right-0 left-0 max-w-[700px] m-auto h-[100px] bg-white shadow-md overflow-y-scroll">
          {filtered.map((item) => (
            <li
              className="py-2 px-4 mb-2 hover:bg-gray-400 hover:transition-colors cursor-pointer hover:text-white"
              key={item.id}
              onClick={() => {
                navigate(`/details/${item.id}`);
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
