import { ApiProperty } from '@nestjs/swagger';

export class CreateFrequencyDto {
    @ApiProperty()
    frequency: string    
}
