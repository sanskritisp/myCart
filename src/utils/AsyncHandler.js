const asyncHandler = (asyncFn) => async(req, res, next) => {
    try {
        await asyncFn(req, res, next)

    } catch (error) {
        console.log(error.message)
    }
}

export default asyncHandler;