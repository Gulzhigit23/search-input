import { useState } from "react";
import "./App.css";
import DATA_NAMES from "./MOCK_DATA.json";

function App() {
  const [searchBar, setSearchBar] = useState("");

  return (
    <div className="App">
    <input onChange={event => {
		setSearchBar(event.target.value)
	}} type="text" placeholder="Search..." />
	
	{DATA_NAMES.filter((el) => {
		if(searchBar == ""){
			return el
		}else if(el.first_name.toLowerCase().includes(searchBar.toLowerCase())){
			return el
		}
	}).map((el,key) => {
return (
	<div key={key}>
    <p>{el.first_name}</p>
	
	</div>
)
      })}
    </div>
  );
}

export default App;
