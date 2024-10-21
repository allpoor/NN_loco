import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TextDetectionService } from "./textDetection.service";
import { TextDetectionControllerBase } from "./base/textDetection.controller.base";

@swagger.ApiTags("textDetections")
@common.Controller("textDetections")
export class TextDetectionController extends TextDetectionControllerBase {
  constructor(protected readonly service: TextDetectionService) {
    super(service);
  }
}
