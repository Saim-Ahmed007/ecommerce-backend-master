function createResponse(status, payload) {
    if (status) {
        return {
            status,
            payload: typeof payload === "object" ? payload : {}
        }
    } else {
        return {
            status,
            error: {
                message: typeof payload === "string" ? payload : "Oops! An Error Occurred"
            }
        }
    }
}


module.exports = createResponse