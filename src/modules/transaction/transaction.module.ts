import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { WaybillService } from './waybill.service';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';

import { ProductRef, ProductSchema } from '../settings/schemas';
import {
  TransactionRef,
  TransactionSchema,
  WaybillRef,
  WaybillSchema,
} from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductRef, schema: ProductSchema },
      { name: TransactionRef, schema: TransactionSchema },
      { name: WaybillRef, schema: WaybillSchema },
    ]),
  ],
  controllers: [TransactionController],
  providers: [TransactionService, WaybillService],
})
export class TransactionModule {}
