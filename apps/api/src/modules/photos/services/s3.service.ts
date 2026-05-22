import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class S3Service {
  private readonly s3Client: S3Client;

  constructor(private readonly config: ConfigService) {
    this.s3Client = new S3Client({
      region: this.config.get('AWS_REGION', 'us-east-1'),
      credentials: {
        accessKeyId: this.config.get('AWS_ACCESS_KEY_ID', 'test'),
        secretAccessKey: this.config.get('AWS_SECRET_ACCESS_KEY', 'test'),
      },
    });
  }

  async generatePresignedUrl(key: string): Promise<string> {
    const bucket = this.config.get('AWS_S3_BUCKET', 'cra-photos');
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      ContentType: 'image/jpeg',
    });

    return getSignedUrl(this.s3Client, command, { expiresIn: 3600 });
  }
}
