import React, { useState } from 'react';
import { __, router } from '@erxes/ui/src/utils';

import { BarItems } from '@erxes/ui/src/layout/styles';
import Button from '@erxes/ui/src/components/Button';
import DataWithLoader from '@erxes/ui/src/components/DataWithLoader';
import FormControl from '@erxes/ui/src/components/form/Control';
import { IRouterProps } from '@erxes/ui/src/types';
import { Link } from 'react-router-dom';
import List from '../containers/sites/List';
import Pagination from '@erxes/ui/src/components/pagination/Pagination';
import { Title } from '@erxes/ui-settings/src/styles';
import Wrapper from '@erxes/ui/src/layout/components/Wrapper';
import { withRouter } from 'react-router-dom';
type Props = {
  loading: boolean;
  sitesCount: number;
  queryParams: any;
} & IRouterProps;
function DigitalIncomeRoom(props: Props) {
  let timer;

  const { loading, sitesCount, queryParams } = props;

  const [searchValue, setSearchValue] = useState(queryParams.searchValue || '');

  const search = (e: any) => {
    if (timer) {
      clearTimeout(timer);
    }

    const { history } = props;

    const value = e.target.value;

    setSearchValue(value);

    timer = setTimeout(() => {
      router.removeParams(history, 'page');
      router.setParams(history, { searchValue: value });
    }, 500);
  };

  const actionBarRight = (
    <BarItems>
      <FormControl
        type="text"
        placeholder={__('Search room')}
        onChange={search}
        value={searchValue}
      />
      <Link to="/digitalIncomeRooms/room/create">
        <Button btnStyle="success" icon="plus-circle">
          New room
        </Button>
      </Link>
    </BarItems>
  );
  return (
    <>
      <Wrapper
        header={
          <Wrapper.Header
            title={__('digital Income Room')}
            breadcrumb={[{ title: __('digital Income Room') }]}
          />
        }
        actionBar={
          <Wrapper.ActionBar
            left={<Title>{__('All digital Income Room')}</Title>}
            right={actionBarRight}
          />
        }
        content={
          <DataWithLoader
            data={<List sitesCount={sitesCount} queryParams={queryParams} />}
            count={sitesCount}
            loading={loading}
            emptyText="You haven't created any room. Start building your site"
            emptyImage="/images/actions/31.svg"
          />
        }
        footer={<Pagination count={sitesCount} />}
        hasBorder={true}
      />
    </>
  );
}

export default withRouter<Props>(DigitalIncomeRoom);
