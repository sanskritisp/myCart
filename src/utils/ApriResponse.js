const apiResponse = (
    statusCode = 200,
    message = "Success",
    data = null
) => {
    return {
        success: true,
        statusCode,
        message,
        data,
    };
};

export default apiResponse;