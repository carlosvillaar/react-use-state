import { useState } from "react"

const Main = (props) => {

  const {languages} = props

  const [selectedId, setSelectedId] = useState(1)

  console.log(selectedId);
  console.log(setSelectedId);
  console.log(useState);
  

  return (
    <main>
      <div className="container mt-5">
        <>
          {languages.map(language => (
            <button className={selectedId == language.id ? "btn btn-warning btn-lg mx-2" : "btn btn-primary btn-lg mx-2"} key={language.id} onClick={() => setSelectedId(language.id)}>{language.title}</button>
          ))}
        </>
        <>
          <div className="card my-5">
            <div className="card-body">
              <h3>{languages.find(language => language.id == selectedId).title}</h3>
              <p>{languages.find(language => language.id == selectedId).description}</p>
            </div>
          </div>
        </>
      </div>
    </main>
  )
}

export default Main

/*<div class="card my-5">
            <div class="card-body">
              <h3>{language.title}</h3>
              <p>{language.description}</p>
            </div>
          </div> */