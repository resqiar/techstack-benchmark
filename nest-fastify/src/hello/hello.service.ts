import { Injectable } from '@nestjs/common'

@Injectable()
export class HelloService {
	hello(): string {
		return 'Hello From Fastify!'
	}
}
