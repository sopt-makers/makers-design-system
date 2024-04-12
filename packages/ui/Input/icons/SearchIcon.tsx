interface SearchIconProps {
  disabled: boolean;
}

function SearchIcon({ disabled }: SearchIconProps) {
  return <svg
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
      stroke={disabled ? '#515159' : '#FFFFFF'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
}

export default SearchIcon;