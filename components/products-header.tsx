import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";

interface ProductsHeaderProps {
  productsQuantity: number;
}

const ProductsHeader: FC<ProductsHeaderProps> = ({ productsQuantity }) => {
  return (
    <div className="flex justify-between items-center mx-5 border rounded px-3 mb-3">
      <p>Showing all {productsQuantity} results</p>
      <div className="my-3 flex gap-5 justify-center items-center">
        <Select>
          <SelectTrigger className="w-fit flex justify-center items-center">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Popularity">Popularity</SelectItem>
            <SelectItem value="Trendy">Trendy</SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-[#23A6F0] transition hover:bg-[#23A6F0]/80">
          Filter
        </Button>
      </div>
    </div>
  );
};

export default ProductsHeader;
