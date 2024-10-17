import {createPool, Pool} from 'mysql'
let pool:Pool|null=null

const initializeMysqlConnector = () => {
    try {
        pool = createPool({
            connectionLimit:
                parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT != undefined ? process.env.MY_SQL_DB_CONNECTION_LIMIT : ""),
            port:
                parseInt(process.env.MY_SQL_DB_PORT != undefined ? process.env.MY_SQL_DB_PORT : ""),
            host: process.env.MY_SQL_DB_HOST,
            user: process.env.MY_SQL_DB_USER,
            password: process.env.MY_SQL_DB_PASSWORD,
            database: process.env.MY_SQL_DB_DATABASE
        });

        console.debug("MySql Adapater Pool generated successfully")
        console.log("process.env.DB_DATABASE: ", process.env.MY_SQL_DB_DATABASE)

        pool.getConnection((err, connection) => {
            if (err) {
                console.log(process.env)
                console.log("error: mysql failed to connect")
                throw new Error('not able to connect to database')
            } else {
                console.log("mysql connected")
                connection.release();
            }
        })
    } catch (err) {
        console.error('[mysql.connector][initializeMySqlConnector][Error]: ', err)
        throw new Error("failed to initialize pool")
    }
}
export const execute = <T>(query: string, params:string[] | object): Promise<T> => {
    try {
        if (!pool) {
            initializeMysqlConnector()
        }        
        return new Promise<T>((res, rej) => {
            pool!.query(query, params, (err, results) => {
                if (err) rej(err)
                else res(results)
            })
        })
    } catch (error) {
        console.error('[mysql.connector][execute][Error]: ', error)
        throw new Error('failed to execute MySQL query')
    }
}