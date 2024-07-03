import { useState } from "react"


export function Counter() {
  const [productList, setProductList] = useState([
    "Carro",
    "Caminão",
    "Moto"
  ])
  const [productSelected, setProductSelected] = useState("")
  const [count, setCount] = useState(0)


  function incrementCount() {
    setCount(value => value + 1)
  }


  function selectProduct(productName) {
    setProductSelected(productName)
  }


  return (
    <div className="card">
      <button onClick={incrementCount}>
        count is {count}
      </button>
      <ul>

        {productList.map(product => (
          <li onClick={() => selectProduct(product)} key={product}>{product}</li>
        ))}
      </ul>

      <div>
        Produto selecionado: {productSelected}
      </div>
    </div>

  )
}