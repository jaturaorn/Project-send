const Product = ({ data }) => {
  return (
    <div className="flex-1 flex flex-col items-center min-w-[300px] border-2 border-['lightgray'] px-2 mr-2 mb-2 rounded-lg text-center">
      <h2 className="py-1 text-lg font-bold">{data.N_fullname}</h2>
      <p className="py-1">{data.N_BUSINESS_TYPE_E}</p>
      <h3 className="py-2 text-base font-semibold">
        Marketcap {data.marketcap} Bath
      </h3>
      <a
        href={data.N_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline hover:underline text-cyan-600 dark:text-cyan-400 py-2"
      >
        {data.N_COMPANY_E}
      </a>
    </div>
  );
};

export default Product;
