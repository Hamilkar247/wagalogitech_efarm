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

async def retrieve_seria_pomiarowa():
    zbior_serii_pomiarowych = []
    async for seria_pomiarowa in kolekcja_serii_pomiarowych.find():
        zbior_serii_pomiarowych.append(seria_pomiarowa_helper(seria_pomiarowa))


async def add_student(seria_pomiarowa_data: dict) -> dict:
    seria_pomiarowa = await kolekcja_serii_pomiarowych.insert_one(seria_pomiarowa_data)
    new_seria_pomiarowa = await kolekcja_serii_pomiarowych.find_one({"_id": seria_pomiarowa.ins})
