import * as graphql from "@nestjs/graphql";
import { MovementStatusResolverBase } from "./base/movementStatus.resolver.base";
import { MovementStatus } from "./base/MovementStatus";
import { MovementStatusService } from "./movementStatus.service";

@graphql.Resolver(() => MovementStatus)
export class MovementStatusResolver extends MovementStatusResolverBase {
  constructor(protected readonly service: MovementStatusService) {
    super(service);
  }
}
