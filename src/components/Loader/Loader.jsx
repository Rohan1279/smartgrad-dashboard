import LoaderImage from "/assets/images/loader-transparent.gif";
const Loader = ({ className }) => {
  return <img src={LoaderImage} alt="loader" className={className} />;
};

export default Loader;
