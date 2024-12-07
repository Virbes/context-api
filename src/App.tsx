import { UserProvider, useUserContext } from "./contexts/UserContext";

const UserDetails = () => {

  const { user } = useUserContext();

  return (
    <>
      <p>User Name: {user.name}</p>
      <p>User Email: {user.email}</p>
    </>
  );
}

const AnotherComponent = () => {

  const { user, setUser } = useUserContext();

  const handleChangeUser = () => {
    setUser({
      name: 'Nicole',
      email: 'nicole@example.com'
    });
  }

  return (
    <>
      <p>User Name: {user.name}</p>
      <p>User Email: {user.email}</p>

      <button type="button" onClick={handleChangeUser}>Cambiar usuario</button>

    </>
  );
}


function App() {


  return (
    <UserProvider>
      <UserDetails />
      <AnotherComponent />
    </UserProvider>
  )
}

export default App
