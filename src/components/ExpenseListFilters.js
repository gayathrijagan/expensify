import React from 'react';
import {connect} from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (focusedInput) => {
        this.setState(() => ({calenderFocused: focusedInput}));
    }

    render() {
        return (
            <div>
                <input 
                    type='text' 
                    value={this.props.filters.text} 
                    onChange={(event) => {
                        this.props.dispatch(setTextFilter(event.target.value));
                    }} 
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={(event) => {
                        if(event.target.value === 'date')
                            this.props.dispatch(sortByDate());
                        else 
                            this.props.dispatch(sortByAmount());
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDateId='startDate'
                    endDateId='endDate'
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpenseListFilters);