import { Product } from "../../../api/product";

export interface AutocompleteCategory {
  products: Product[];
  category: string;
  value: string;
  loading: boolean;
  loaded: boolean;
}

const autocompleteCategories: AutocompleteCategory[] = [
  "Memory (RAM)",
  "CPUs",
  "Video Cards",
  "Motherboards",
  "Storage",
  "Computer Cases",
  "Coolers",
  "Power Supplies",
].map((category) => ({
  products: [],
  category,
  value: "",
  loading: false,
  loaded: false,
}));

export default autocompleteCategories;
