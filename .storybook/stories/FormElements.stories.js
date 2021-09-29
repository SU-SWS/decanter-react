import React from "react";
import { centered } from "./Decorators";

const FormElementsComponent = ({ children, ...props }) => {
  return (
    <div {...props}>
      <form>
        <fieldset id="forms__input" class="su-rs-mb-3">
          <legend>Input fields</legend>
          <p>
            <label for="input__text">Text Input</label>
            <input id="input__text" type="text" />
          </p>
          <p>
            <label for="input__password">Password</label>
            <input id="input__password" type="password" />
          </p>
          <p>
            <label for="input__webaddress">Web Address</label>
            <input id="input__webaddress" type="url" />
          </p>
          <p>
            <label for="input__emailaddress">Email Address</label>
            <input id="input__emailaddress" type="email" />
          </p>
          <p>
            <label for="input__phone">Phone Number</label>
            <input id="input__phone" type="tel" />
          </p>
          <p>
            <label for="input__search">Search</label>
            <input id="input__search" type="search" />
          </p>
          <p>
            <label for="input__text2">Number Input</label>
            <input id="input__text2" type="number" />
          </p>
          <p>
            <label for="input__text3">Error</label>
            <input id="input__text3" type="text" />
          </p>
          <p>
            <label for="input__text4">Valid</label>
            <input id="input__text4" type="text" />
          </p>
        </fieldset>

        <fieldset id="forms__select" class="su-rs-mb-3">
          <legend>Select menus</legend>
          <p>
            <label for="select">Select</label>
            <select id="select">
              <optgroup label="Option Group">
                <option>Option One</option>
                <option>Option Two</option>
                <option>Option Three</option>
              </optgroup>
            </select>
          </p>
        </fieldset>

        <fieldset id="forms__checkbox" class="su-rs-mb-3">
          <legend>Checkboxes</legend>
          <ul>
            <li>
              <input
                id="checkbox1"
                name="checkbox"
                type="checkbox"
                checked="checked"
              />
              <label for="checkbox1">Choice A</label>
            </li>
            <li>
              <input id="checkbox2" name="checkbox" type="checkbox" />
              <label for="checkbox2">Choice B</label>
            </li>
            <li>
              <input id="checkbox3" name="checkbox" type="checkbox" />
              <label for="checkbox3">Choice C</label>
            </li>
            <li>
              <input id="checkbox4" name="checkbox" type="checkbox" />
              <label for="checkbox3">Choice D</label>
            </li>
          </ul>
        </fieldset>

        <fieldset id="forms__radio" class="su-rs-mb-3">
          <legend>Radio buttons</legend>
          <ul>
            <li>
              <input id="radio1" name="radio" type="radio" checked="checked" />
              <label for="radio1">Option 1</label>
            </li>
            <li>
              <input id="radio2" name="radio" type="radio" />
              <label for="radio2">Option 2</label>
            </li>
            <li>
              <input id="radio3" name="radio" type="radio" />
              <label for="radio3">Option 3</label>
            </li>
          </ul>
        </fieldset>

        <fieldset id="forms__textareas" class="su-rs-mb-3">
          <legend>Textareas</legend>
          <p>
            <label for="textarea">Textarea</label>
            <textarea
              id="textarea"
              rows="8"
              cols="48"
              placeholder="Enter your message here"
            ></textarea>
          </p>
        </fieldset>

        <fieldset id="forms__html5" class="su-rs-mb-3">
          <legend>HTML5 inputs</legend>
          <p>
            <label for="ic">Color input</label>
            <input type="color" id="ic" value="#000000" />
          </p>
          <p>
            <label for="in">Number input</label>
            <input type="number" id="in" min="0" max="10" value="5" />
          </p>
          <p>
            <label for="ir">Range input</label>
            <input type="range" id="ir" value="10" />
          </p>
          <p>
            <label for="idd">Date input</label>
            <input type="date" id="idd" value="1970-01-01" />
          </p>
          <p>
            <label for="idm">Month input</label>
            <input type="month" id="idm" value="1970-01" />
          </p>
          <p>
            <label for="idw">Week input</label>
            <input type="week" id="idw" value="1970-W01" />
          </p>
          <p>
            <label for="idt">Datetime input</label>
            <input type="datetime" id="idt" value="1970-01-01T00:00:00Z" />
          </p>
          <p>
            <label for="idtl">Datetime-local input</label>
            <input type="datetime-local" id="idtl" value="1970-01-01T00:00" />
          </p>
        </fieldset>

        <fieldset id="forms__action" class="su-rs-mb-3">
          <legend>Action buttons</legend>
          <p>
            <input type="submit" value="<input type=submit>" />
            <input type="button" value="<input type=button>" />
            <input type="reset" value="<input type=reset>" />
            <input type="submit" value="<input disabled>" disabled />
          </p>
          <p>
            <button type="submit">&lt;button type=submit&gt;</button>
            <button type="button">&lt;button type=button&gt;</button>
            <button type="reset">&lt;button type=reset&gt;</button>
            <button type="button" disabled>
              &lt;button disabled&gt;
            </button>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default {
  title: "HTML Elements/Form Elements",
  component: FormElementsComponent,
  decorators: centered,
};

// Safety first.
const Template = (args) => <FormElementsComponent {...args} />;
export const FormElements = Template.bind({});
FormElements.storyname = "Form Elements";
