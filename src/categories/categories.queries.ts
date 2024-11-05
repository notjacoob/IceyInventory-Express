import { deleteCategory, postCategory, putCategories } from "./categories.dao";

export const categoryQueries = {
    getCategoryId: "SELECT * FROM inv_category WHERE id = ?",
    getCategories: "SELECT * FROM inv_category",
    putCategories: "UPDATE inv_category SET name = ? WHERE id = ?",
    deleteCategory: "DELETE FROM inv_category WHERE id = ?",
    postCategory: "INSERT INTO inv_category (name) VALUES (?)"
}