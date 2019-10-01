import { Sequelize, Model, DataTypes } from "sequelize"

const sequelize = new Sequelize("mysql://dev:root@localhost:3306/projeto")

export interface UserInterface {
    name?: string
    idade?: number
    function: Function
}

export class User extends Model implements UserInterface {
    public name: string
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false
        }
    },
    {
        tableName: "users",
        sequelize: sequelize // this bit is important
    }
)

User.prototype.fullName = function(): string {
    return this.name + " Sousa"
}
