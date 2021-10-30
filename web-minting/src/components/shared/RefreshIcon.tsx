interface RefreshIconProps {
    size?: string
}

const RefreshIcon = ({ size = "1.2rem" }: RefreshIconProps) => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            aria-hidden="true"
            focusable="false"
            height={size}
            width={size}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#FF6795" }} />
                    <stop offset="84.37%" style={{ stopColor: "#FF710B" }} />
                </linearGradient>
            </defs>
            <path
                fill="url(#grad1)"
                d="M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z"
            ></path>
        </svg>
    )
}

export default RefreshIcon
