import postgres from "postgres";

const sql = postgres();


async function getAllCommunities() {
  return await sql`SELECT * FROM communities`;
}

async function createCommunity(name, description) { 
    const result = await sql`
    INSERT INTO communities (name, description) 
    VALUES (${name}, ${description}) 
    RETURNING *`;
    return result[0];
}

async function getCommunityById(id) {
  const result = await sql`SELECT * FROM communities WHERE id = ${id}`;
  return result[0];
}

async function deleteCommunityById(id) {
  const result = await sql`DELETE FROM communities WHERE id = ${id} RETURNING *`;
  return result[0];
}




export { getAllCommunities, createCommunity, getCommunityById, deleteCommunityById };