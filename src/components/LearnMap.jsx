const LearnMap = () => {
  const Product = ["product 0","product 1","product 2","product 3","product 4","product 5"]

  return (
    <>
    <div>{Product.map((value, index)=>(
      <h1 key={index}>{value}</h1>
    ))}</div>
    </>
  )
}

export default LearnMap
