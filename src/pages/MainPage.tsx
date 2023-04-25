import { ItemCard } from "../components/ItemCard";
import { ItemFilter } from "../components/ItemFilter";
import { ItemSearch } from "../components/ItemSearch";

import { useEffect, useRef } from "react";
import { fetchItems } from "../store/actions/itemActions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import ReactPaginate from "react-paginate";

const ITEMS_PER_PAGE = 2;

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const page = useRef(1);
  const { error, loading, items } = useAppSelector((state) => state.itemSlice);

  const pageCount: number = Math.ceil(items.length / ITEMS_PER_PAGE);

  const ChangePageHandler = ({ selected }: { selected: number }) => {
    page.current = selected + 1;
    dispatch(fetchItems(page.current, ITEMS_PER_PAGE));
  };

  useEffect(() => {
    dispatch(fetchItems(page.current, ITEMS_PER_PAGE));
  }, [dispatch, page]);

  return (
    <div className="container mx-auto max-w-[700px] pt-5">
      <ItemSearch />
      <ItemFilter />

      {loading && <p className="text-center text-lg">Loading ...</p>}
      {error && <p className="text-center text-lg text-red-600">{error}</p>}
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
      <ReactPaginate
        breakLabel=""
        nextLabel=">"
        onPageChange={ChangePageHandler}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        forcePage={page.current - 1}
        previousLabel="<"
        containerClassName="flex mb-2"
        pageClassName="py-1 px-2 border mr-2"
        previousClassName="py-1 px-2 border mr-2"
        nextClassName="py-1 px-2 border"
        activeClassName="bg-gray-400 text-white"
      />
    </div>
  );
};
