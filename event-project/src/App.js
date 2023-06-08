import "./App.css";
import Button from "./Components/Button/Button";
import tableData from "./tableData";

function App() {
  console.log(tableData);
  return (
    <div className="App">
      <h1>Rohan Don</h1>
      <div class="container">
        <div class="inner__container">
          <span>i</span>
          <h2>Hey!</h2>
          <p>
            I am a hard-working and driven individual who isn't afraid to face a
            challenge. I'm passionate about my work and I know how to get the
            job done. I would describe myself as an open and honest person who
            doesn't believe in misleading other people and tries to be fair in
            everything I do.
          </p>
        </div>
      </div>
      <table>
        <caption>Academic Qualification</caption>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Institution</th>
            <th>Boards</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((data, i) => {
            return (
              <tr>
                <td>{++i}</td>
                <td>{data.institution}</td>
                <td>{data.board}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <Button>Click Me</Button>
      </div>
    </div>
  );
}

export default App;
