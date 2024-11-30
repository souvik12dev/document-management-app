import { EntityGenerator } from '@mikro-orm/entity-generator';
import { Migrator } from '@mikro-orm/migrations';
import {defineConfig} from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import {SeedManager} from '@mikro-orm/seeder';

import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();
const configService = new ConfigService();

export default defineConfig({
    host: configService.get('DB_HOST'),
    port: parseInt(configService.get('DB_PORT')),
    user: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    dbName: configService.get('DB_NAME'),
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    debug: true,
    metadataProvider: TsMorphMetadataProvider,
    extensions: [Migrator, EntityGenerator, SeedManager]
})