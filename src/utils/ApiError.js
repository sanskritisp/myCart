const apiError = (
    statusCode = 500,
    message = "Something went wrong",
    errors = []
) => {
    return {
        success: false,
        statusCode,
        message,
        errors,
    };
};

export default apiError;