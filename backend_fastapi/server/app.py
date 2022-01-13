from fastapi import FastAPI

# from backend_fastapi.server.routes.seria_pomiarowa import router
from .routes.seria_pomiarowa import router as SeriaPomiarowaRouter

app = FastAPI()

app.include_router(SeriaPomiarowaRouter, tags=["SeriaPomiarowa"], prefix="/seria_pomiarowa")


@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}

