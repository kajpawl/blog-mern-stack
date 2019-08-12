import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';

class Pagination extends React.Component {

  state = {
    presentPage: this.props.initialPage || 1,
    visible: this.props.visible === false ? false : true,
  }

  changePage = newPage => {
    const { onPageChange } = this.props;

    this.setState({ presentPage: newPage });
    onPageChange(newPage);
  }

  render() {
    const { pages } = this.props;
    const { presentPage, visible } = this.state;
    const { changePage } = this;

    return (
      <div className="pagination">
      {visible && <ul className="pagination__list">

        {presentPage !== 1 &&
          <li 
            key={0}
            onClick={() => { changePage(presentPage - 1) }}
            className='pagination__list__item 0'>
            &#8249;
          </li>
        }
        {[...Array(pages)].map((el, page) =>
          <li 
            key={++page}
            onClick={() => { changePage(page) }}
            className={`pagination__list__item${((page) === presentPage) ? ' pagination__list__item--active' : ''}`}>
            {page}
          </li>
        )}
        {presentPage !== pages &&
          <li 
            key={'last'}
            onClick={() => { changePage(presentPage + 1) }}
            className='pagination__list__item last'>
            &#8250;
          </li>
        }

        </ul>
      }
      </div>
    );
  }
};

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  visible: PropTypes.bool,
};

export default Pagination;