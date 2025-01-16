const Main = (props) => {

  const {languages} = props

  return (
    <main>
      <div className="container mt-5">
        {languages.map(language => (
        <>
          <button className="btn btn-primary btn-lg mx-2" key={language.id}>{language.title}</button>
          <div class="card my-5">
            <div class="card-body">
              <h3>{language.title}</h3>
              <p>{language.description}</p>
            </div>
          </div>
        </>
        ))}
      </div>
    </main>
  )
}

export default Main