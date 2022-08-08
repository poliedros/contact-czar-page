import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LogDocument = Log & Document;

@Schema()
export class Log {
  @Prop()
  date: Date;

  @Prop()
  to: string;

  @Prop()
  body: string;
}

export const LogSchema = SchemaFactory.createForClass(Log);
