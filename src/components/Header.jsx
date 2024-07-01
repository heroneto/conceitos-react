

export function Header({
  username = "primary"
}) {

  return (
    <>
      <header>App contador</header>

      <h2>Olá {username}</h2>
    </>
  )
}