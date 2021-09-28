export const textToPath = (text: string) => text.toLowerCase().replace(/&/g, "and").replace(/ /g, "-")
export const isEmail = (email: string) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(String(email).toLowerCase())
}
export const getSafePercent = (percent: number) => {
	if (percent > 100 || percent < 0 || typeof percent !== "number") {
		console.warn(
			`[react-step-progress-bar]: The value passed to percent or position needs to be a number between 0 and 100 (passed value: ${percent}).`
		)
	}
	return Math.min(100, Math.max(percent, 0))
}

export const getStepPosition = (steps: number, stepIndex: number, hasStepZero: boolean) => {
	if (hasStepZero) {
		return (100 / (steps - 1)) * stepIndex
	}
	return (100 / steps) * (stepIndex + 1)
}
