import Header from "./components/Header";
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Outlet />
      </Container>

    </>
  )
}
export default App