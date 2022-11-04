import _ from 'lodash';
import { FormControl } from '@erxes/ui/src';
import React from 'react';
import { IContract } from '../types';
import Tip from '@erxes/ui/src/components/Tip';
import Button from '@erxes/ui/src/components/Button';
import Icon from '@erxes/ui/src/components/Icon';
import ModalTrigger from '@erxes/ui/src/components/ModalTrigger';
import { __ } from '@erxes/ui/src/utils/core';
import ContractForm from '../containers/ContractForm';

type Props = {
  contract: IContract;
  history: any;
  isChecked: boolean;
  queryParams: any;
  toggleBulk: (contract: IContract, isChecked?: boolean) => void;
};

function ContractRow({
  contract,
  toggleBulk,
  isChecked,
  history,
  queryParams
}: Props) {
  const onChange = e => {
    if (toggleBulk) {
      toggleBulk(contract, e.target.checked);
    }
  };

  const onTdClick = () => {
    history.push(`/contract/details/${contract._id}`);
  };

  const actionButton = () => {
    const trigger = (
      <Button btnStyle="link">
        <Tip text={__('Edit form')} placement="top">
          <Icon icon="edit-3" />
        </Tip>
      </Button>
    );

    const content = props => (
      <ContractForm {...props} contract={contract} queryParams={queryParams} />
    );

    return (
      <ModalTrigger
        title="Edit basic info"
        size="lg"
        trigger={trigger}
        content={content}
        isAnimate={true}
      />
    );
  };

  return (
    <tr>
      <td>
        <FormControl
          componentClass="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
      </td>

      <td onClick={onTdClick}>{contract.name} </td>
      <td onClick={onTdClick}>{contract.status}</td>
      <td>{actionButton()}</td>
    </tr>
  );
}

export default ContractRow;
