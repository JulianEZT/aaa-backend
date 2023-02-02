import OracleDB, { oracleClientVersion } from "oracledb";

export default class DatabaseConnection {

    private oracleDB = OracleDB;
    public dbConfig = {
        user: 'mvm',
        password: 'Z0p0rt32o1s!**',
        connectString: '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=database-1.cxrt30ouqnf6.us-east-1.rds.amazonaws.com)(Port=1521))(CONNECT_DATA=(SID=orcl)))'
    }

    public async init(): Promise<void> {
    }



    public async connectWithDB() {
        return new Promise((resolve, reject) => {
            this.oracleDB.initOracleClient({libDir: 'C:/instantclient_21_8'});
            this.oracleDB.getConnection(this.dbConfig, (err, connection) => {
                if (err) {
                    reject(err.message);
                }
                console.log('Connected with Database...');
                resolve(connection);
            });
        });
    }

    public doRelease(connection: any) {
        connection.release((err: any) => {
            if (err)
                console.error(err.message);
            console.log('connection released');
        });
    }
}

/* const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
}

module.exports = {dbConnect}; */
