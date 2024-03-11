import "./Heading2.css";

const Heading2 = ({ children, classes }) => {
  return <h3 className={`Typography-Heading-2 ${classes}`}>{children}</h3>;
};

export default Heading2;
