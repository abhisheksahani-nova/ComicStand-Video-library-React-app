import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
  },
  {
    _id: uuid(),
    categoryName: "International Comics",
  },
  {
    _id: uuid(),
    categoryName: "Indian Comics",
  },
  {
    _id: uuid(),
    categoryName: "Satire",
  },
  {
    _id: uuid(),
    categoryName: "Improv",
  },
  {
    _id: uuid(),
    categoryName: "Dark Comedy",
  },
  {
    _id: uuid(),
    categoryName: "Anecdotal Comedy",
  },
  {
    _id: uuid(),
    categoryName: "Observational Comedy",
  },
];
