
import getData from "./GetData";


export default async function App() {


  getData()
    .then(data => {
      console.log(data);
    })

}