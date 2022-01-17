import { Input } from "@syncfusion/ej2-inputs";
import React, {useEffect, useState} from "react";

const ZbiorSeriiPomiarowychContext = React.createContext({
    zbior_serii_pomiarowych: [], fetchZbiorSeriiPomiarowych: () => {}
})

function AddSeriaPomiarowa() {
    const [item, setItem] = React.useState("")
    const {zbior_serii_pomiarowych, fetchZbiorSeriiPomiarowych} = React.useContext(TodosContext)

    const handleInput = event => {
        setItem(event.target.value)
    }

    const handleSubmit = (event) => {
      const newSeriaPomiarowa = {
        "id": seria_pomiarowa.length + 1,
        "item": item
      }

      fetch("http://localhost:8000/seria_pomiarowa", {
        method: "POST",
        headers: { "Context-Type": "application/json" },
        body: JSON.stringify(newSeriaPomiarowa)
      }).then(fetchZbiorSeriiPomiarowych)
    }

    return (
      <form onSubmit={handleSubmit}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Add a seria pomiarowa item"
            aria-label="Add a seria pomiarowa item"
            onChange={handleInput} 
          />
        </InputGroup>
      </form>
    )
}

function UpdateSeriaPomiarowa({item, id}) {
    const{isOpen, onOpen, onClose} = useDisclosure()
    const [todo, setTodo] = useState(item)
    const {fetchZbiorSeriiPomiarowych} = React.useContext()

    const updateSeriaPomiarowa = async () => {
        await fetch(`http://127.0.0.1:8000/seria_pomiarowa/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ item: seria_pomiarowa})
    })
    onClose()
    await fetchZbiorSeriiPomiarowych()
    }

    return (
      <> 
      </>  
    )
}


function deleteSeriePomiarowa({id}) {
  const {fetchZbiorSeriiPomiarowych} = React.useContext(ZbiorSeriiPomiarowychContext)

  const deleteSeriePomiarowa = async() => {
    await fetch(`http://127.0.0.1:8000/seria_pomiarowa/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: { "id" : id }
    })
    await fetchZbiorSeriiPomiarowych()
  }

  return (
  <Button h="1.5rem" size="sm" onClick={deleteSeriePomiarowa}>Delete Seria Pomiarowa</Button>
  )
}

function SeriaPomiarowa() {
  const [seria_]
}

