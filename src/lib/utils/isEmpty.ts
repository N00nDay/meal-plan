// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isEmpty(obj: Record<string, any>) {
	return Object.keys(obj).length === 0;
}
