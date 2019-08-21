import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UnitService, CategoryService, PrototypeService, ProductService, StockService } from './services';
import { UnitRef, UnitSchema, CategoryRef, CategorySchema } from './schemas';

import { SettingsController } from './settings.controller';
import { UnitController } from './controllers';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: UnitRef, schema: UnitSchema },
            { name: CategoryRef, schema: CategorySchema }
        ])
    ],
    controllers: [SettingsController, UnitController],
    providers: [UnitService, CategoryService, PrototypeService, ProductService, StockService],
})
export class CoreModule { }