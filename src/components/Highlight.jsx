export const Highlight = (props) => {
    const { highlights } = props;
  
    return (
      <div className="mb-[100px] max-w-[100vw] relative">
        {highlights.map((el) => (
          <div>
            <img
              src={el.social_image}
              className="rounded-xl w-[1216px] h-[600px]"
            />
            <div className="rounded-xl w-[598px] p-[40px] bg-[#fff] absolute left-2 bottom-2">
              <h2 className="mb-[16px] bg-indigo-500 flex justify-center rounded-md text-[#fff] py-[4px] w-[97px] text-sm leading-tight">
                Technology
              </h2>
              <p className="pb-[24px] text-gray-900 text-2xl font-semibold">
                {el.title}
              </p>
              <p className="text-neutral-400 text-base leading-normal">
                August 20, 2022
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };