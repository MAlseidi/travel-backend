import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from './config/db.config';
import { ToursModule } from './tours/tours.module';
import { ReviewsModule } from './reviews/reviews.module';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfig),
    ToursModule,
    ReviewsModule,
    RoutesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }