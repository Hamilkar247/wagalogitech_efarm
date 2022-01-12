from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class SeriaPomiarowa(BaseModel):
    nazwa: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "nazwa": "seria_nazwa"   
            }
        }

    class Meta:
        verbose_name = "Seria Pomiarowa"


# class Pomiar
#     wartosc: Optional[int]
#     czyWazny: Optional[boolean]
#     jednostka_miary
#     data_pomiaru
#     sesja_uzytkownika:

#     # class Config:
#     #     schema_extra = {
#     #         "example": {

#     #         }
#     #     }


# class SesjaUzytkownika
#     nazwa: Optional[str]



# class Uzytkownik
#     nazwa: Optional[str]


# class JednostkaOrganizacyjna


# class LogPomiarowy


# class LogAdministracyjny
