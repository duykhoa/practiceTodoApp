import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../reducers/index';

const mapStatesToProps = (state: StoreState) => {
  return { visibilityFilter: state.visibilityFilter };
}
const mapDispatchesToProps = (dispatch: Dispatch) => {
  return {
    onClick: (filter: string) => { dispatch({ type: 'SET_VISIBILITY_FILTER', filter: filter }) }
  };
}

const connector = connect(
  mapStatesToProps,
  mapDispatchesToProps
)

type PropsFromRedux = ConnectedProps<typeof connector>;

type ILinkProps = PropsFromRedux & {
  text: string;
}

const Link: React.FunctionComponent<ILinkProps> = ({ text, visibilityFilter, onClick }: ILinkProps) => {
  return (
    <a href="/#" style={{ padding: "0 3px", color: visibilityFilter === text ? 'red': 'blue' }} onClick={ () => onClick(text) }>{ text }</a>
  );
}

export default connector(Link);
