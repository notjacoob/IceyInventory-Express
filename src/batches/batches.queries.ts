export const batchQueries = {
    getBatches: "SELECT * FROM flavor_batch",
    getBatchesId: "SELECT * FROM flavor_batch WHERE id = ?",
    getBatchesDate: "SELECT * FROM flavor_batch WHERE date = ?",
    postBatches: "INSERT INTO flavor_batch (dateMade, type, flavor_id) VALUES (?, ?, ?)",
    getBatchesFlavor: "SELECT * FROM flavor_batch WHERE flavor_id = ?",
    deleteBatches: "DELETE FROM flavor_batch WHERE flavor_id = ?"
}
