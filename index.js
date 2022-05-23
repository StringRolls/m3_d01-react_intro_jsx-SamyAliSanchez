
    function BioCard(props){
        const cardTitle = "It's monday !!!"
        return(
        <section>
        <h1> { cardTitle } </h1>
            <h3> { props.personName } </h3>
            <p> { props.personDOB} </p>
        </section>
        )
    }
function Greet(props) {
    {/* props is ONE big object that contains all your funciton arguments as properties of the object */}
    {/* props = { 
      personName: '',
      cityName: ''
    } */}
    
    console.log(">>>>>>>>> PROPS: ", props)

    return (<p className ="cappucino"> My name is { props.personName } and I live in { props.cityName }</p>) 
  }
  //every function with big letter, you want react to work 
  //jsx, is a function


  function AppTitle() {
    return (<h1 className="app-title">Hello Ironhackers</h1>)
    // house of mirrors, its not html, html is a string. Im returning something thats not native javascript object
  }

  const name1 = 'Marco'
  const name2 = 'Fede'
  
  function App() {

    return (
      <div className="main-app" id="myApp">
        <AppTitle /> 
        <BioCard personName={"Samy"} personDOB={(new Date ("1991/12/12")).toString() }/>
        <Greet personName={name2} cityName='Barcelona' />
        <Greet personName={name1} cityName ="Poblenou"/>
      </div>
      )
  }

    // ReactDOM.render injects all of the React app code into the DOM
    ReactDOM.render(<App />, document.getElementById("root")); //App will render in to the root

//React will not printing object for you, only print that can easily convert to string. 