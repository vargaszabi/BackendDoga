import { Body, Controller, Get, Param, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import db from './db';
import { Macskak } from './macskak.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async showMacska() {
    const [rows] = await db.execute(
      'SELECT id, suly, szem_szin FROM macskak ORDER BY suly DESC',
    );
    return {
      macskak: rows,
    };
  }
}
