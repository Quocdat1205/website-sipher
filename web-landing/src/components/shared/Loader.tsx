import { Box } from "@chakra-ui/layout"

interface LoaderProps {
    percent?: number
    isSecond?: boolean
}

const Loader = ({ isSecond = false, percent = 50 }: LoaderProps) => {
    return (
        <Box transform="rotateY(180deg) rotateZ(-90deg)">
            <svg viewBox="0 0 50 50" className="css-14uf48">
                <defs>
                    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F44A67" />
                        <stop offset="100%" stopColor="#FCD11F" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur className="blur" result="coloredBlur" stdDeviation="0.5"></feGaussianBlur>
                        <feMerge>
                            <feMergeNode in="coloredBlur"></feMergeNode>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                </defs>
                {!isSecond && (
                    <circle cx="25" cy="25" r="20" strokeWidth="2px" fill="transparent" stroke="#222"></circle>
                )}
                <circle
                    cx="25"
                    cy="25"
                    r="20"
                    strokeWidth={isSecond ? "1px" : "2px"}
                    strokeDashoffset="0"
                    strokeDasharray={`${(percent / 100) * 125} 360`}
                    strokeLinecap="round"
                    fill="transparent"
                    stroke={isSecond ? "#383838" : "url(#linear)"}
                    filter="url(#glow)"
                ></circle>
            </svg>
        </Box>
    )
}

export default Loader
