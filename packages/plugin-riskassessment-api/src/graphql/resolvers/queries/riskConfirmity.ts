import { IContext } from '../../../connectionResolver';
import { IRiskConfirmityParams } from '../../../models/definitions/common';

const RiskConfimityQuries = {
  async riskConfirmities(
    _root,
    params: IRiskConfirmityParams,
    { models }: IContext
  ) {
    return await models.RiskConfimity.riskConfirmities(params);
  },
  async riskConfirmityDetails(
    _root,
    params: IRiskConfirmityParams,
    { models }: IContext
  ) {
    return await models.RiskConfimity.riskConfirmityDetails(params);
  },
  async riskConfirmitySubmissions(
    _root,
    params: { dealId: string },
    { models }: IContext
  ) {
    return await models.RiskConfimity.riskConfirmitySubmissions(params);
  },
};

export default RiskConfimityQuries;
