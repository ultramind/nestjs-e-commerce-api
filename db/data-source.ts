import { DataSourceOptions, DataSource } from "typeorm";

export const dataSourceOptions:DataSourceOptions = {
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username:"postgres",
    password: '0000',
    database:"e-commerce",
    entities: [],
    migrations:[],
    synchronize:false,
    logging:false
}

const dataSource = new DataSource(dataSourceOptions)

export default dataSource;