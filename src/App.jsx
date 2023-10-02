import Question from "./Question";
import data from "./data";
import {FaQuestion} from "react-icons/fa"

const App = () => {

  return <main>
    <section className="container">
      <h1>Questions <FaQuestion/> </h1>
      {data.map((oneQuestion)=>{
        return <article key={oneQuestion.id}>
          <Question {...oneQuestion}/>
        </article>
      })}
    </section>
  </main>
};
export default App;
