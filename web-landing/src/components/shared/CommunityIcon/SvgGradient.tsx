// * DESCRIPTION:

interface SvgGradientProps {}

const SvgGradient = ({}: SvgGradientProps) => {
	return (
		<defs>
			<linearGradient id="MyGradient" x1="0" x2="0" y1="0" y2="1">
				<stop offset="0%" stopColor="#FF6795" />
				<stop offset="84.37%" stopColor="#FF710B" />
			</linearGradient>
		</defs>
	)
}

export default SvgGradient
