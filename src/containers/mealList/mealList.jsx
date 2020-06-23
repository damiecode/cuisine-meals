/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meals from '../../components/meals/meals';
import categoryFilter from '../../pipes/categoryFilter';
import orderByFilter from '../../pipes/orderByFilter';
import Layout from '../../components/layout/layout';
import paginationPipe from '../../pipes/paginationFilter';
import LetterFilter from '../../components/orderFilter/filter';
// import Pagination from "../../components/Pagination/Pagination";

class MealList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colValue: 'col-lg-4',
      perPage: 12,
      currentPage: 1,
      pagesToShow: 3,
      gridValue: 3,
    };
  }

  onPrev() {
    const page = this.state;
    const updatedState = { ...page };
    updatedState.currentPage = page.currentPage - 1;
    this.setState(updatedState);
  }

  onNext() {
    const page = this.state;
    this.setState(prevState => ({
      ...page,
      page: { ...prevState.page, currentPage: page.currentPage + 1 },
    }));
  }

  changeLayout(n) {
    this.setState({ gridValue: n });

    let realGridValue;

    if (n === 4) {
      realGridValue = 3;
    } else {
      realGridValue = 4;
    }

    this.setState({
      colValue: `col-lg-${realGridValue}`,
    });
  }

  goPage(n) {
    const page = this.state;
    this.setState(prevState => ({
      page,
      prevState,
      currentPage: n,
    }));
  }

  render() {
    const page = this.state;
    const isActive = page.colValue[page.colValue.length - 1];

    return (
      <div className="col-lg-9">
        <div className="row mb-3">
          <div className="col-12 d-none d-lg-block d-xl-block">
            <div className="card ">
              <div className="card-header d-flex justify-content-end">
                <span className="mr-3">Change Layout: </span>
                <Layout len={3} isActive={page.gridValue === 3} click={this.changeLayout} />
                <Layout len={4} isActive={page.gridValue === 4} click={this.changeLayout} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {paginationPipe(this.props.meals, this.state).map(meal => {
            const classes = `${page.colValue} col-md-6 mb-4`;
            return (
              <div className={classes}>
                <Meals key={meal.id} meal={meal} />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-end">
          <LetterFilter
            totalItemsCount={this.props.meals.length}
            currentPage={page.currentPage}
            perPage={page.perPage}
            pagesToShow={page.pagesToShow}
            onGoPage={this.goPage}
            onPrevPage={this.onPrev}
            onNextPage={this.onNext}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const categories = state.categoryFilter;
  const { orderBy } = state;

  const filterByCategoryArr = categoryFilter(state.meals, categories);
  const filterByOrderArr = orderByFilter(filterByCategoryArr, orderBy);

  return { meals: filterByOrderArr };
};

export default connect(mapStateToProps, null)(MealList);
