import { Module } from '@nestjs/common'
import { HelloService } from './hello/hello.service';
import { HelloController } from './hello/hello.controller';

@Module({
	imports: [],
	providers: [HelloService],
	controllers: [HelloController],
})
export class AppModule {}
