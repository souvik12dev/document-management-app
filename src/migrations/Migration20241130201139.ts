import { Migration } from '@mikro-orm/migrations';

export class Migration20241130201139 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "user" ("id" varchar(255) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, "name" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null, "phone" varchar(255) not null, "role" text check ("role" in ('ADMIN', 'VIEWER', 'EDITOR')) not null, "city" varchar(255) not null, "postcode" varchar(255) not null, "address_one" text not null, constraint "user_pkey" primary key ("id"));`);
    this.addSql(`alter table "user" add constraint "idx_user_phone_email" unique ("phone", "email");`);
  }

}
