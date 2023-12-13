export const FraseCard = () => {
  return (
    <div
      id="card"
      className="text-center bg-darkGrayBlue font-manrope w-[90%] max-w-[575px] rounded-xl shadow-md relative"
    >
      <div className="p-4 lg:px-10">
        <h2 className="text-neonGreen text-xs my-7 md:my-8 tracking-[3px] md:text-sm">
          ADVICE #117
        </h2>
        <p className="text-lightCyan text-2xl md:text-3xl md:leading-10">
          ¨It is easy to sit up and take notice, what`s difficult is getting up
          and taking action.¨
        </p>
        <div className="flex gap-5 justify-evenly items-center mt-8 md:mt-12 pb-10 md:pb-14">
          {/* Mobile */}
          <svg
            width="295"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            className="md:hidden"
          >
            <g fill="hsl(217, 19%, 38%)">
              <path
                fill="hsl(217, 19%, 38%)"
                d="M0 8h122v1H0zM173 8h122v1H173z"
              />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
          {/* Desktop */}
          <svg
            width="444"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:block"
          >
            <g fill="none">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <button className="absolute bottom-[-1.75rem] right-1/2 translate-x-1/2 bg-neonGreen w-14 h-14 flex items-center justify-center rounded-full hover:shadow-lg hover:shadow-neonGreen">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  );
};
