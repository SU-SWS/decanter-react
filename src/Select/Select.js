import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Listbox } from '@headlessui/react';
import { dcnb } from 'cnbuilder';
import * as Icons from '@heroicons/react/solid';

/**
 * Select Component
 *
 * HTML select element
 */

export const Select = React.forwardRef(
  (
    {
      containerClasses,
      id,
      label,
      description,
      onClick,
      disabled,
      options,
      initialSelect,
      children,
      ...props
    },
    ref
  ) => {
    let initial = [];
    if (initialSelect) {
      initial =
        initialSelect && options.filter((item) => item.id === initialSelect.id);
      initial = initial.length && initial[0];
    }

    const [selectedItem, setSelectedItem] = useState(initial);

    const onSelectHandler = (e) => {
      setSelectedItem(e);
      onClick(e);
    };

    const buildIcon = (type, attributes) =>
      React.createElement(Icons[type], { ...attributes });

    return (
      <div className={dcnb('su-inline-block', containerClasses)}>
        <Listbox
          value={selectedItem}
          onChange={(e) => onSelectHandler(e)}
          disabled={disabled}
        >
          {({ open }) => (
            <>
              {(label || description) && (
                <div className="su-text-18 su-leading-snug su-mb-12">
                  {label && (
                    <Listbox.Label className="su-flex su-font-semibold">
                      {label}
                    </Listbox.Label>
                  )}
                  {description && (
                    <span className="su-text-cool-grey">{description}</span>
                  )}
                </div>
              )}
              <div
                className={dcnb(
                  disabled ? 'su-border-black-10' : 'su-border-black-20',
                  'su-rs-mb-4 su-border su-border-solid su-rounded su-relative'
                )}
              >
                <Listbox.Button
                  className={dcnb(
                    disabled
                      ? 'su-bg-black-20 hocus:su-bg-black-20 su-text-cool-grey hocus:su-text-cool-grey su-cursor-default'
                      : 'su-bg-white hocus:su-bg-digital-blue-light hocus:su-bg-opacity-30 su-text-black',
                    'su-flex su-items-center su-text-18 su-leading-[1.5] su-w-full su-p-20 hocus:su-text-black hocus:su-no-underline su-pr-[60px] su-relative focus:su-ring-[5px] focus:su-ring-digital-blue-light focus:su-ring-opacity-60'
                  )}
                >
                  {selectedItem.icon &&
                    buildIcon(selectedItem.icon, {
                      'aria-hidden': true,
                      className: 'su-mr-9 su-w-[16px] su-h-[16px]',
                    })}

                  {selectedItem.value || 'Choose'}
                  {buildIcon('ChevronDownIcon', {
                    'aria-hidden': true,
                    className:
                      'su-absolute su-top-1/2 su-right-[15px] su-transform su--translate-y-1/2 su-w-30 su-h-30 su-text-cool-grey',
                  })}
                </Listbox.Button>
                {open && (
                  <Listbox.Options
                    {...props}
                    className="su-list-none su-p-0 su-shadow-lg"
                  >
                    {options.map((item) => (
                      /* Use the `active` state to conditionally style the active option. */
                      /* Use the `selected` state to conditionally style the selected option. */
                      <Listbox.Option key={item.id} value={item} as={Fragment}>
                        {({ active, selected }) => (
                          <li
                            className={dcnb(
                              'su-pr-[60px] su-flex su-items-center su-whitespace-nowrap su-cursor-pointer su-p-20 su-m-0 focus:su-bg-digital-blue-dark focus:su-text-white focus:su-ring-[5px] focus:su-ring-digital-blue-light focus:su-ring-opacity-60 focus:su-z-10',
                              active &&
                                'su-bg-digital-blue su-text-white su-relative',
                              selected &&
                                !active &&
                                'su-bg-digital-blue-light su-bg-opacity-30 su-text-black',
                              selected && 'su-relative'
                            )}
                          >
                            {selectedItem.icon &&
                              buildIcon(item.icon, {
                                'aria-hidden': true,
                                className: 'su-mr-9 su-w-[16px] su-h-[16px]',
                              })}
                            {item.value}
                            {selected &&
                              buildIcon('CheckIcon', {
                                'aria-hidden': true,
                                className:
                                  'su-absolute su-top-1/2 su-right-[17px] su-transform su--translate-y-1/2 su-w-[23px] su-h-[23px]',
                              })}
                          </li>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                )}
              </div>
            </>
          )}
        </Listbox>
        {children}
      </div>
    );
  }
);

Select.propTypes = {
  /**
   * CSS Class names.
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  containerClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  // Children
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
};
