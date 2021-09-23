import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import Icon from 'react-hero-icon';
import { dcnb } from 'cnbuilder';

/**
 * Autocomplete Component
 *
 * HTML autocomplete element
 */

export const AutocompleteField = React.forwardRef(
  (
    {
      className,
      id,
      emptyText,
      options,
      label,
      description,
      onChange,
      disabled,
      placeholder,
      acceptNewValues = false,
      multiple = false,
      initialValue,
      ...props
    },
    ref
  ) => {
    const [values, setValues] = React.useState([]);

    const clearTerm = (term) => {
      setValues(values.filter((item) => item.value !== term.value));
    };
    const filterOptions = createFilterOptions({
      limit: 10,
    });

    const {
      getRootProps,
      getInputLabelProps,
      getInputProps,
      getListboxProps,
      getOptionProps,
      groupedOptions,
      getClearProps,
      popupOpen,
      focused,
      inputValue,
    } = useAutocomplete({
      ...props,
      getOptionLabel: (option) => (option.value ? option.value : ''),
      options,
      openOnFocus: false,
      id,
      filterOptions,
      multiple,
      handleHomeEndKeys: true,
      freeSolo: acceptNewValues,
      value: values,
      onChange: (event, newValue, reason) => {
        let updatedValue = [];
        if (reason !== 'clear' && newValue) {
          if (typeof newValue === 'object') {
            if (typeof newValue[newValue.length - 1] === 'string') {
              const latest = newValue.pop();
              if (!newValue?.filter((item) => item.value === latest).length) {
                updatedValue = [...newValue, { value: latest }];
              }
            } else {
              updatedValue = newValue;
            }
          } else {
            updatedValue = { value: newValue };
          }
        }
        // The component is intended to be used with react-hook-form which will send down an onChange function that will
        // update the value of the field in the form.
        onChange(updatedValue);
        setValues(updatedValue);
      },
    });

    return (
      <div className="su-relative su-w-[355px] su-rs-mb-4">
        {label && (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label
            {...getInputLabelProps()}
            className="su-flex su-text-18 su-mb-12"
          >
            {label}
          </label>
        )}
        {description && (
          <div className="su-flex su-text-18 su-mb-12">{description}</div>
        )}
        <div className="su-relative">
          <div
            {...getRootProps()}
            className={dcnb(
              'su-border su-border-solid su-relative su-rounded su-flex su-relative su-z-10 su-border-black-20 hocus:su-border-[#0597FF] hocus:su-ring-[5px] hocus:su-ring-digital-blue-light hocus:su-ring-opacity-60',
              popupOpen &&
                'su-border-[#0597FF] su-ring-[5px] su-ring-digital-blue-light su-ring-opacity-60'
            )}
          >
            <input
              disabled={disabled}
              className={dcnb(
                'focus-visible:su-outline-none su-border-b-3 su-border-transparent su-bg-white su-text-black su-flex su-items-center su-text-18 su-leading-[1.5] su-w-full su-px-20 su-py-18 ',
                getInputProps().value && 'su-pr-[105px]',
                popupOpen ? 'su-rounded-t' : 'su-rounded',
                !disabled && 'hocus:su-border-digital-blue'
              )}
              placeholder={placeholder}
              {...getInputProps()}
            />
            {!!inputValue.length && (
              <button
                type="button"
                {...getClearProps()}
                className="su-flex su-absolute su-items-center su-top-1/2 su-right-[20px] su-text-digital-blue su-text-19 su-font-semibold su-transform su--translate-y-1/2"
              >
                Clear
                <Icon
                  icon="x"
                  type="solid"
                  className="su-ml-3 su-w-27 su-h-27"
                  aria-hidden
                />
              </button>
            )}
          </div>

          {groupedOptions.length > 0 ? (
            <ul
              {...getListboxProps()}
              className="su-bg-white su-absolute su-top-full su-left-0 su-min-w-full su-border su-border-solid su-border-[#0597FF] su-rounded-b su-list-none su-p-0 su-overflow-auto su-max-h-[100vh] su-py-10"
            >
              {groupedOptions.map((option, index) => (
                <li
                  {...getOptionProps({ option, index })}
                  className={dcnb(
                    'su-autocomplete-option su-flex su-items-center su-whitespace-nowrap su-cursor-pointer su-px-20 su-py-10 su-m-0 focus:su-bg-digital-blue-dark focus:su-text-white focus:su-ring-[5px] focus:su-ring-digital-blue-light focus:su-ring-opacity-60 focus:su-z-10',
                    getOptionProps({ option, index })['aria-selected']
                      ? 'su-bg-digital-blue-light su-bg-opacity-30'
                      : ''
                  )}
                >
                  {option.value}
                </li>
              ))}
            </ul>
          ) : (
            popupOpen && (
              <div className="su-bg-white su-absolute su-top-full su-left-0 su-min-w-full su-bg-white su-border su-border-solid su-border-[#0597FF] su-rounded-b su-list-none su-overflow-auto su-max-h-[100vh] su-py-10 su-px-20">
                No options found
              </div>
            )
          )}


        </div>
        {multiple && !!values.length && (
          <div className="su-flex su-flex-wrap">
            {values.map((term) => (
              <div
                key={term.value}
                className="su-flex su-text-20 su-py-9 su-px-26 su-text-digital-blue su-text-20 su-rounded-full su-border-2 su-border-solid su-border-digital-blue su-mr-18 su-mt-26"
              >
                {term.value}
                <button
                  type="button"
                  onClick={() => clearTerm(term)}
                  onKeyUp={(e) => {
                    if (e.key === 'Backspace' || e.key === 'Delete') {
                      clearTerm(term);
                    }
                  }}
                >
                  <Icon icon="x" className="su-cursor-pointer" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

AutocompleteField.propTypes = {
  /**
   * CSS Class names.
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * CSS Class names.
   */
  onChange: PropTypes.oneOfType([PropTypes.func]),
};

// Default Props.
// -----------------------------------------------------------------------------
AutocompleteField.defaultProps = {};
