# Web Application Overview

## Types of Routing
- **Client-Side Routing**: Managing routes directly in the browser using JavaScript. This improves user experience by avoiding full-page reloads.
- **Server-Side Routing**: Routes are handled on the server, and a new page is loaded each time a route changes.

---

## Redux Toolkit Setup

1. **Install Dependencies**
   - Install `@reduxjs/toolkit` and `react-redux` to manage application state.

2. **Build the Store**
   - Create a central store to manage application-wide state.

3. **Connect Store to App**
   - Use the Redux `Provider` to make the store accessible to all components in the app.

4. **Create a Slice**
   - Define state slices (e.g., cart slice) with reducers and actions for specific functionalities.

5. **Dispatch Actions**
   - Update the state by dispatching actions from components.

6. **Selectors**
   - Retrieve specific parts of the state using selector functions.

---

## Testing Setup

1. **Install Testing Libraries**
   - Add React Testing Library and Jest for unit and integration testing.

2. **Install Babel Dependencies**
   - Add Babel to transpile modern JavaScript and JSX during testing.

3. **Configure Babel**
   - Set up Babel presets to ensure compatibility with React and Jest.

---

## Types of Testing
- **Unit Testing**: Verify the functionality of individual components or functions.
- **Integration Testing**: Test interactions between multiple modules or components.
- **End-to-End (E2E) Testing**: Simulate user interactions and test the entire application workflow.
- Configure Parcle Config File to disable default babel transpilation
-