export function ensureAuth (req, res, next) {
	if (req.isAuthenticated()) {
		return next()
	} else {
		console.log("Not authorized")
	}
}

