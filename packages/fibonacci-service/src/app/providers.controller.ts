import { Controller, Param, Put } from '@nestjs/common';
import { ProviderService } from '@openfeature/provider';
import { ProviderId } from '@openfeature/utils';

@Controller('providers')
export class ProvidersController {
  constructor(private providerService: ProviderService) {}

  /**
   * Switches the current provider
   * @returns array of provider ids.
   */
  @Put('current/:providerId')
  async setProvider(@Param('providerId') providerId: ProviderId) {
    await this.providerService.switchProvider(providerId);
  }
}
