export const flavorQueries = {
    readFlavors: "SELECT * FROM flavor;",
    readFlavorsId: "SELECT * FROM flavor WHERE id = ?;",
    readFlavorsName: "SELECT * FROM flavor WHERE name = ?",
    searchFlavorsName: "SELECT * FROM flavor WHERE name LIKE ?",
    postFlavors: "INSERT INTO flavor (name, costPerBatch, category_id) VALUES (?, ?, ?)",
    putFlavors: "UPDATE flavor SET name = ?, costPerBatch = ?, making = ?, inUse = ?, category_id = ? WHERE id = ?",
    deleteFlavors: "DELETE FROM flavor WHERE id = ?"
}  
