/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import feather from 'feather-icons';
import locale from 'date-fns/esm/locale/pt-BR';
import { format, compareDesc } from 'date-fns';
import { TextField } from '../TextField';
import Calendar, {
  isDate,
  isDateRange,
  isInRange,
  isSameDay,
  isSameMonth,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAYS
} from './helper';

const resolveStateFromDate = (date = null) => {
  const isDateObject = isDate(date);
  const parsedDate = isDateObject ? date : new Date();
  return {
    current: isDateObject ? date : null,
    month: +parsedDate.getMonth() + 1,
    year: parsedDate.getFullYear()
  };
};

const getCalendarDates = (date) => {
  const { current, month, year } = resolveStateFromDate(date);
  const calendarMonth = month || +current.getMonth() + 1;
  const calendarYear = year || current.getFullYear();

  return Calendar(calendarMonth, calendarYear);
};

const DatePicker = ({
  today,
  selected,
  range,
  value,
  placeholder,
  onDateChanged
}) => {
  const { current: preCurrent, month: preMonth, year: preYear } = resolveStateFromDate(selected);
  const [current, setCurrent] = useState(preCurrent);
  const [rangeSpan, setRangeSpan] = useState(isDateRange(selected) ? selected : []);
  const [lastRange, setLastRange] = useState(0);
  const [month, setMonth] = useState(preMonth);
  const [year, setYear] = useState(preYear);
  const [yearSelector, setYearSelector] = useState(false);
  const [calendarDates, setCalendarDates] = useState(
    getCalendarDates(isDateRange(selected)
      ? selected[0]
      : selected || today)
  );
  const [showValue, setShowValue] = useState(value);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (range) {
      setShowValue(
        rangeSpan.map((date) => format(date, 'dd/MM/yyyy')).join(' - ')
      );
    }
    if (!range) {
      setShowValue(current ? format(current, 'dd/MM/yyyy') : '');
    }
  }, [current, rangeSpan, setShowValue]);

  const setStates = (preState) => {
    setCurrent(preState.current || current);
    if (range) {
      setRangeSpan(preState.range || rangeSpan);
      setLastRange(lastRange === 0 ? 1 : 0);
    }
    setMonth(preState.month || month);
    setYear(preState.year || year);
    setCalendarDates(getCalendarDates(new Date(
      preState.year,
      preState.month - 1,
    )));
  };

  const gotoDate = (date) => (event) => {
    if (event) {
      event.preventDefault();
    }
    const preRange = rangeSpan.length === 0
      ? [date]
      : rangeSpan.length === 1
        ? compareDesc(rangeSpan[0], date) === 1
          ? [rangeSpan[0], date]
          : [date, rangeSpan[0]]
        : [date];
    setStates({ range: preRange, ...resolveStateFromDate(date) });
    return onDateChanged(range ? rangeSpan : date);
  };

  const gotoPreviousMonth = () => setStates(getPreviousMonth(month, year));
  const gotoNextMonth = () => setStates(getNextMonth(month, year));

  const calendarDate = (date, index) => {
    const _date = new Date(date.join('-'));
    const isToday = isSameDay(_date, today);
    const isSelected = isDateRange(selected)
                       ? isInRange(selected[0], selected[0], date)
                       : current && isSameDay(_date, current);
    const inMonth = month && year && isSameMonth(_date, new Date([year, month, 1].join('-')));

    const args = {
      onClick: gotoDate(_date),
      onKeyPress: gotoDate(_date),
      title: date.toString()
    };

    return (
      <div
        key={getDateISO(_date)}
        index={index.toString()}
        className={[
          'bg',
          range && rangeSpan[0] && isSameDay(_date, rangeSpan[0]) ? 'first-range' : '',
          range && rangeSpan[1] && isSameDay(_date, rangeSpan[1]) ? 'last-range' : '',
          range && rangeSpan.length > 1 && isInRange(rangeSpan[0], rangeSpan[1], _date) ? 'range' : '',
        ].join(' ')}
      >
        <div
          role="button"
          tabIndex={0}
          className={[
            'ragnarok',
            'calendar',
            'cell',
            'date',
            isSelected ? 'highlighted' : '',
            range && isInRange(rangeSpan[0], rangeSpan[1], _date) ? 'range' : '',
            range && rangeSpan[0] && isSameDay(_date, rangeSpan[0]) ? 'first-range' : '',
            range && rangeSpan[1] && isSameDay(_date, rangeSpan[1]) ? 'last-range' : '',
            isToday ? 'today' : '',
            'day',
            inMonth ? 'inmonth' : 'disabled'
          ].join(' ')}
          {...args}
          style={{
            gridColumn: `${(index % 7) + 1} / span 1`,
            gridRow: `${Math.floor(index / 7) + 2} / span 1`
          }}
        >
          <div className={['ragnarok', 'day-content'].join(' ')}>
            {_date.getDate()}
          </div>
        </div>
      </div>
    );
  };

  const monthYearController = () => {
    const monthname = locale.localize.month(Math.max(0, Math.min(month - 1, 11)));

    return (
      <div className={['ragnarok', 'calendar', 'header'].join(' ')}>
        <div className={['ragnarok', 'calendar', 'month'].join(' ')}>
          {monthname}
          {' '}
          <button
            type="button"
            className={[
              'ragnarok',
              'calendar',
              'arrow',
              'arrow-down',
              yearSelector ? 'open' : 'close'
            ].join(' ')}
            onClick={() => setYearSelector(!yearSelector)}
            title="Select Year"
          >
            {year}
            <i
              data-testid="previous"
              className="icon-down"
              dangerouslySetInnerHTML={{
                __html: feather.icons['chevron-down'].toSvg({
                  'stroke-width': 1.5,
                  width: 24,
                  height: 24
                })
              }}
            />
          </button>
        </div>
        <div className={['ragnarok', 'calendar', 'controls'].join(' ')}>
          <button
            type="button"
            className={['ragnarok', 'calendar', 'arrow', 'arrow-left'].join(' ')}
            onClick={gotoPreviousMonth}
            title="Previous Month"
          >
            <i
              data-testid="previous"
              className="icon-left"
              dangerouslySetInnerHTML={{
                __html: feather.icons['arrow-left-circle'].toSvg({
                  'stroke-width': 1.5,
                  width: 24,
                  height: 24
                })
              }}
            />
          </button>
          <button
            type="button"
            className={['ragnarok', 'calendar', 'arrow', 'arrow-right'].join(' ')}
            onClick={gotoNextMonth}
            title="Next Month"
          >
            <i
              data-testid="previous"
              className="icon-right"
              dangerouslySetInnerHTML={{
                __html: feather.icons['arrow-right-circle'].toSvg({
                  'stroke-width': 1.5,
                  width: 24,
                  height: 24
                })
              }}
            />
          </button>
        </div>
      </div>
    );
  };

  const yearsBack = Array.from(Array(12), (x, index) => year - index - 1).reverse();
  const yearsForward = Array.from(Array(12), (x, index) => year + index + 1);
  const years = [...yearsBack, year, ...yearsForward];
  return (
    <div
      data-testid="datepicker"
      className={[
        'ragnarok',
        'calendar',
        show ? 'open' : 'close'
      ].join(' ')}
    >
      <TextField
        iconLeft="calendar"
        iconRight="chevron-down"
        label="DatePicker"
        onChange={(x) => setShowValue(format(x, 'dd/MM/yyyy'))}
        onClick={() => setShow(!show)}
        onClickRight={() => setShow(!show)}
        value={showValue}
        readOnly
        placeholder={placeholder}
        style={{ width: '368px', maxWidth: '368px' }}
      />
      <div className={[
          'ragnarok',
          'container',
          show ? 'open' : 'close'
        ].join(' ')}
      >
        { monthYearController() }
        <div className={[
            'ragnarok',
            'calendar',
            'years',
            yearSelector ? 'open' : 'close'
          ].join(' ')}
        >
          {years.map((x, index) => (
            <span
              key={index.toString()}
              role="button"
              onKeyPress={() => {}}
              tabIndex={0}
              onClick={() => {
                setStates({ month, year: x });
                setYearSelector(false);
              }}
              className={[
                'year',
                x.toString() === year.toString() ? 'selected' : ''
              ].join(' ')}
            >
              <span className="inner">{x}</span>
            </span>
          ))}
        </div>
        <div className={['ragnarok', 'calendar', 'grid'].join(' ')}>
          <>
            { Object.keys(WEEK_DAYS).map((day, index) => (
              <div
                key={index.toString()}
                className={['ragnarok', 'calendar', 'cell', 'day'].join(' ')}
                style={{
                  gridColumn: `${(index % 7) + 1} / span 1`,
                }}
                index={index}
              >
                {WEEK_DAYS[day].toUpperCase()}
              </div>
            )) }
          </>
          <>
            { calendarDates.map((date, index) => calendarDate(date, index)) }
          </>
        </div>
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  /**
   * What day is today?
   */
  today: PropTypes.instanceOf(Date),
  /**
   * Should it start with a selected day or range:
   */
  selected: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.array
  ]),
  /**
   * Range of dates instead of a single date
   */
  range: PropTypes.bool,
  /**
   * Value to show on picker
   */
  value: PropTypes.string,
  /**
   * Value to show while nothing is selected
   */
  placeholder: PropTypes.string,
  /**
   * Optional change handler
   */
  onDateChanged: PropTypes.func,
};

DatePicker.defaultProps = {
  today: new Date(),
  selected: undefined,
  range: false,
  placeholder: 'Select a Date',
  value: '',
  onDateChanged: undefined,
};

export {
  DatePicker
};
