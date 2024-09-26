const LearnUsingENV = () => {
  return (
    <>
    <h1>How To Use ENV in React + Vite</h1>
    {import.meta.env.VITE_BASE_UPI_URL}
    <br/>
    {import.meta.env.VITE_API_KEY}
    </>
  )
}

export default LearnUsingENV