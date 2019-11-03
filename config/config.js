module.exports = () => {
    let env = process.env.NODE_ENV || 'development';
    switch(env){
        case 'development':
            return {
                HOST : 'localhost',
                PORT : '8007',
                DATABASE : 'mongodb+srv://Aditya76:Aditya123@socket-cluster-whx6d.mongodb.net/test?retryWrites=true&w=majority',
                JWT_SECRET : 'worldisfullofdevelopers'
            }
        case 'production':
            return {
                HOST : 'localhost',
                PORT : '8007',
                DATABASE : 'mongodb+srv://Aditya76:Aditya123@socket-cluster-whx6d.mongodb.net/test?retryWrites=true&w=majority',
                JWT_SECRET : 'worldisfullofdevelopers'
            }
    }
}