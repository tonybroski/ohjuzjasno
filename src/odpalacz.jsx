import { addCollectionAndDocuments1 } from "./firebase";
import { useEffect } from "react";
import SHOW_DATA_2 from "./event-data-2";

export const ProductsProv = () => {
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    addCollectionAndDocuments1("collection", SHOW_DATA_2);
  }, []);

  return;
};
