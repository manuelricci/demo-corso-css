export function sanitizeString(value) {
	return value.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"").trim();
}

export function validateEmail(email) {
	const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return re.test(String(email).toLowerCase());
}
