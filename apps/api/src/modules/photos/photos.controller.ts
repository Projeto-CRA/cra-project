import { Controller, Post, Param, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { S3Service } from './services/s3.service';
import { CreatePresignedUrlDto } from './dto/create-presigned-url.dto';
import { PrismaService } from '../../infrastructure/database/prisma.service';

@ApiTags('Photos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('cycles/:id/photos')
export class PhotosController {
  constructor(
    private readonly s3Service: S3Service,
    private readonly prisma: PrismaService,
  ) {}

  @Post('presigned')
  @ApiOperation({ summary: 'Gerar URL presigned para upload de foto' })
  async getPresignedUrl(
    @Param('id') cycleId: string,
    @Body() dto: CreatePresignedUrlDto,
  ) {
    const s3Key = `cycles/${cycleId}/${Date.now()}-${dto.moment}.jpg`;

    await this.prisma.photo.create({
      data: {
        cycleId,
        moment: dto.moment,
        latitude: dto.latitude,
        longitude: dto.longitude,
        s3Key,
        takenAt: new Date(),
        syncStatus: 'PENDING',
      },
    });

    const uploadUrl = await this.s3Service.generatePresignedUrl(s3Key);
    return { uploadUrl, s3Key };
  }
}
