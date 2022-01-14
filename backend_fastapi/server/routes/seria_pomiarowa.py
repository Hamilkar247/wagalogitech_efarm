from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

from ..database import (
    add_seria_pomiarowa,
    delete_seria_pomiarowa,
    retrieve_seria_pomiarowa,
    retrieve_zbior_serii_pomiarowych,
    update_seria_pomiarowa,
)

from ..models.seria_pomiarowa import (
    ErrorResponseSchema,
    ResponseSchema,
    SeriaPomiarowaSchema,
    UpdateSeriaPomiarowaSchema,
)

from ..models import seria_pomiarowa

router = APIRouter()


@router.post("/", response_description="Seria pomiarowa data addeded in the database")
async def add_seria_pomiarowa_data(seria_pomiarowa: SeriaPomiarowaSchema = Body(...)):
    seria_pomiarowa = jsonable_encoder(seria_pomiarowa)
    new_seria_pomiarowa = await add_seria_pomiarowa(seria_pomiarowa)
    return ResponseSchema(new_seria_pomiarowa, "Seria pomiarowa added successfully")


@router.get("/", response_description="Seria pomiarowa retrieved")
async def get_zbior_serii_pomiarowych():
    zbior_serii_pomiarowych = await retrieve_zbior_serii_pomiarowych()
    if zbior_serii_pomiarowych:
        return ResponseSchema(zbior_serii_pomiarowych, "Seria pomiarowa data retrieved successfully")
    return ResponseSchema(zbior_serii_pomiarowych, "Empty list returned")


@router.get("/{id}", response_description="Seria pomiarowa data retrieved")
async def get_seria_pomiarowa_data(id):
    seria_pomiarowa = await retrieve_seria_pomiarowa(id)
    if seria_pomiarowa:
        return ResponseSchema(seria_pomiarowa, "Seria pomiarowa data retrieved, ")
    return ErrorResponseSchema("An error occured.", 404, "Student doesn't exist.")


@router.put("/{id}")
async def update_seria_pomiarowa_data(id: str, req: UpdateSeriaPomiarowaSchema = Body(...)):
    req = {k: v for k, v in req.dict().items() if v is not None}
    updated_seria_pomiarowa = await update_seria_pomiarowa(id, req)
    if updated_seria_pomiarowa:
        return ResponseSchema(
            "SeriaPomiarowa with ID: {} name update is successful".format(id),
            "SeriaPomiarowa name updated successfully",
        )
    return ErrorResponseSchema(
        "An error occurred",
        404,
        "There was an error updating the student data.",
    )


@router.delete("/{id}", response_description="Seria pomiarowa data deleted from the database")
async def delete_seria_pomiarowa_data(id: str):
    deleted_seria_pomiarowa = await delete_seria_pomiarowa(id)
    if delete_seria_pomiarowa:
        return ResponseSchema(
            "Seria pomiarowa with ID: {} removed".format(id), "Seria pomiarowa deleted successfully"
        )
    return ErrorResponseSchema(
        "An error occurred", 404, "Student with id {0} "
    )