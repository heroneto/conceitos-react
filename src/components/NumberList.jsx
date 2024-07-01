

export function NumberList({ numbers }) {

  return (
    <ul>
      {numbers.map(numero => <li>{numero}</li>)}
    </ul>
  )
}