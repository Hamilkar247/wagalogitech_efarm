import motor.motor_asyncio
from bson.objectid import ObjectId

MONGO_DETAILS = "mongodb://localhost:27017"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.zbior_serii_pomiarowych

kolekcja_serii_pomiarowych = database.get_collection("kolekcja_serii_pomiarowych")


def seria_pomiarowa_helper(seria_pomiarowa) -> dict:
    return {
        "id": str(seria_pomiarowa["_id"]),
        "nazwa": seria_pomiarowa["nazwa"]
    }


# Crud operacje
async def retrieve_zbior_serii_pomiarowych():
    zbior_serii_pomiarowych = []
    async for seria_pomiarowa in kolekcja_serii_pomiarowych.find():
        zbior_serii_pomiarowych.append(seria_pomiarowa_helper(seria_pomiarowa))
    return zbior_serii_pomiarowych


async def add_seria_pomiarowa(seria_pomiarowa_data: dict) -> dict:
    seria_pomiarowa = await kolekcja_serii_pomiarowych.insert_one(seria_pomiarowa_data)
    new_seria_pomiarowa = await kolekcja_serii_pomiarowych.find_one({"_id": seria_pomiarowa.inserted_id})
    return seria_pomiarowa_helper(new_seria_pomiarowa)


async def retrieve_seria_pomiarowa(id: str) -> dict:
    seria_pomiarowa = await kolekcja_serii_pomiarowych.find_one({"_id": ObjectId(id)})
    if seria_pomiarowa:
        return seria_pomiarowa_helper(seria_pomiarowa)


async def update_seria_pomiarowa(id: str, data: dict):
    if len(data) < 1:
        return False
    seria_pomiarowa = await kolekcja_serii_pomiarowych.find_one({"_id": ObjectId(id)})
    if seria_pomiarowa:
        update_seria_pomiarowa = await kolekcja_serii_pomiarowych.update_one(
            {"_id": ObjectId(id)}, {"$set": data}
        )
        if update_seria_pomiarowa:
            return True
        return False

async def delete_seria_pomiarowa(id: str):
    seria_pomiarowa = await kolekcja_serii_pomiarowych.find_one({"_id": ObjectId(id)})
    if seria_pomiarowa:
        await kolekcja_serii_pomiarowych.delete_one({"_id": ObjectId(id)})
        return True
