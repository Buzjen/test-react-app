import { useNavigate } from "react-router-dom";
import { Item } from "../models/Models";

interface itemCardProps {
  item: Item;
}

export const ItemCard = ({ item }: itemCardProps) => {
  const navigate = useNavigate();

  const clickHandler = () => navigate(`./details/${item.id}`);

  return (
    <div
      onClick={clickHandler}
      className="flex justify-between border rounded-md py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer"
    >
      <div>
        <p className="text-lg font-bold">{item.title}</p>
        <p className="mt-4">{item.price} $</p>
      </div>
      <img src={item.imgUrl} alt="cover" width={70} height={70} />
    </div>
  );
};
