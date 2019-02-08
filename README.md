# Frameworksito

A very very very small reactive front end framework made in JS

## Features

- Private state for each component
- **commit()** function to update the component's state
- **getState()** function to get the components state data

## Usage

To instantiate a __frameworksito__ 

```javascript
new frameworksito(dataObject, htmlElement);
````

```javascript
const InputComponent = new frameworksito({text: ''}, document.querySelector('#InputComponent'));
```

Use the ref attribute to bind a text element to the state

```html
<h1 ref="counter"></h1>
```

```javascript
const ButtonComponent = new frameworksito({counter: 0}, document.querySelector('#ButtonComponent'));
```

Update component state using the commit function

```javascript
ButtonComponent.commit('counter', 4);
```

Get the component's state using the __getState__ function

```javascript
ButtonComponent.getState();
```