from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# from backend_fastapi.server.routes.seria_pomiarowa import router
from .routes.seria_pomiarowa import router as SeriaPomiarowaRouter

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(SeriaPomiarowaRouter, tags=["SeriaPomiarowa"], prefix="/seria_pomiarowa")

@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}

