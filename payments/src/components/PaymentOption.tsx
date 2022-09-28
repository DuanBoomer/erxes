import { Component } from 'react';

import { PAYMENTS } from '../constants';
import { IPaymentParams } from '../types';
import QpaySection from './Qpay';
import SocialPaySection from './SocialPay';

type Props = {
  handleClose: any;
  params: IPaymentParams;
  show: boolean;
  datas: any[];
  paymentId?: string;
  invoice?: any;
  onClickInvoiceCreate: (
    paymentConfigId: string,
    params: IPaymentParams
  ) => void;
};

type State = {
  id: string;
  description: string;
  amount: number;
};

class Payment extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      id: (props.paymentId && props.paymentId) || '',
      description: (props.params.description && props.params.description) || '',
      amount: (props.params.amount && props.params.amount) || 0,
    };
  }

  onChange = (key: string, value:any) => {
    console.log(key, value);
    this.setState({ [key]: value } as any);

    console.log(this.state);
  };

  onClick = (id: string) => {
    this.setState({ id });
  };

  onClickButton = (e: any) => {
    const { id } = this.state;
    const { params, onClickInvoiceCreate } = this.props;

    if (e.target.id === 'create') {
      return onClickInvoiceCreate(id, {...params, ...this.state});
    } else {
      console.log('check');
    }
  };

  imageRender = (url: string, name: string, paymentConfigId: string) => {
    const { id } = this.state;
    const checked = id === paymentConfigId ? true : false;

    return (
      <div
        key={paymentConfigId}
        className='grid-sub-container'
        onClick={this.onClick.bind(this, paymentConfigId)}
      >
        <div className='grid-radio-item'>
          <input
            type='radio'
            name='payment'
            checked={checked}
            onChange={this.onClick.bind(this, paymentConfigId)}
          />
        </div>
        <div className='grid-image-item'>
          <img src={url} alt='payment config' width='100px' />
        </div>
        <div className='grid-name-item'>{name}</div>
      </div>
    );
  };

  renderButtons = () => {
    const { invoice } = this.props;

    if (!this.state.id) {
      return null;
    }

    let text = 'Create Invoice';
    let buttonId = 'create';

    if (invoice && invoice.status === 'open') {
      text = 'Check invoice';
      buttonId = 'check';
    }

    return (
      <input
        id={buttonId}
        type='submit'
        value={text}
        onClick={this.onClickButton}
      />
    );
  };

  

  paymentOptionRender = (datas: any[]) => {
    const { id } = this.state;
    const { params } = this.props;

    const paymentData = id ? datas.find((d) => d._id === id) : null;
    const type = paymentData ? paymentData.type : null;

    return (
      <div className='grid-container'>
        <div className='grid-item'>
          <div style={{ height: '30em', overflow: 'auto' }}>
            {datas.map((data: any) => {
              const paymentConstant = PAYMENTS.find(
                (p) => p.type === data.type
              );

              return this.imageRender(
                paymentConstant ? paymentConstant.logo : '',
                data.name,
                data._id
              );
            })}
          </div>
        </div>
        <div className='grid-item'>
          {id && type === 'qpay' && <QpaySection {...this.props} onChange={this.onChange} />}
          {id && type === 'socialPay' && <SocialPaySection {...this.props} />}
          {this.renderButtons()}
        </div>
      </div>
    );
  };

  render() {
    const { show, datas } = this.props;
    const showHideClassName = show
      ? 'modal display-block'
      : 'modal display-none';

    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {this.paymentOptionRender(datas)}
        </section>
      </div>
    );
  }
}

export default Payment;
