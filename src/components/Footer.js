const Footer = ({ resData,visible }) => {
  return (
    <div className="w-64 py-4">
      <p className="border border-black px-4 py-2 text-center">
        {resData?.text || "Default text if resData is undefined"}
      </p>
      
    </div>
  );
};

export default Footer;
