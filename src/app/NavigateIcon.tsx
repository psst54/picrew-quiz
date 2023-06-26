const NavigateIcon = ({ size, color }: { size: number; color: string }) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 1920 1920"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(45)"
      stroke={color}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M960.406 0 345 615.176l81.364 81.366L902.83 220.075V1920h114.922V220.075l476.466 476.467 81.366-81.366z"
          fillRule="evenodd"
        ></path>
      </g>
    </svg>
  );
};

export default NavigateIcon;
