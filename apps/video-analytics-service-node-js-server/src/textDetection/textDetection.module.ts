import { Module } from "@nestjs/common";
import { TextDetectionModuleBase } from "./base/textDetection.module.base";
import { TextDetectionService } from "./textDetection.service";
import { TextDetectionController } from "./textDetection.controller";
import { TextDetectionResolver } from "./textDetection.resolver";

@Module({
  imports: [TextDetectionModuleBase],
  controllers: [TextDetectionController],
  providers: [TextDetectionService, TextDetectionResolver],
  exports: [TextDetectionService],
})
export class TextDetectionModule {}
