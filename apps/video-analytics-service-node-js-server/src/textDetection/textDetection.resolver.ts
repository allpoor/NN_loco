import * as graphql from "@nestjs/graphql";
import { TextDetectionResolverBase } from "./base/textDetection.resolver.base";
import { TextDetection } from "./base/TextDetection";
import { TextDetectionService } from "./textDetection.service";

@graphql.Resolver(() => TextDetection)
export class TextDetectionResolver extends TextDetectionResolverBase {
  constructor(protected readonly service: TextDetectionService) {
    super(service);
  }
}
