from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=[""],
    allow_headers=["*"]
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your todo list." }

todos = [
    {
        "id": "1",
        "item": "Read a book."
    },
    {
        "id": "2",
        "item": "Cycle around town."
    }
]

@app.get("/todo", tags=["todos"])
async def get_todos() -> dict:
    return { "data": todos }


uzytkownicy = [
    {
        "id": 1,
        "imie": "Hamilkar",
        "nazwisko": "Barkas",
        "login": "hami",
        "haslo": "barkas",
        "administrator": "true",
        "ostatnio_zalogowany": "01.01.1970",
        "konto_aktywne": "true"
    },
    {
        "id": 2,
        "imie": "Hannibal",
        "nazwisko": "Barkas",
        "login": "hanni",
        "haslo": "barkas",
        "administrator": "true",
        "ostatnio_zalogowany": "01.01.1970",
        "konto_aktywne": "true"
    },
    {
        "id": 3,
        "imie": "Hannon",
        "nazwisko": "Eugoryda",
        "login": "hanno",
        "haslo": "barkas",
        "administrator": "true",
        "ostatnio_zalogowany": "01.01.1970",
        "konto_aktywne": "true"
    },
    {
        "id": 4,
        "imie": "Magon",
        "nazwisko": "Barkas",
        "login": "magon",
        "haslo": "barkas",
        "administrator": "true",
        "ostatnio_zalogowany": "01.01.1970",
        "konto_aktywne": "true"
    },
    {
        "id": 5,
        "imie": "Hazdrubal",
        "nazwisko": "Barkas",
        "login": "hazdru",
        "haslo": "barkas",
        "administrator": "true",
        "ostatnio_zalogowany": "01.01.1970",
        "konto_aktywne": "true"
    }
]

@app.get("/uzytkownicy", tags=["uzytkownicy"])
async def get_uzytkownicy() -> dict:
    return { "data": uzytkownicy }

