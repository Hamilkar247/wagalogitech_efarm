import React, { useEffect, useState } from "react";

const UzytkownicyContext = React.createContext({
    uzytkownicy: [], fetchUzytkownicy: () => {}
})

export default function Uzytkownicy() {
  const [uzytkownicy, setUzytkownicy] = useState([])
  const fetchUzytkownicy = async() => {
    const response = await fetch("http://localhost:8000/uzytkownicy")
    const uzytkownicy = await response.json()
    setUzytkownicy(uzytkownicy.data)
  }
  useEffect(() => {
    fetchUzytkownicy()
  }, [])
  return (
    <UzytkownicyContext.Provider value={{uzytkownicy, fetchUzytkownicy}}>
      
        {
          uzytkownicy.map((uzytkownik) => (
            <b>{uzytkownik.imie} id={uzytkownik.id} </b>
          ))
        }
    </UzytkownicyContext.Provider>  
  )
}
