import { useState } from "react"

const Main = (props) => {

  const {languages} = props

  const [selectedId, setSelectedId] = useState(1)

  return (
    <main>
      <div className="container-xs my-5 mx-5">
          {languages.map(language => (
            <button className={selectedId == language.id ? "btn btn-warning btn-lg" : "btn btn-primary btn-lg"} key={language.id} onClick={() => setSelectedId(language.id)}>{language.title}</button>
          ))}
          <div className="card my-5">
            <div className="card-body w-100">
              <h3>{languages.find(language => language.id == selectedId).title}</h3>
              <p>{languages.find(language => language.id == selectedId).description}</p>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Main