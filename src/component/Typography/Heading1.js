import './Heading1.css'

const Heading1 = ({children , classes }) => {
  return (
    <h1 className={`Typography-Heading-1 ${classes}`}>{children}</h1>
  )
}

export default Heading1;