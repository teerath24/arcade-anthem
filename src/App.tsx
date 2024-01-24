import ListGroup from "./components/ListGroup";
import Button from "./Button";

function App() {
  return (
    <Button color="danger" onClick={() => console.log("clicked")}>
      my btn
    </Button>
  );
}
export default App;
