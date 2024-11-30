import { Entity, Enum, PrimaryKey, Property, Unique } from "@mikro-orm/postgresql";
import { BaseEntity } from "../../../core/BaseEntity";
import { Role } from "../role/Role";

@Entity()
@Unique({ name: 'idx_user_phone_email', properties: ['phone', 'email'] })
export class User extends BaseEntity {

    @Property()
    name!: string;

    @Property()
    email!: string;

    @Property()
    password!: string;

    @Property()
    phone!: string;

    @Enum(() => Role)
    role!: Role;

    @Property()
    city!: string;

    @Property()
    postcode!: string;

    @Property({ type: 'text' })
    addressOne!: string;

}