import * as communityRepository from "../repositories/communityRepository.js";

async function getAllCommunities() {
  const communities = await communityRepository.getAllCommunities();
  return communities;
}

async function createCommunity(c) {
    const community = await c.req.json();

  if (!community.name || !community.description) {
    return c.json({ error: "Name and description are required" }, 400);
  }
  const newCommunity = await communityRepository.createCommunity(community.name, community.description);
  return c.json(newCommunity, 201);
}

async function getCommunityById(c) {
    const id = c.req.param("communityId");
    if (isNaN(Number(id))) {
    return c.json({ error: "Invalid community ID" }, 400);
  }
  const community = await communityRepository.getCommunityById(id);
  if (!community) {
    return c.json({ error: "Community not found" }, 404);
  }
  return c.json(community);
}

async function deleteCommunityById(c) {
    const id = c.req.param("communityId");
    if (isNaN(Number(id))) {
    return c.json({ error: "Invalid community ID" }, 400);
  }
  const deletedCommunity = await communityRepository.deleteCommunityById(id);
  if (!deletedCommunity) {
    return c.json({ error: "Community not found" }, 404);
  }
  return c.json(deletedCommunity);
}

export { getAllCommunities, createCommunity, getCommunityById, deleteCommunityById };