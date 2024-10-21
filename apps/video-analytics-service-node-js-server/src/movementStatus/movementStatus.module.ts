import { Module } from "@nestjs/common";
import { MovementStatusModuleBase } from "./base/movementStatus.module.base";
import { MovementStatusService } from "./movementStatus.service";
import { MovementStatusController } from "./movementStatus.controller";
import { MovementStatusResolver } from "./movementStatus.resolver";

@Module({
  imports: [MovementStatusModuleBase],
  controllers: [MovementStatusController],
  providers: [MovementStatusService, MovementStatusResolver],
  exports: [MovementStatusService],
})
export class MovementStatusModule {}
