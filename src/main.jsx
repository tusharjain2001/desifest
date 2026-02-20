import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { OmnisendProvider } from 'react-omnisend'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <OmnisendProvider brandID="YOUR_BRAND_ID">
                <App />
            </OmnisendProvider>
        </BrowserRouter>
    </React.StrictMode>
)
