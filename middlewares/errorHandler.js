export const errorHandler = (err,req,res,next) => {
    console.log("Error Hanlder Called");
    console.error(err.stack);
    const status = err.status || 501;
    let message = err.message || "Internal Server Error";
    return res.status(status).json({
        success: false,
        message,
    });
};