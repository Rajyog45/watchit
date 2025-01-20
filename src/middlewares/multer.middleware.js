import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
//explanation
// - This is a custom middleware function that uses the multer library to handle file uploads.
// - It takes two arguments: req and file.
// - The req argument is the request object.
// - The file argument is the file object that contains information about the uploaded file.
// - It uses the multer library to configure the storage settings for file uploads.
// - It specifies the destination folder where the uploaded files will be stored.
// - It specifies the filename of the uploaded file.
// - This middleware function is used to handle file uploads in express applications.
export const upload=multer({
    storage:storage,
}) 