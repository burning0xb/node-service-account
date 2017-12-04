import moment from 'moment';
import autobind from 'autobind-decorator'
import { logger } from '../../log4j';

@autobind
export default class Address {
  constructor() {
  }

  async getUserAddress(cb, info, mq) {
    logger.warn(`this is moment format ${moment().format('YYYY-MM-DD hh:mm:ss')}`);
    cb({ code: '00000', address: { province: '上海', city: '上海', country: '徐汇区' } });
  }

}
