import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MovementStatusService } from "./movementStatus.service";
import { MovementStatusControllerBase } from "./base/movementStatus.controller.base";

@swagger.ApiTags("movementStatuses")
@common.Controller("movementStatuses")
export class MovementStatusController extends MovementStatusControllerBase {
  constructor(protected readonly service: MovementStatusService) {
    super(service);
  }
}
