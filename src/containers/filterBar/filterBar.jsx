import React from 'react';
import CategoryFilter from '../../components/categoryFilter/categoryFilter';
import OrderFilter from '../../components/orderFilter/filter';

const FilterBar = {
  render() {
    return (
      <div className="col-lg-3">
        <div className="row">
          <div className="col-12">
            <CategoryFilter />
          </div>
          <div className="col-12">
            <OrderFilter />
          </div>
        </div>
      </div>
    );
  },
};

export default FilterBar;
