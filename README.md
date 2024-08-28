## React 18 Upgrade

### ReactDOM.render is Deprecated

In React 18, `ReactDOM.render` has been deprecated and replaced by `createRoot`. This change was implemented in the `index.js` file:

```javascript
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
