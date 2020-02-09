import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions";
class ExpenseFilters extends React.Component {
  state = {
    calendarFocus: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = calendarFocus => {
    this.setState({ calendarFocus });
  };
  render() {
    const { filters, setTextFilter, sortByAmount, sortByDate } = this.props;
    return (
      <div className="container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              className="text-input"
              type="text"
              value={filters.text}
              placeholder="Search..."
              onChange={e => setTextFilter(e.target.value)}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select-input"
              value={filters.sortBy}
              onChange={e => {
                e.target.value === "date" ? sortByDate() : sortByAmount();
              }}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            {" "}
            <DateRangePicker
              startDate={filters.startDate}
              endDate={filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocus}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
              startDateId="start"
              endDateId="end"
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  filters: state.filters
});
export default connect(mapStateToProps, {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
})(ExpenseFilters);
